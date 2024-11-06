import styled from 'styled-components'

// type PropsSemLegendaEContador = Omit<
//   Props,
//   'contador' | 'legenda' | 'criterio' | 'valor'
// >

type Props = {
  $ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${({ $ativo }) => ($ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${({ $ativo }) => ($ativo ? '#fff' : '#fcfcfc')};
  color: ${({ $ativo }) => ($ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
