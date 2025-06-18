import React from 'react';

const statusClasses = {
  'Pending': 'border-yellow-400',
  'In Progress': 'border-blue-400',
  'Completed': 'border-green-400'
};

const priorityColors = {
  'low': 'text-green-600',
  'medium': 'text-yellow-600',
  'high': 'text-red-600'
};

function TaskItem({ task, onDelete, onStatusChange }) {
  return (
    <div className={`border-l-4 p-4 rounded shadow-sm hover:shadow-md transition cursor-pointer ${statusClasses[task.status]}`}>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{task.title}</h2>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-1">{task.description}</p>
      <div className="text-sm flex justify-between text-gray-700">
        <span className={priorityColors[task.priority]}>
          Priority: {task.priority}
        </span>
        <span>Due: {task.dueDate}</span>
      </div>
      <div className="mt-2">
        <label className="text-xs mr-2">Status:</label>
        <select
          value={task.status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="border px-2 py-1 text-sm rounded"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
    </div>
  );
}

export default TaskItem;