let flag=0,i=1;
for( i=1;i<=10;i++)
{
    let randomNum=Math.random()*6;
    let output=Math.round(randomNum);
    console.log(output);
    if (output==1)
    {
       flag=1;
       break;
    }
}
if(flag==1){
    console.log("After ",i," times 1 is come");
}
else{
    console.log("1 is not come");
}
