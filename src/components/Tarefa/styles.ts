import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'
import * as enums from '../../utils/enums/Tarefa'

type TagProps = {
  $prioridade?: enums.Prioridade
  $status?: enums.Status
  $parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.$parametro === 'status') {
    if (props.$status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.$status === enums.Status.CONCLUIDA) return variaveis.verde
  } else {
    if (props.$prioridade === enums.Prioridade.URGENTE)
      return variaveis.vermelho
    if (props.$prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
    if (props.$prioridade === enums.Prioridade.NORMAL) return variaveis.amarelo
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin: 32px 0 32px 0;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    input[type='checkbox'] {
      position: relative;
      appearance: none;
      width: 30px;
      height: 30px;
      background-color: ${variaveis.amarelo};
      overflow: hidden;
      transition: all 1s;
      border: 3px solid ${variaveis.amarelo2};
      opacity: 0.5;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }

      &:checked {
        background-color: ${variaveis.verde};
        border: 3px solid #359326;
      }

      &::after {
        text-align: center;
        font-size: 22px;
        position: absolute;
        color: #fff;
        content: 'C';
        font-weight: bold;
        left: -150%;
        top: 0%;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
      }

      &::before {
        text-align: center;
        font-size: 22px;
        position: absolute;
        color: #fff;
        content: 'P';
        font-weight: bold;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
      }

      &:checked::before {
        left: -150%;
      }

      &:checked::after {
        left: 0;
      }
    }
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  height: 100px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
