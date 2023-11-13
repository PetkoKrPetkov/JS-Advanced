class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }
    addItem(itemName, quantity) {
        if(quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if(this.items.length > this.capacity) {
            throw new Error('The inventory is already full.');
        }

        let itemFound = this.items.find(item => item.itemName === itemName);
        if(itemFound) {
            itemFound.quantity += quantity;
        } else {
            this.items.push({itemName, quantity});
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }
    sellItem(itemName, quantity) {
        if(quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        let itemIndex = this.items.findIndex(item => item.itemName === itemName);
        if(itemIndex.length < 0) {
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        }
        if(this.items[itemIndex].quantity < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        }
        this.items[itemIndex].quantity -= quantity;
        if(this.items[itemIndex].quantity === 0) {
            this.items.splice(itemIndex, 1);
            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`

    }
    restockItem(itemName, quantity) {
        if(quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }
        let itemFound = this.items.find(item => item.itemName === itemName);
        if(itemFound) {
            itemFound.quantity += quantity;
        } else {
            this.items.push({itemName, quantity});
        }
        let i = this.outOfStock.findIndex(itemName);
        if(i > -1) {
            this.outOfStock.splice(i,1)
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }
    getInventorySummary() {
        let finalString = `Current Inventory:\n`;
        finalString += `${this.items.map(({ itemName, quantity}) => `${itemName}: ${quantity}`).join('\n')}`;
        if(this.outOfStock.length > 0) {
            finalString += `\nOut of Stock: ${this.outOfStock.join(', ')}`;
        }
        return finalString;
    }
    

}
const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5)); 
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
