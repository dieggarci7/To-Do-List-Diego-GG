import { useState } from "react";

function ListaDeTareas () {

const [tareas, setTareas] = useState ([])
const [nuevaTarea, setNuevaTarea] = useState ('')


const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;
    const tarea = { texto: nuevaTarea, completada: false };
  setTareas([...tareas, tarea]);
  setNuevaTarea('');
};

const alternarCompletada = (indice) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas[indice].completada = !tareasActualizadas[indice].completada;
    setTareas(tareasActualizadas);
  };

const eliminarTarea = (index) =>{
    const tareasRestantes = tareas.filter ((_,i)=> i !== index);
    setTareas(tareasRestantes);
};

return (
    <div className="hoja">
        <h1>Lista de Tareas</h1>
        <input value={nuevaTarea} placeholder="Añade una tarea..." onChange={(e)=> setNuevaTarea(e.target.value)} onKeyDown={(e) => {if (e.key === 'Enter') {agregarTarea(); }}}/>
        <ul>
        {tareas.map((tarea, indice) => (
        <li key={indice}>
          <span
            onClick={() => alternarCompletada(indice)}
            style={{
              textDecoration: tarea.completada ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {tarea.texto}
          </span>
          <button className="cruz" onClick={() => eliminarTarea(indice)}>❌</button>
        </li>
        ))}
        </ul>
    </div>
);
};

export default ListaDeTareas
