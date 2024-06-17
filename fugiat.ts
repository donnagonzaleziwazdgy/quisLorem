interface Person {
  name: string;
}

class People {
  private count: number;

  constructor() {
    this.count = 0;
  }

  public static get count(): number {
    return this._count;
  }

  public addPerson(): void {
    this.count++;
  }

  public static setCount(count: number): void {
    this._count = count;
  }

  private static _count: number = 0;

  public static getCount(): number {
    return this._count;
  }
}

// Usage
const people = new People();
console.log(People.getCount()); // 0
people.addPerson();
console.log(People.getCount()); // 1
people.addPerson();
console.log(People.getCount()); // 2
