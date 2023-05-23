import { useState, useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/formTareas.css";

export const AddTask = () => {
  /*dentro de las llaves extraemos lo que nos interesa de DataContext que es un contexto que se creo, en este caso extraemos la variable de estado tasks y su funcion que la actualiza. con esto podemos hacer uso de la variable de estado tasks sin necesidad de declararla en este componente*/
  const { tasks, setTasks } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let inputTitle = useRef();
  let inputBody = useRef();

  const addTask = (e) => {
    if (title && body) {
      let newTask = {
        id: tasks.length /*esto lo que hace es asignarle un id a la nueva tarea que se creo, este id es asignado depende a la longitud del arreglo tareas. Este arreglo tiene 3 tareas, por lo que existe el id 0,1 y 2. cuando se cree una cuarta tarea se le agregara el id 3 y asi sucesivamente.*/,
        descripcion: title,
        fecha: body,
      };
      /*se puede hacer uso de la variable de estado tasks gracias al contexto*/
      setTasks([...tasks, newTask]);
      inputTitle.current.value = "";
      inputBody.current.value = "";
    } else {
    }
  };

  return (
    <>
      <div className="container-form">
        <div className="add-task">
          <h2>¡Add your tasks!</h2>
          <input
            ref={inputTitle}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="task title"
          />
          <input
            ref={inputBody}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="task body"
          />
          <button onClick={addTask}>add</button>
        </div>
      </div>
    </>
  );
};
