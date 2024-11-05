import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
//import * as enums from '../../utils/enums/Tarefa'
import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ titulo, id, $prioridade, $status, descricao }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoText, setDescricaoText] = useState(descricao)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag $parametro="prioridade" $prioridade={$prioridade}>
        {$prioridade}
      </S.Tag>
      <S.Tag $parametro="status" $status={$status}>
        {$status}
      </S.Tag>
      <S.Descricao
        value={descricaoText || ''}
        onChange={(e) => setDescricaoText(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
