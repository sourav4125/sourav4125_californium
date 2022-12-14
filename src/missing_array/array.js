// find the missing number in the array

let arr= [1,3,5,6,7]
let newarr=[]
for(let i=1;i<arr.length;i++){
    if(arr.indexOf(i)==-1){
        newarr.push(i)
    }
 }

console.log(newarr)

