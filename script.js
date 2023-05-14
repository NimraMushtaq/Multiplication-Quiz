const num1=Math.floor(Math.random()*10)
console.log(num1)
const num2=Math.floor(Math.random()*10)
console.log(num2);

const scoreEl=document.getElementById("score");
const inputEl=document.getElementById("input")
const formEl=document.getElementById("form");
// console.log(scoreEl.value)
const questionEl=document.getElementById("question");
questionEl.innerText=`What is ${num1} multiplied by ${num2} ?`;
//we get item from our local storage but its in string so convert to integer
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEl.innerText=`score: ${score}`;
const correctAns=num1*num2;

formEl.addEventListener("submit",()=>{
    const userAns=+inputEl.value;
    console.log(userAns,typeof userAns) 
    if(userAns===correctAns){
    score++
    console.log(score)
    updateLocalStorage()
}
else{
    score--;
    console.log(score)
    updateLocalStorage()
}
})
// The score is initialized to zero evrytime the browser reloads so we need to store score in a local storage
function updateLocalStorage(){
    //local storage does not store integers so convert it to string
    localStorage.setItem("score",JSON.stringify(score))
}