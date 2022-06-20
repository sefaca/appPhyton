import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetinff from './components/pure/greetinfF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting.jsx */}
        {/* <Greeting name="Sergio"></Greeting> */}
        {/* <Greetinff name="Sergio"></Greetinff> */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
