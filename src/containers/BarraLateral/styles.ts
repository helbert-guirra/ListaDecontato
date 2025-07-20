import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: #e6f0ea;
  height: 100vh; /* 100% da altura da viewport (área visível da janela do navegador) */
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  backgrond-color: #fff;
  border-radius: 8px;
  front-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`
