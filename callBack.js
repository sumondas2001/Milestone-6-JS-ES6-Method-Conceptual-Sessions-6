const function1 =(a,b,callBack)=>{
     // console.log(typeof callBack)
     callBack(a,b)
};
const callBack=(x,y)=>{
     console.log('sum :', x+y);
};

function1(10,5,callBack)