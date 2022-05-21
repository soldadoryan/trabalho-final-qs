import * as S from '../styles';

export default function Home() {
  return (
    <>
      <S.Container>
        <h1>Qualidade de Software</h1>

        <h2>Introdução</h2>
        <p>
          O objetivo da disciplina é conhecer as principais técnicas utilizadas
          para garantir a qualidade de um software.
        </p>

        <h2>Fatores que afetam a qualidade do software</h2>
        <ul>
          <li>Tecnologia de desenvolvimento</li>
          <li>Qualidade das pessoas</li>
          <li>Gerência</li>
          <li>Qualidade do processo</li>
        </ul>
        <h2>TDD (Test Driven Development)</h2>
        <p>
          TDD (Test Driven Development), sigla para Desenvolvimento Orientado a Testes em inglês. Metodologia para desenvolvimento e escrita de código.
        </p>
        <h3>Testes unitários</h3>
        <p>
          Testes unitários são voltados a testar uma única parte do sistema de forma isolada.
        </p>
        <h3>Teste de integração</h3>
        <p>
          Testes de integração visam testar a a integração entre 2 ou mais componentes de um sistema.
        </p>
        <h3>Testes não funcionais</h3>
        <p>
          Visam testar os requisitos não funcionais de um software.
        </p>
        <h2>Versionamento de código</h2>
        <p>
          O git é um software criado para controlar versões de outros software através de repositórios locais e externos.
        </p>
      </S.Container>
    </>
  )
}
