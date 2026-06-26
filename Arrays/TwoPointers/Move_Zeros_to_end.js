let arr =[0,1,0,2,3];

let slow =0 ;
for(let fast=0;fast<arr.length;fast++){
    if(arr[fast]!==0){
        [arr[slow],arr[fast]]= [arr[fast],arr[slow]];

        slow++
    }
}

console.log(arr);
