const todoInput = document.getElementById("input-box");
const lst = document.getElementById("list");

function addTask() {
    let li = document.createElement("li");
    li.innerHTML = todoInput.value;
    lst.append(li);
}



const btn = document.getElementById("bttn");
       btn.addEventListener("click", addTask)