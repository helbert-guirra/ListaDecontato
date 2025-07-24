import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  valor: 'Família' | 'Amigos' | 'Trabalho' | 'Todos'
  criterio: 'categoria' | 'todos'
  quantidadeContatos: number
}

const FiltroContato = ({
  quantidadeContatos,
  legenda,
  criterio,
  valor
}: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filtro)

  const isActive = useMemo(() => {
    return filtro.criterio === criterio && filtro.valor === valor
  }, [filtro, criterio, valor])

  const filtrar = () => {
    dispatch(alterarFiltro({ criterio, valor }))
  }

  return (
    <S.Card
      $ativo={isActive}
      onClick={filtrar}
      role="button"
      aria-pressed={isActive}
    >
      <S.Contador>{quantidadeContatos} Conexão</S.Contador>
      <S.Label>
        <b>Categoria:</b> {legenda}
      </S.Label>
    </S.Card>
  )
}

export default FiltroContato
