// const array =[10,21,14,3,47];

// const a = array[0];
// const b = array[1];
// const c = array[2];
// const d = array[3];
// console.log(a,b,c,d)


const array =[10,21,14,3,47];

const [a,b,c, ...rest] = array;
console.log(a,b,c,rest)