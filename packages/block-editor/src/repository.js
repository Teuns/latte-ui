const MAX_HISTORY_SIZE = 25;

export class Operation
{

	#block;

	constructor(block)
	{
		this.#block = block;
	}

	getBlock()
	{
		return this.#block;
	}

	redo()
	{
		throw new Error("[block-editor] Redo not implemented for this operation.");
	}

	undo()
	{
		throw new Error("[block-editor] Undo not implemented for this operation.");
	}

}

export class ChildrenUpdateOperation extends Operation
{

	#after;
	#before;

	constructor(block, before, after)
	{
		super(block);

		this.#after = after;
		this.#before = before;
	}

	redo()
	{
		this.getBlock().setChildren(this.#after, true);
	}

	undo()
	{
		this.getBlock().setChildren(this.#before, true);
	}

}

export class OptionsUpdateOperation extends Operation
{

	#after;
	#before;

	constructor(block, before, after)
	{
		super(block);

		this.#after = after;
		this.#before = before;
	}

	redo()
	{
		this.getBlock().setOptions(this.#after);
	}

	undo()
	{
		this.getBlock().setOptions(this.#before);
	}

}

export class Repository extends EventTarget
{

	#canUpdate = true;
	#history = [];
	#future = [];

	addHistory(operation, clearFuture = true)
	{
		if (!this.#canUpdate)
			return;

		this.#history.unshift(operation);
		this.#history = this.#history.slice(0, Math.min(this.#history.length, MAX_HISTORY_SIZE));

		if (clearFuture)
			this.#future = [];

		this.onUpdate();
	}

	addFuture(operation)
	{
		if (!this.#canUpdate)
			return;

		this.#future.unshift(operation);

		this.onUpdate();
	}

	redo()
	{
		if (this.#future.length === 0)
			return;

		this.#canUpdate = false;

		const operation = this.#future.shift();
		operation.redo();

		this.#canUpdate = true;

		this.addHistory(operation, false);
	}

	undo()
	{
		if (this.#history.length === 0)
			return;

		this.#canUpdate = false;

		const operation = this.#history.shift();
		operation.undo();

		this.#canUpdate = true;

		this.addFuture(operation);
	}

	onUpdate()
	{
		this.dispatchEvent(new CustomEvent("repository-update", {
			detail: {
				hasHistory: this.#history.length > 0,
				hasFuture: this.#future.length > 0
			}
		}));
	}

}
