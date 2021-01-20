//find maximum among two or more elements
let maximum = Math.max(5, 6, 3, 4, 9, 10);
console.log(maximum);

let maximum2=Math.max(-4,-6,-1);
console.log(maximum2);

//find the maximum element of an array
let marks=[45,43,65,34,76,23,38,69,26,34];
let maxNum=marks[0];
for(let i=0;i<marks.length;i++)
{
    if(marks[i]>maxNum)
    {
        maxNum=marks[i];
    }
}
console.log(maxNum);

//find max min value of an array
let maxValue=Math.max(...marks);
let minValue=Math.min(...marks);
console.log(maxValue,minValue);
