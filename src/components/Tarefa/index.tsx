import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
//import * as enums from '../../utils/enums/Tarefa'
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ titulo, id, $prioridade, $status, descricao }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoText, setDescricaoText] = useState('')

  useEffect(() => {
    if (descricao.length >= 0) setDescricaoText(descricao)
  }, [descricao])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricaoText(descricao)
  }

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
        disabled={!estaEditando}
        value={descricaoText || ''}
        onChange={(e) => setDescricaoText(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                console.log(descricao)
                dispatch(
                  editar({
                    id: id,
                    titulo: titulo,
                    $prioridade: $prioridade,
                    $status: $status,
                    descricao: descricaoText
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => cancelarEdicao()}>
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
