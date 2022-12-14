let arr= [33, 34, 35, 37, 38];
// hint :n*first+last/2
let n=arr.length;
let sum=0;

for(let i=0;i<n;i++){
    sum+=arr[i]
}

let top=arr[0]
let bottom=arr.pop()
let total_sum=(n+1)*(top+bottom)/2;
let lostnumber=total_sum-sum;
console.log(lostnumber)
