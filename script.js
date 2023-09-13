const newTask = document.getElementById("tasks-add");
console.log(newTask);
newTask.addEventListener("submit", function (e) {
  e.preventDefault();
  //   abbiamo rintracciato l'obbiettivo del submit
  const TaskToAdd = document.getElementById("task");
  const timeForTask = document.getElementById("time");
  // chiudiamo i valori sotto la forma di oggetto

  const toTaskList = {
    newTask: TaskToAdd.value,
    timeForIt: timeForTask.value,
  };
  console.log("contatto salvato", toTaskList.newTask, toTaskList.timeForIt);

  //   adesso che abbiamo i contatti salvati bisogna creare un nuovo elemento per visualizzarli

  const taskCard = document.createElement("li");
  taskCard.classList.add("card-task");

  //   abbiamo creato un nuovo elemento li
  // e contiene i dati sosttostanti
  taskCard.innerHTML = `
  <p>Task:${toTaskList.newTask}</p>  
  <p>Time:${toTaskList.timeForIt}h</p> 
  <button> Delete Tasks</button>
  `;

  const toDolist = document.getElementById("tasks-list");
  toDolist.appendChild(taskCard);
});
