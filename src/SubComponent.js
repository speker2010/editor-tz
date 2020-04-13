export default class SubComponent {
    static get isInline() {
        return true;
    }

    static get sanitize() {
        return {
            sub: true,
        };
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;

        this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state);
    }

    constructor({ api }) {
        this.button = null;
        this._state = false;
        this.api = api;

        this.tag = 'SUB';
        this.class = '_active';
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.textContent = 'Sub';
        this.button.classList.add(this.api.styles.inlineToolButton);

        return this.button;
    }

    surround(range) {
        if (this.state) {
            this.unwrap(range);
            return;
        }

        this.wrap(range);
    }

    wrap(range) {
        const selectedText = range.extractContents();
        const sub = document.createElement(this.tag);

        sub.appendChild(selectedText);
        range.insertNode(sub);

        this.api.selection.expandToTag(sub);
    }

    unwrap(range) {
        const sub = this.api.selection.findParentTag(this.tag);
        const text = range.extractContents();

        sub.remove();

        range.insertNode(text);
    }

    checkState() {
        const sub = this.api.selection.findParentTag(this.tag);
        this.state = !!sub;
    }
}
