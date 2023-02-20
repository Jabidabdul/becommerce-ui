let arr=['apple', 'mango','orange', 'banana','watermelon']

let arr2=[];

// for(let i=0; i<arr.length; i++){
//     let fruit=arr[i];
//     if(fruit.length>6){
//         arr2.push(fruit)
//     }
// }

arr2=arr.filter(function(fruit){
    return fruit.length>6;
})

console.log(arr);
console.log(arr2);
