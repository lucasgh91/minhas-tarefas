import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = tarefas

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.$prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.$status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return tarefas
    }
  }

  return (
    <Container>
      <p>
        {filtraTarefas().length} tarefas marcadas como : &quot;{valor}&quot; e
        &quot;{termo}&quot;
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
