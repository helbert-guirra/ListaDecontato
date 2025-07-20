import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Todos" contador={10} ativo />
        <FiltroCard legenda="Família" contador={3} />
        <FiltroCard legenda="Trabalho" contador={5} />
        <FiltroCard legenda="Clientes" contador={2} />
        <FiltroCard legenda="Favoritos" contador={4} />
        <FiltroCard legenda="Bloqueados" contador={0} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
