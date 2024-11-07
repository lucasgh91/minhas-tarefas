import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Tarefa'
import { Campo } from '../../styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const termo = useSelector((state: RootReducer) => state.filtro.termo)

  return (
    <S.Aside>
      <div>
        <Campo
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
          type="text"
          placeholder="Buscar"
          id="termo"
        />
        <S.Filtros>
          <FiltroCard
            criterio="status"
            legenda={'pendentes'}
            valor={enums.Status.PENDENTE}
          />
          <FiltroCard
            criterio="status"
            legenda={'concluídas'}
            valor={enums.Status.CONCLUIDA}
          />
          <FiltroCard
            criterio="prioridade"
            legenda={'urgentes'}
            valor={enums.Prioridade.URGENTE}
          />
          <FiltroCard
            criterio="prioridade"
            legenda={'importantes'}
            valor={enums.Prioridade.IMPORTANTE}
          />
          <FiltroCard
            criterio="prioridade"
            legenda={'normal'}
            valor={enums.Prioridade.NORMAL}
          />
          <FiltroCard criterio="todas" legenda={'todas'} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default BarraLateral
