import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/contato'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  tipo?: enums.Categoria
  parametro: 'status' | 'prioridade' | 'tipo'
}

function retornaCorDeFundo({ parametro, prioridade, status, tipo }: TagProps) {
  if (parametro === 'prioridade') {
    if (prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (prioridade === enums.Prioridade.IMPORTANTE) return variaveis.amarelo2
    if (prioridade === enums.Prioridade.NORMAL) return variaveis.verde2
  }

  if (parametro === 'status') {
    if (status === enums.Status.PENDENTE) return variaveis.amarelo
    if (status === enums.Status.CONCLUIDA) return variaveis.verde
  }

  if (parametro === 'tipo') {
    if (tipo === enums.Categoria.FAMILIA) return variaveis.violeta
    if (tipo === enums.Categoria.CLIENTE) return variaveis.azul2
    if (tipo === enums.Categoria.FAVORITO) return variaveis.laranja
    if (tipo === enums.Categoria.BLOQUEADO) return variaveis.secundario2
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 32px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #2f3640;
  margin: 0;
`

export const Tag = styled.span<TagProps>`
  display: inline-block;
  background-color: ${(props) => retornaCorDeFundo(props)};
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  color: #fff;
  font-size: 10px;
  border-radius: 8px;
`

export const TagsContainer = styled.div`
  margin: 8px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const Descricao = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 8px;
  padding: 8px;
  color: #636e72;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const BarraAcoes = styled.div`
  background-color: #f0f4f8;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 16px;
  margin-top: 16px;
  display: flex;
  gap: 12px;
  border-radius: 12px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 13px;
  color: #f5f6fa;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #353b48;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const BotaoSecundario = styled(Botao)`
  background-color: ${variaveis.secundario};
  color: ${variaveis.secundario2};

  &:hover {
    background-color: #bdc3c7;
  }
`
