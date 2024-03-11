const students =[
     {name:'sumon', emali:'sumon@gmail.com', avg: 80, fiftyPercent: true},
     {name:'sasjdh', emali:'sakhgs@gmail.com', avg: 57, fiftyPercent: false},
     {name:'saki', emali:'saki@gmail.com', avg: 30, fiftyPercent: false},
     {name:'rakib', emali:'rakib@gmail.com', avg: 70, fiftyPercent: true},
     {name:'sojid', emali:'sojib@gmail.com', avg: 31, fiftyPercent: false},
     {name:'sunny', emali:'sunny@gmail.com', avg: 40, fiftyPercent: true},
     {name:'sakib', emali:'sakib@gmail.com', avg: 57, fiftyPercent: true},
];

const scic = students.filter((student) => student.avg > 50 && student.fiftyPercent === true);
// console.log(scic);
const scicEmali = scic.map((emali) => emali.emali);
console.log(scicEmali)