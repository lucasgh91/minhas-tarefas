import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)
  return (
    <Container>
      <ul>
        {tarefas.map((t) => (
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
