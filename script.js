function createProject()
{
    let name = document.getElementById("projectName").value;

    if(name === "")
    {
        alert("Enter Project Name");
        return;
    }

    let project = document.createElement("div");

    project.className = "project";

    project.innerHTML =
    `
    <h3>${name}</h3>

    <button onclick="addTask(this)">
    Add Task
    </button>

    <ul></ul>
    `;

    document.getElementById("projectList")
    .appendChild(project);

    document.getElementById("projectName")
    .value = "";
}

function addTask(button)
{
    let task = prompt("Enter Task");

    if(task)
    {
        let li = document.createElement("li");

        li.innerText = task;

        button.nextElementSibling.appendChild(li);
    }
}