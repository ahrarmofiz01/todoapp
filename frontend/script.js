const API = "http://localhost:5000/todos";

async function loadTodos(){

    const res = await fetch(API);

    const data = await res.json();

    const list = document.getElementById("list");

    list.innerHTML="";

    data.forEach(todo=>{

        list.innerHTML += `

        <li>

        <span
        onclick="toggle('${todo._id}',${todo.completed})"
        style="cursor:pointer">

        ${todo.completed ? "✅":"⬜"} ${todo.title}

        </span>

        <button
        onclick="deleteTodo('${todo._id}')">

        Delete

        </button>

        </li>

        `;

    });

}

async function addTodo(){

    const task = document.getElementById("task").value;

    if(task==="") return;

    await fetch(API,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            title:task

        })

    });

    document.getElementById("task").value="";

    loadTodos();

}

async function toggle(id,status){

    await fetch(API+"/"+id,{

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            completed:!status

        })

    });

    loadTodos();

}

async function deleteTodo(id){

    await fetch(API+"/"+id,{

        method:"DELETE"

    });

    loadTodos();

}

loadTodos();