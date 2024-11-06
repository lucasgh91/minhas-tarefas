import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const termo = useSelector((state: RootReducer) => state.filtro.termo)

  return (
    <S.Aside>
      <div>
        <S.Campo
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
          type="text"
          placeholder="Buscar"
        />
        <S.Filtros>
          <FiltroCard $ativo contador={0} legenda={'pendentes'} />
          <FiltroCard contador={0} legenda={'concluídas'} />
          <FiltroCard contador={0} legenda={'urgentes'} />
          <FiltroCard contador={0} legenda={'importantes'} />
          <FiltroCard contador={0} legenda={'normal'} />
          <FiltroCard contador={0} legenda={'todas'} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default BarraLateral
