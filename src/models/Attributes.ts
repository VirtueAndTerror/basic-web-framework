export class Attributes<T> {
  constructor(private data: T) {
    this.get = this.get.bind(this);
  }
  // Step 1: Generic Constraint K can only be a key of T.
  // Step 2: Type Anotation:: return the value of T that exist on the key K.
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  getAll(): T {
    return this.data;
  }

  set(update: T): void {
    // Take all the properties on 'update' and copy & paste it to 'this.data'
    Object.assign(this.data, update);
  }
}
