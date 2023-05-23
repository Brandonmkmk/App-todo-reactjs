import { AddTask } from "./components/AgregarTarea";
import { TaskList } from "./components/ListaTareas";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    /*TaskProvider contiene el contexto y va a compartir la informacion en los componentes AddTask y TaskList, es decir estos mismos pueden acceder a la variable de estado tasks y setTasks que se encuentran dentro del contexto*/
    <TaskContextProvider>
      <div className="App">
        <AddTask />
        <TaskList />
      </div>
    </TaskContextProvider>
  );
}

export default App;
