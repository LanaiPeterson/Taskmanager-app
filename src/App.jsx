import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import Types from './components/Types/index'
import { STATUS, PRIORITY } from './types';
import TaskForm from './TaskForm';

function App() {
  const handleTaskSubmit = (task) => {
    console.log('Task submitted:', task);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleTaskSubmit} />
    </div>
  );
}

const initialTasks = [
  { id: 1, title: 'Task 1', description: 'Description 1', status: STATUS.PENDING, priority: PRIORITY.LOW, dueDate: '2025-12-31' },
  { id: 2, title: 'Task 2', description: 'Description 2', status: STATUS.IN_PROGRESS, priority: PRIORITY.MEDIUM, dueDate: '2025-01-01' },
  { id: 3, title: 'Task 3', description: 'Description 3', status: STATUS.COMPLETED, priority: PRIORITY.HIGH, dueDate: '2025-01-02' },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  const filteredTasks = tasks.filter(task =>
    (statusFilter === 'All' || task.status === statusFilter) &&
    (priorityFilter === 'All' || task.priority === priorityFilter)
  );

  return (
    <div className="p-4 max-w-xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskFilter
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        onStatusChange={setStatusFilter}
        onPriorityChange={setPriorityFilter}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}

export default App;