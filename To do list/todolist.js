const inputBox = document.getElementById("inputbox");
const taskListt = document.getElementById("tasklistt");
function addtask(){
    if(inputBox.value===''){
    alert("please ! enter something");
}
else {
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    taskListt.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
inputBox.value="";
saveData();
}
 taskListt.addEventListener("click",function(e){
if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

 }
 ,false);
 function saveData(){
    localStorage.setItem("data",taskListt.innerHTML);
 }
 function showTask(){
    taskListt.innerHTML=localStorage.getItem("data");
 }
 showTask();