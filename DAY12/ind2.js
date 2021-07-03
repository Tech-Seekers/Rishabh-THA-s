let todos = document.getElementById("todo-container")

function getTodos(){
    let todoList=localStorage.getItem("todos");
    console.log(todoList);
    todos.innerHTML=todoList;
}

function addTodo(event){
    if(event.code==="Enter"){
        let todo=document.getElementById("todo-input").value;
        if(todo){
            let listItem=`<li><span><i class="fa fa-trash"></i></span>${todo}</li>`
            console.log(listItem);
            document.getElementById("todo-container").innerHTML+=listItem;
            document.getElementById("todo-input").value="";
        }else{
            alert("Enter a valid todo");
        }
        localStorage.setItem('todos',todos.innerHTML);
    }

}

document.querySelector("ul").addEventListener('click',function(event){
    event.target.classList.toggle('completed');
    localStorage.setItem('todos',todos.innerHTML);
    if(event.target.tagName === "I"){ event.target.parentElement.parentElement.remove();
    }
});


  
  document.getElementById("addNew").addEventListener("click", function(){
    document.getElementById("todo-input").classList.toggle("showInput");
  })