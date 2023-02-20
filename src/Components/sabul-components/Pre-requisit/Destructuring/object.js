let obj= {
    name:"Sabul",
    country:"India",
    state:"Assam"
}

// let name = obj.name;
// let state=obj['state']

// let {name,country,state}=obj

// let {name,country,state,extra}=obj

// let {name,country,state,extra="default value"}=obj

let {name:fname,country,state,extra="default value"}=obj
console.log(fname,country, state,extra);