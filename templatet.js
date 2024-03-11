const name = 'suman';
const age = 23;
const address = 'Noakhali';
const single = 'Yes I am Single';
const  booke =['bangla', 'english', 'math']

const sentense = '\n amar name '+ name +'\n amar age '+age+' \n amar address '+ address + '\n ' +single;
// console.log(sentense);

const sentense1 = `Amar Name ${name}. 
Amar Age ${age} .
Amar bookes ${booke.map(subject => subject)} 
Address ${address} . 
single ${single} .`;
console.log(sentense1)