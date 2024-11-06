import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
  const termo = useSelector((state: RootReducer) => state.filtro.termo)

  const filtraTarefas = () => {
    return tarefas.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>
        2 tarefas marcadas como : &quot;categoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.id}>
            <Tarefa
              titulo={t.titulo}
              $prioridade={t.$prioridade}
              $status={t.$status}
              descricao={t.descricao}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default ListaDeTarefas
