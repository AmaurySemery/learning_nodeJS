const EventEmitter = require('events').EventEmitter;

class ShoppingList extends EventEmitter {
    constructor() {
        super();
        this.list = [];
    }
    add(item) {
        this.list = [...this.list, item];
        this.emit('added', this.list);
    }
}

module.exports = ShoppingList;
// exports.add = () => {};