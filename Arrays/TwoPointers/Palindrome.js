let arr = [1,2,3,2,1];

let left =0;
let right = arr.length-1;

while(left<right)
{
    if(arr[left] !== arr[right])
    {
        result= false;

    }
    else{
        result = true;

        
    }


    left++;
    right--;


}

console.log(result);

