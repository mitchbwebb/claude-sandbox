// A simple sandbox app to practice with Claude Code

const tasks = [];

function addTask(name) {
  tasks.push({ id: tasks.length + 1, name, completed: false });
  console.log(`Added task: ${name}`);
}

function completeTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = true;
    console.log(`Completed: ${task.name}`);
  }
}

function listTasks() {
  console.log("\n--- Your Tasks ---");
  tasks.forEach(t => {
    const status = t.completed ? "[x]" : "[ ]";
    console.log(`${status} ${t.id}. ${t.name}`);
  });
  console.log("");
}

// Demo
addTask("Learn Claude Code basics");
addTask("Try editing files");
addTask("Practice debugging");
listTasks();

completeTask(1);
listTasks();
