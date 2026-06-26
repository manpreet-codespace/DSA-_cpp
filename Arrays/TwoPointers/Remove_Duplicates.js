// sorted array 

let arr=[1,1,2,2,3,3,3,4,5];

let slow =0;

for(let fast =1;fast<arr.length;fast++)
{
    if(arr[fast] !== arr[slow])
    {
        slow++;
        arr[slow] = arr[fast];

    }
}

arr.length = slow+1;
console.log(arr);

