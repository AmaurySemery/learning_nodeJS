const EventEmitter = require('events').EventEmitter;

class ShoppingList extends EventEmitter {
    constructor() {
        super();
        this.list = [];
    }
    add(item) {
        this.emit('added', this.list);
        if(item.includes('surgelé')) {
            this.emit('bringFreezerBag', 'le sac rouge');
        }
        if (item.includes('cocaïne')) {
            this.emit('error', new Error('Ce produit prohibé ne peut pas être ajouté à la liste'));
            return;
        }
        this.list = [...this.list, item];
    }
}

module.exports = ShoppingList;
// exports.add = () => {};