import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/contato'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  tipo: enums.Categoria
  descricao: string
  email: string
  telefone: string
  nome: string
}

const Tarefa = ({
  titulo,
  prioridade,
  status,
  tipo,
  descricao,
  email,
  telefone,
  nome
}: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>

      <S.TagsContainer>
        <S.Tag parametro="prioridade" prioridade={prioridade}>
          {prioridade}
        </S.Tag>
        <S.Tag parametro="status" status={status}>
          {status}
        </S.Tag>
        <S.Tag parametro="tipo" tipo={tipo}>
          {tipo}
        </S.Tag>
      </S.TagsContainer>

      <S.Descricao value={descricao} readOnly />

      {mostrarDetalhes && (
        <>
          <S.Descricao as="p">
            <strong>Nome:</strong> {nome}
          </S.Descricao>
          <S.Descricao as="p">
            <strong>E-mail:</strong> {email}
          </S.Descricao>
          <S.Descricao as="p">
            <strong>Telefone:</strong> {telefone}
          </S.Descricao>
        </>
      )}

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>

            <S.BotaoSecundario
              onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
            >
              {mostrarDetalhes ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
            </S.BotaoSecundario>

            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>

            <S.BotaoSecundario
              onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
            >
              {mostrarDetalhes ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
            </S.BotaoSecundario>

            <S.BotaoCancelarRemover>Excluir</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
