
let arr = [10,20,30,40,50]
    let start = 0;
    let end = arr.length-1;

    while(start<end)
    {
       [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;

    }

    console.log(arr);
