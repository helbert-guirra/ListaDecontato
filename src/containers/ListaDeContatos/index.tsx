import React from 'react'
import Tarefa from '../../components/tarefa/tarefa'
import { Lista, Container } from './styles'

const contatos = [
  {
    nome: 'João da Silva',
    tags: ['Importante', 'Pendente'],
    descricao: 'Cliente antigo da área elétrica. Retorno pendente.',
    email: 'joao.silva@email.com',
    telefone: '(71) 99999-0001'
  },
  {
    nome: 'Maria Oliveira',
    tags: ['Família'],
    descricao: 'Prima que pediu ajuda para instalar ventilador de teto.',
    email: 'maria.oliveira@email.com',
    telefone: '(71) 98888-1234'
  },
  {
    nome: 'ivonete guirra',
    tags: ['Família'],
    descricao: 'minha mãe esta pedindo para comprar jogo de panelas',
    email: 'ivonete@email.com',
    telefone: '(71) 98888-1234'
  },
  {
    nome: 'Mariana Oliveira',
    tags: ['Família'],
    descricao: 'pediu para ajudar no tcc da faculdade',
    email: 'maria.oliveira@email.com',
    telefone: '(71) 98888-1234'
  }
]

const ListaDeContatos = () => {
  return (
    <Container>
      <p>{contatos.length} contatos cadastrados:</p>
      <Lista>
        {contatos.map((contato, index) => (
          <li key={index}>
            <Tarefa
              nome={contato.nome}
              tags={contato.tags}
              descricao={contato.descricao}
              email={contato.email}
              telefone={contato.telefone}
            />
          </li>
        ))}
      </Lista>
    </Container>
  )
}

export default ListaDeContatos
