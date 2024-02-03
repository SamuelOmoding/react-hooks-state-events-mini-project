import React, {useState} from "react";

function Task({ text, category, deleteTask }) {
return (
<div className="task">
<h3>{text}</h3>
<p>{category}</p>
{/* <div className="label">CATEGORY HERE</div>
<div className="text">TEXT HERE</div> */}
<button onClick={deleteTask}>Delete"</button>
</div>
);
}

export default Task;