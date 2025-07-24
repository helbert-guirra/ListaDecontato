import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f9f9f9; /* Cor de fundo suave */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
`

export const Titulo = styled.h1`
  font-size: 2rem;
  color: #333; /* Cor do texto */
  margin-bottom: 1.5rem; /* Espaçamento inferior */
`

export const Form = styled.form`
  max-width: 35rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaçamento entre os campos */
`

export const CampoCadastro = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc; /* Borda padrão */
  border-radius: 4px; /* Bordas arredondadas */
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #68a4f8;
    outline: none;
  }
`

export const ContainerRadio = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 0;
  gap: 0.5rem;

  p {
    font-weight: bold;
    margin-right: 1rem;
  }

  input[type='radio'] {
    margin-right: 0.5rem;
  }
`

export const BotaoCadastrar = styled.button`
  padding: 0.75rem;
  background-color: #b7d8b7ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4cae4f;
  }
`
