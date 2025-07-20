import React, { useState } from 'react'
import * as S from './styles'

export type TarefaProps = {
  nome: string
  tags: string[]
  descricao: string
  email: string
  telefone: string
}

const Tarefa = ({ nome, tags, descricao, email, telefone }: TarefaProps) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

  return (
    <S.Card>
      <S.Cabecalho>
        <div>
          {tags.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </div>
        <S.Titulo>{nome}</S.Titulo>
      </S.Cabecalho>

      <S.Descricao as="p">{descricao}</S.Descricao>

      {mostrarDetalhes && (
        <>
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
            <S.Botao>Salvar</S.Botao>
            <S.BotaoSecundario
              onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
            >
              {mostrarDetalhes ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
            </S.BotaoSecundario>
            <S.BotaoPerigo onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoPerigo>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoSecundario
              onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
            >
              {mostrarDetalhes ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
            </S.BotaoSecundario>
            <S.BotaoPerigo>Excluir</S.BotaoPerigo>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
