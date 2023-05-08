// annotates and explaines as a number. This can't become a string or anything else than a number.
let age: number = 20;
if (age < 50) age += 10;
console.log(age);

let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;

// This is a tuple. A fixed length array with multiple types.
let user: [number, string] = [1, "Mosh"];
user.push(1);

const small = 1;
const medium = 2;
const large = 3;

// PascalCase to write enums
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear || 2022 < 50_000) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
