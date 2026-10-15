/* import "./App.css";

function App() {
     return (
         <h1>Olá mundo</h1>
    )
 }

 export default App 
 
 aula 1
 
 */

import { useState } from "react"

function App() {
  const [tarefas, setTarefas] = useState([
/*o usestate serve para criar um estado, que é uma 
 variável que pode ser alterada e que quando alterada,
  faz com que o componente seja re-renderizado. */
    { id: 1, texto: "estudar react", feito: true },
    { id: 2, texto: "estudar typescript", feito: true },
    { id: 3, texto: "estudar javascript", feito: false }
  ])

  function addTarefa() {
    const novaTarefa = {
      id: 4,
      texto: "Estudar para as provas",
      feito: false
    }

    setTarefas([...tarefas, novaTarefa])
  }

  return (
    <div className="app">
      <h1>Minhas Tarefas</h1>
      <p>comece adicionando sua primeira tarefa</p>

      <ul>
        {tarefas.map((item) => {
          return (
            <li key={item.id}>{item.texto}</li>
          )
        })}
      </ul>

      <button onClick={addTarefa}>Adicionar tarefa</button>
    </div>
  )
}

export default App