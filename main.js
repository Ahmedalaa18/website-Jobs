

let listDiv=document.getElementsByClassName("main_div");
let listArray=[];
for (let i = 0; i <listDiv.length; i++) 
{
    listArray.push(listDiv[i]);
    
}

//for btns write in textbox

let btns =document.querySelectorAll(".tag");
let inp=document.getElementById("myInp");

for (let i = 0; i < btns.length; i++) 
{
   btns[i].addEventListener("click",function(){

       document.getElementById("myInp").value=btns[i].innerHTML;
   })
}

function search(term)
{
    for (let i = 0; i <listArray.length; i++) 
    {
        if (listArray[i].innerHTML.includes(term)!==true && term!=" ") 
        {
            listArray[i].style.display="none";
        }
    }
}        