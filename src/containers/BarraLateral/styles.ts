import styled from 'styled-components'
import imagemLupa from '../../icons/lupa.png'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  background-color: #f0f4f8;
  height: 100vh;
  padding: 1.5rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`

export const Campo = styled.input`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 40px;
  background-color: #fff;
  color: #666666;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-weight: bold;
  background-image: url(${imagemLupa});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 10px center;
  margin-bottom: 2rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${variaveis.azul};
    outline: none;
  }
`

export const BotaoVoltar = styled.button`
  width: 100%;
  font-weight: bold;
  font-size: 0.875rem; /* Aumentar o tamanho da fonte */
  color: #fff;
  padding: 0.75rem; /* Aumentar o padding */
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza}; /* Usar a variável de cor */
  border-radius: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${variaveis.vermelho}; /* Cor ao passar o mouse */
  }
`
