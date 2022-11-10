import './App.css';
import Inputbox from './components/Inputbox';
import Task from './components/Task';
import { useStateContext } from './context/ContextProvider';

function App() {
  const { visible, setVisible } = useStateContext();
  return (
    <div className="App flex flex-col justify-center items-center w-full">
      <div className='w-full sticky bg-gray-900 h-12'>
        <h1 className='text-white text-2xl text-center pt-2'>To Do List</h1>
      </div>
      <Task />
      <Inputbox />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6' onClick={() => setVisible(true)}>Add Task</button>
    </div>
  );
}

export default App;
