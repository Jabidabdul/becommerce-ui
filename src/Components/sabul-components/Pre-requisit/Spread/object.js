let obj={
    name:"Sabul",
    add :{
        country: "india",
        state :{
            name:"Assam",
            pin:"781111"
        }
    }
}

// let obj2= obj;
// obj2.name ="Hussain"; 

// let obj2= {...obj};  // SHALLOW COPY
// obj2.name ="Hussain"; 

// let obj2 = {...obj, add:{...obj.add}}
// obj2.add.country="Bharat";

// let obj2 = {...obj, add:{...obj.add, state:{...obj.add.state}}};  // DEEP copy
// obj2.add.state.pin="111111";

let obj2=JSON.parse(JSON.stringify(obj))
obj2.add.state.pin="111111";
console.log(obj);
console.log(obj2);
