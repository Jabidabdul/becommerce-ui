let arr =["Hi","I","am", "Sabul"]

// let a=arr[0];
// let b=arr[1]

// Destructuring
// let [a,b,c,d] = arr

// let [a,b,,d] = arr  // Skip an element

// let [a,b,c,d,extra] = arr

let [a,b,c,d,extra="Hello"] = arr // Default value
console.log(a,b,c,d,extra);