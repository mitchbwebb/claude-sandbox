// Task Assistant App: Your friendly assistant for learning and practicing with CLAUDE code!// This app helps you manage tasks, provides tips, and serves as a sandbox to enhance your learning experience 🎓

const tasks = [];

// Task Assistant's intro message
console.log(`
👋 Hi there! I'm your Task Assistant. Let's stay productive while learning!
Here are a few things you can do:
- Add tasks to get recommendations for better practices 🧑‍🏫
- Mark tasks complete and get a celebratory message! 🎉
- View task tips to learn debugging or testing best practices.
`);

function addTask(name) {
  const newTask = { id: tasks.length + 1, name, completed: false };
  tasks.push(newTask);
  console.log(`
✅ Added a new task: "${name}"
💡 *Tip:* Break down tasks into smaller chunks for easier testing!
`);
}

function completeTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
    console.log(`
🎉 Yay! You completed: "${task.name}"
💡 *Tip:* Reflect on what challenges you faced completing this task. Record what worked!
    `);
  } else {
    console.log(`
⚠️ Oops! Couldn't find a task with ID: ${id}
💡 *Tip:* Check the task list using listTasks() to confirm the ID.
    `);
  }
}

function listTasks() {
  console.log("\n--- 📝 Your Task List ---");
  if (tasks.length === 0) {
    console.log("No tasks yet. Why not add something? Use addTask(taskName)!");
  } else {
    tasks.forEach((t) => {
      const status = t.completed ? "[✔️]" : "[❌]";
      console.log(`${status} ${t.id}. ${t.name}`);
    });
  }
  console.log(`
💡 *Tip:* Stay focused on 2-3 tasks at a time. Too much multitasking can reduce productivity!
  `);
}

// 🛠 Utility: Reset the task list
function resetTasks() {
  tasks.length = 0;
  console.log(`
♻️ The task list has been reset. Start fresh with addTask(taskName)!
  `);
}

// Skill demonstrations preloaded as an example
addTask("Understand CLAUDE basics 🤖");
addTask("Experiment with editing files 🛠");
addTask("Learn debugging/testing tips 🐞");

listTasks();

completeTask(2);

listTasks();