import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from './../../styles'
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

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "todas" ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${criterio}=${valor}" ${complementacao}`
    }
    return mensagem
  }

  const tarefasFiltradas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefasFiltradas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefasFiltradas.map((t) => (
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
    </MainContainer>
  )
}
export default ListaDeTarefas
