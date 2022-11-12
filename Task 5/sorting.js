let arr=[];

function createNewArray(noOfBars=60)
{
    arr=[];

    for(var i=0;i<noOfBars;i++)
{
    arr.push(Math.floor(Math.random()*100));
}
console.log(arr);

const bars=document.querySelector("#bars");
for(let i=0;i<noOfBars;i++)
{
    const bar=document.createElement("div");
    bar.style.height=`${arr[i]*2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
}
}
 const newArray=document.querySelector(".New_Array");
 newArray.addEventListener("click",function(){
  createNewArray(60);
 });

 function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}


//createNewArray();
