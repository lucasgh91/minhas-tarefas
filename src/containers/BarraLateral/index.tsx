import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCard $ativo={true} contador={0} legenda={'pendentes'} />
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
