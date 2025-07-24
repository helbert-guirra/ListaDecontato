import { useSelector } from 'react-redux'

import Tarefa from '../../components/tarefa/tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>
        {tarefas.length} tarefas marcadas como: &quot;categoria&ldquo; e
        &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <Tarefa
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              tipo={t.tipo}
              descricao={t.descricao}
              email={t.email ?? ''}
              telefone={t.telefone ?? ''}
              nome={t.nome}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
