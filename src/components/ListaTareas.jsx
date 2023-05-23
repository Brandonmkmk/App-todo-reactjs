import { tareas } from "../utils/tareas";
import { useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/viewTareas.css";

export const TaskList = () => {
  /*dentro de las llaves extraemos lo que nos interesa de DataContext que es un contexto que se creo, en este caso extraemos la variable de estado tasks y su funcion que la actualiza. con esto podemos hacer uso de la variable de estado tasks sin necesidad de declararla en este componente*/
  const { tasks, setTasks } = useContext(TaskContext);

  useEffect(() => {
    setTasks(tareas);
  }, []);

  const deleteTask = (id) => {
    /*funcion para eliminar una tarea por su id. Por cada tarea que se este recorriendo se quiere confirmar si el id de esa tarea es igual al id que se le esta pasando. ejemplo, en la primera iteracion la primera tarea tiene el id 0, entonces si 0 = 0 se elimina esa tarea y se crea un nuevo array con las tareas que sean diferente al id 0.*/
    setTasks(tasks.filter((tarea) => tarea.id !== id));
  };
  if (tasks.length === 0) {
    return (
      <h1 style={{ textAlign: "center", color: "red" }}>¡No hay tareas!</h1>
    );
  }
  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div
      className="container-tasks
    "
    >
      {tasks.map((tarea) => (
        /*El atributo key={tarea.id} se utiliza para proporcionar una identificación única a cada elemento de la lista. Esta clave es necesaria para ayudar a React a identificar qué elementos han cambiado, se han agregado o se han eliminado cuando se actualiza la lista.*/
        <div className="list-tasks" key={tarea.id}>
          <h1>{tarea.descripcion}</h1>
          <p>{tarea.fecha}</p>
          {/*se ejecuta la funcion y se pasa como parametro el id de la tarea que se este iterando, es decir en la primera iteracion ese parametro sera igual a 0 ya que ese es el id de la primera tarea, en la segunda iteracion ese parametro sera igual a 1 ya que es el id de la segunda tarea y asi sucesivamente.*/}
          <button
            className="btn-deleteTask"
            onClick={() => deleteTask(tarea.id)}
          >
            Delete this task
          </button>
        </div>
      ))}
      <button className="btn-deleteAllTasks" onClick={deleteAllTasks}>
        Delete all tasks
      </button>
    </div>
  );
};
