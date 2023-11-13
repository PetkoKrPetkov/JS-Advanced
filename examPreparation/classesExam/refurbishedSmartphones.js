class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }
    addSmartphone(model, storage, price, condition) {
        
        if(!model || storage % 1 !== 0 || price < 0 || !condition) {
            throw new Error("Invalid smartphone!")
        }
        this.availableSmartphones.push({model, storage, price, condition});
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }
    sellSmartphone (model, desiredStorage) {
        let foundSmartphone = this.availableSmartphones.find(x => x.model === model);
        if(!foundSmartphone) {
            throw new Error(`${model} was not found!`);
        }
        
        let price = foundSmartphone.price;
        let storage = foundSmartphone.storage;
        let diff =  storage - desiredStorage;
        if(diff < 0) {
            if(diff < -128) {
                price *= 0.80;
            } else {
                price *= 0.90;
            }
        }
        
        let indexToBeRemoved = this.availableSmartphones.indexOf(foundSmartphone);
        this.soldSmartphones.push({model, storage, price});
        this.availableSmartphones.splice(indexToBeRemoved, 1);
        this.revenue += price; 
        return `${model} was sold for ${price.toFixed(2)}$`; 
    }
    upgradePhones () {
        let result = ['Upgraded Smartphones:', ];
        this.availableSmartphones.forEach(x => x.storage *= 2);
        this.availableSmartphones.forEach(x => result.push(`${x.model} / ${x.storage} GB / ${x.condition} condition / ${x.price.toFixed(2)}$`));
        return result.join('\n');
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
console.log(retailer.upgradePhones());
