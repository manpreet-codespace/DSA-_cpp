// Find All NEgative Numbers in  subarray of size K

function negativeNumbers(nums,k){
    let result =[];

    for(let i=0 ;i<=nums.length-k;i++){
        let found =false;

        for(let j =i;j<i+k;j++)
        {
            if(nums[j] <0)
            {
                result.push(nums[j]);
                found = true;
                break;

            }
        }
        if(!found)
        {
            result.push(0);

        }

    }

    return result;

}


// SLIDING WINDOW APPROACH 

function negativeNumber(nums,k)
{
    let result =[];
    let queue = [];

    for(let i=0 ;i<k ; i++)
    {
        if(nums[i]<0)
        {
            queue.push(i);

        }
    }

    if(queue.length>0){
        result.push(nums[queue[0]]);

    }
    else{
        result.push(0);

    }

    for(let i =k;i<nums.length;i++)
    {
        while(queue.length>0 &&  queue[0] <=i-k)
        {
            queue.shift();

        }

        if(nums[i]<0)
        {
            queue.push(i);

        }
     if(queue.length>0)
     {
        result.push(nums[queue[0]]);

     }
     else{
        result.push(0);

     }
    }
    return result;


}

let nums = [-8,2,3,-6,10];
let k =2;
console.log(negativeNumbers(nums,k));
console.log(negativeNumber(nums,k));
