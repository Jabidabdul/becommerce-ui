let obj ={
    name:"Sabul",
    add: {
        country:"India",
        state:{
            code:"Assam",
            Pin:"111111"
        }
    }
}

// let {name}=obj;
// console.log(name);

// let {add:{country}}=obj;
// console.log(country);
// let {add:{country:Desh}}=obj;
//  console.log(Desh);

let {add:{state:{code:StateName}}}=obj;
console.log(StateName);
/////////////////

// Problem

const LOCAL_FORCAST = {
    yesterday:{low:61, high:75},
    today:{low:64, high:77},
    tomorrow:{low:68, high:80}
};

// Extract today low value

const {today:{low:lowToday}}=LOCAL_FORCAST ;
const {tomorrow:{high}} = LOCAL_FORCAST ;
console.log(lowToday);
console.log(high);
