//1
{
  function sumArray(arr: number[]): void {
    let sum = 0;
    let output;
    for (let i = 0; i < arr.length; i++) {
      const result = (sum += arr[i]);
      output = result;
    }
    // return console.log(output);
  }

  // console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  function removeDuplicates(arr: number[]) {
    let i: number[] = [];
    arr.filter((e, w) => {
      if (arr.indexOf(e) == w) {
        i.push(e);
      }
    });
    console.log(i.sort());
  }

  removeDuplicates([55, 55, 65, 25, 777, 77]);
}
