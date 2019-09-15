// Let's keep it simple and only add the following methods to the Map:

// setItem(key: string, item: T) // should create a new key-value pair

// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:

class MyMap<T extends number | string> {
    arr = new Map();
    setItem(key: string, val: T): void {
        this.arr.set(key, val)
    }
    printMap(): void {
        // for (let [key, val] of this.arr.entries()) {
        //     console.log(key + ' = ' + val);
        // }
        this.arr.forEach((val, key)=>console.log(key + ' = ' + val));
    }
    getItem(key: string): void {
        this.arr.get(key);
    }
    clear(): void {
        this.arr.clear();
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();