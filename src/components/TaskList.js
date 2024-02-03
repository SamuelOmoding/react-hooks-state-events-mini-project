import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectCategory }) {
const filteredTasks = tasks.filter(
(task) => selectCategory === "All" || task.category === selectCategory
);

return (
<div className="tasks">
{filteredTasks.map((task) => (
<Task key={task.id} task={task} />
))}
{/* display a list of tasks using Task component */}
</div>
);
}

export default TaskList;