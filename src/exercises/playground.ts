/* eslint-disable */

// Primitive data types

const isDone = false;

const myNumber = 4.542;

enum MyString {
  hanselmann = "hanselmann",
  hanselfrau = "hanselfrau",
}

let myString: MyString = MyString.hanselmann;

let myString2: string = "foo";

// Complex data types

type PersonTuples = Array<[string, number]>;

// const myArray: string[] = ['a', 'b'];
const myArray: any = [
  ["Klaus", 28],
  ["Verena", null],
];

myArray[1] = ["d", 1];

console.log(myArray[16]);

console.log(myArray);

// any vs. unknown

let a: unknown = function myFunction(): void {
  //   return undefined;
};

// undefined vs. null

// let a: unknown = "blabla";

if (typeof a === "function") {
  a();
}

// a.foo;

// Objects

type Person = {
  name: string;
  age: string;
};

interface Book {
  isbn: string;
  title: string;
  pages?: number | null;
}
let book1: Book = {
  isbn: "978-3-15-000001-4",
  title: "Faust. Der Tragödie Erster Teil",
  pages: null,
};

console.log(book1);
