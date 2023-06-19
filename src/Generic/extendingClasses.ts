interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(object: T) {
    this._objects.push(object);
  }
}

class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let store = new CompressibleStore<Product>();
store.compress()

class SearchableStore<T extends {name: string}> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

class ProductStore extends Store<Product> {
    filterByCategory(_category: string): Product[] {
        return [];
    }
}