export default class Todo {
    done = false
    constructor(public content: string) {
    }

    markDone() {
        this.done = true
    }

    markTodo() {
        this.done = false
    }
}