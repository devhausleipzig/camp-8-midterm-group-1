type SeatsLocationPriceProps = {
  primary: boolean;
  Location: string;
  Price: number;
};
type Input = "Front" | "Middle" | "Back";
const Object: Record<Input, number> = {
  Front: 12.95,
  Middle: 14,
  Back: 16,
};
// export function SeatsLocationPrice({ [{Front:2}, {Middle:5}, {Back"6}] }: Input) {
//   return (
//     {Object.Front}
//   );
// }

export function 

//const map1 = new Map<string, string | number>([
//   ['name', 'Tom'],
//   ['country', 'Germany'],
//   ['age', 30],
// ]);

// ✅ Using forEach
map1.forEach((value, key) => {
  console.log(value, key); // 👉️ Tom name, Germany country, 30 age
});

/*
    Higher order functions
    - sort -> reorders elements in an array => reference to the mutated array
    - map
*/

function map(
  arr: number[],
  callbackFn: (value: number, index: number, array: number[]) => number
) {
  let newArray: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const result = callbackFn(element, i, arr);
    newArray.push(result);
  }

  return newArray;
}

function double(value: number) {
  return value * 2;
}

function square(value: number) {
  return value * value;
}

console.log(map([1, 2, 3], double));
console.log(map([1, 2, 3], square));
