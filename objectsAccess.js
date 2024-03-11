const person ={
      name: 'sumon',
       age: 23,
        address: 'noakhali' 
     }

     // console.log(person.age);
     // console.log(person['age']);
     // const personName = 'address'
     // console.log(person[personName]);


const complexObjects = {
     id: 1,
     name: 'Main Objects',
     info:{
          description : 'This is a Complex nested objects ',
          auther:{
               firstName :'John',
               lestName: 'Doe'
          }
     },
     data: {
          values :[10, 20, 30, 40, 540],
          settings:{
               isEnabled: true,
               maxItems : 5
          }
     }
};

// name, description, lestName, lest element of values, maxItems

const name = complexObjects.name;
// console.log(name)

const description = complexObjects.info.description;
// console.log(description)
const lestName = complexObjects.info.auther.lestName;
// console.log(lestName)


// const lestValues = complexObjects.data.values[4];
const lestValues = complexObjects.data.values[complexObjects.data.values.length -1]
// console.log(lestValues)
const maxItems= complexObjects.data.settings.maxItems;
console.log(maxItems)