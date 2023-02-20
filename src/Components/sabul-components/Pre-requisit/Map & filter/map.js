let arr=[1,2,3,4,5]

let arr2=[];

// for(let i=0; i<arr.length; i++){
//     arr2[i]=arr[i]*2;
// }

arr2=arr.map((value,index)=>{
    // console.log(value,index);
    return value*2;
})
console.log(arr);
console.log(arr2);
