let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let turn0=true; //playerx,player0
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector(".msg");
let msgcontainer= document.querySelector(".msg-container");
const winpatern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
   
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
          box.innerText="0";
          turn0=false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });

});
const disabledBoxes=()=>{
    for(let box of boxes)
    {
          box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes)
    {
          box.disabled=false;
          box.innerText="";


    }
}
const showWinner =(winner)=>{
       msg.innerText=`congratulation , winner is ${winner} `
       msgcontainer.classList.remove("hide");
       disabledBoxes();
}
const checkwinner=()=>{
    for(let paterns of winpatern){
       // console.log(paterns[0],paterns[1],paterns[2]);

//console.log(
  //boxes[paterns[0]].innerText,
 // boxes[paterns[1]].innerText,
  //boxes[paterns[2]].innerText
//);
  let pos1 = boxes[paterns[0]].innerText;
 let pos2= boxes[paterns[1]].innerText;
 let pos3= boxes[paterns[2]].innerText;
    
    if(pos1 !="" && pos2!="" && pos3!="")
    {
        if(pos1===pos2 && pos2===pos3)
        {
            console.log("winner",pos1);
            showWinner(pos1);
        }
    }
}
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
