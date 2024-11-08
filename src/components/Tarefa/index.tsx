import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = TarefaClass

const Tarefa = ({ titulo, id, $prioridade, $status, descricao }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoText, setDescricaoText] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (descricao.length >= 0) setDescricaoText(descricao)
  }, [descricao])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricaoText(descricao)
  }

  function alteraStatusTarefa(e: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id: id, finalizado: e.target.checked }))
  }

  useEffect(() => {
    if (estaEditando && textAreaRef.current) {
      textAreaRef.current.focus()
    }
  }, [estaEditando])

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={$status === enums.Status.CONCLUIDA}
          disabled={$status === enums.Status.CONCLUIDA}
          id={titulo}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando === true && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag $parametro="prioridade" $prioridade={$prioridade}>
        {$prioridade}
      </S.Tag>
      <S.Tag $parametro="status" $status={$status}>
        {$status}
      </S.Tag>
      <S.Descricao
        ref={textAreaRef}
        disabled={!estaEditando}
        value={descricaoText || ''}
        onChange={(e) => setDescricaoText(e.target.value)}
        name="descricao"
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
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
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => cancelarEdicao()}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao
              disabled={$status === enums.Status.CONCLUIDA}
              onClick={() => setEstaEditando(true)}
            >
              Editar
            </Botao>
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
