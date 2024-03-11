// for Each Methods

const arr = [2, 66, 47, 1];

// const a = (x) => console.log(x);

// arr.forEach(a);

arr.forEach((x) => console.log(x));

const number = [1, 2, 3];
let sum = 0;
number.forEach(item => sum = sum + item);
const a = sum;
// console.log(a);


// const string = ['mango', 'apple', 'banana',];

// string.forEach(item => console.log(item));


// Map Methods
const string1 = ['mango', 'apple', 'banana',];
// string1.map((item,index,arr)=> console.log(item,index, arr));

// find Methods
const string = ['mango', 'apple', 'banana',];

const find = (fruits) => {
     for (let item of fruits) {
          if (item === 'apple') {
               return item;
          }
     }
}
// const x = find(string);
// console.log(x)


const y = string.find((item) => item === 'apple');
// console.log(y)

// 

// const numbes1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const eventNumber = (number) => {
    
//      let result =number[0];
//      for (let item of number) {
//           if (item < result) {
//                result.push(item);
//           }
//           result = result = item;
          
//      }
//      return result;
// }
// const xy = eventNumber(numbes1);
// console.log(xy)

// filter Methods

const numbes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const find1 = (number) => {
     const result = []
     for (let item of number) {
          if (item % 2 === 0) {
               result.push(item)
          }

     }
     return result;

}
const x = find1(numbes);
// console.log(x)

const filterMethods = numbes.filter((item)=> item % 2 === 0);
// console.log(filterMethods);

// reduce Methods

const num = [1,2,3,4,5];
const Sum = (number) => {
     let count = 0;
for(let item of number){
     count = count + item;
}
return count;

}
const SumS = Sum(num);
// console.log(SumS)

const num1 = [1,2,3,4,5];

const sumNumber = num1.reduce((previous, current) => previous + current );
// console.log(sumNumber);
// const num2 = [1,2,3,4,5];
// const mult = num2.reduce((previous,current) => previous * current);
// console.log(mult)

const num2 = [1,2,3,4,5];
const initial = 50;
const sum1 = num2.reduce((previous,current) => previous + current,initial);
// console.log(sum1)




