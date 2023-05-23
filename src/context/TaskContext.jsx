import { createContext, useState } from "react";

/*funciona como intermedario, para que los demas componentes puedan encontrar lo que se define y que tengan acceso a los datos */
export const TaskContext = createContext();

/*en este contexto los demas componentes a nivel global van a poder utilizar lo que se defina, en este caso la variable de estado tasks y setTasks, otros componentes podran acceder a ellos y hacer cualquier logica.*/
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
