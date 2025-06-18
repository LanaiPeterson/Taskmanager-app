import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

function TaskList({ tasks, onDelete, onStatusChange }) {
  if (tasks.length === 0) return <p className="text-gray-500">No tasks found.</p>;

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onStatusChange={(status) => onStatusChange(task.id, status)}
        />
      ))}
    </div>
  );
}

export default TaskList;