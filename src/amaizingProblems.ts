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

  // removeDuplicates([55, 55, 65, 25, 777, 77]);
  const countWordOccurrences = (sentence: string, word: string) => {
    if (sentence.includes(word)) {
      console.log(word);
    }
  };
  // countWordOccurrences("I know you kiptia", "kiptia");

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangular";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape): number => {
    if (shape.shape === "circle") {
      return Math.PI * Math.pow(shape.radius, 2);
    } else if (shape.shape === "rectangular") {
      return shape.width * shape.height;
    }
    throw new Error("Invalid shape");
  };

  // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  // console.log(circleArea);

  // const rectangleArea = calculateShapeArea({
  //   shape: "rectangular",
  //   width: 4,
  //   height: 6,
  // });
  // console.log(rectangleArea);
  interface perSon {
    name: string;
    age: number;
  }

  function getProperty<T extends perSon>(person: T, prop: keyof T) {
    const user = console.log(person[prop]);
    return user;
  }
  const showkat = { name: "showkat", age: 44 };
  // getProperty(showkat, "age");
  interface personProfile {
    name: string;
    age: number;
    email: string;
  }
  function updateProfile<T extends personProfile>(
    person: T,
    prop: { [K in keyof T]?: T[K] }
  ) {
    const updatedPerson = { ...person, ...prop };
    console.log(updatedPerson);
  }
  // updateProfile({ name: "jon", age: 455, email: "kkkk" }, { age: 44 });

  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      (this.make = make), (this.model = model), (this.year = year);
    }
    getCarAge(): number {
      return new Date().getFullYear() - this.year;
    }
  }
  const newCAR = new Car("lkd", "ldl", 2015);
  console.log(newCAR.getCarAge());
}
