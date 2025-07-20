import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 32px;
`

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #2f3640;
  margin: 0;
`

export const Tag = styled.span`
  display: inline-block;
  background-color: #e1a32a;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  color: #fff;
  font-size: 10px;
  border-radius: 8px;
`

export const Descricao = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 8px;
  padding: 8px;
  color: #8b8b8b;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  margin-top: 16px;
  display: flex;
  gap: 12px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 13px;
  color: #fff;
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

export const BotaoPerigo = styled(Botao)`
  background-color: #e84118;

  &:hover {
    background-color: #c23616;
  }
`

export const BotaoSecundario = styled(Botao)`
  background-color: #dcdde1;
  color: #2f3640;

  &:hover {
    background-color: #bdc3c7;
  }
`
