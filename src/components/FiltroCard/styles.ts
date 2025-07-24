import styled from 'styled-components'

type Props = {
  $ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 1rem; /* Aumentar o padding para conforto */
  border: ${(props) =>
    props.$ativo ? '2px solid #5EABD6' : '2px solid #a1a1a1'};
  background-color: #f9f9f9;
  color: #333;
  margin: 1rem 0;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    background-color: #e0f7fa;
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
  display: block;
`

export const Label = styled.span`
  font-size: 0.875rem;
  color: #666;
`
