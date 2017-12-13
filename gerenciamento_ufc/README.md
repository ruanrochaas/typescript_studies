# Sistema de Gerenciamento de disciplinas e notas da UFC
Vamos criar o sistema de gerenciamento curricular da UFC. Nele existirão 3 tipos de usuários (Administrador, Professor e Aluno) e esses usuários acessarão o sistema através de Login. Os usuários administradores poderão cadastrar usuários Professores e Alunos, cadastrar ementas de disciplinas, liberar disciplinas para a matricula dos alunos e cadastrar professores nas disciplinas. Os usuários Professores poderão cadastrar os critérios de avaliação de suas disciplinas e cadastrar as notas de seus alunos. Já os usuários Alunos podem se matricular em disciplinas quando as mesmas estiverem acessíveis e acompanhar seu progresso em cada uma delas.

## Funcionalidades
#### Iniciar o sistema fazendo login e adição de usuários
- Sistema já começa com um Administrador cadastrado;
- O Administrador pode:
  - Fazer login e logout;
  - Adicionar novos usuários;
  - Mostrar quais os usuários cadastrados no sistema;
```
login admin admin
  Bem-vindo, admin.
logout
  Até logo.
addUser ruan ruan aluno
  Usuário Cadastrado com sucesso.
showUsers
  [ admin ruan ]
```
#### Adição de ementas de disciplinas e matrícula de alunos
- O administrador pode:
  - Adicionar ementas de disciplinas;
  - Ver quais as Ementas cadastradas;
  - Liberar disciplinas para a matrículas dos alunos;
  - Ver quais as disciplinas disponíveis para matrícula;
```
adicionarEmenta Design Desenho1 1
  Ementa cadastrada com sucesso. 
adicionarEmenta Design Multimídia 1
  Ementa cadastrada com sucesso.
howEmentas
  [ Design – Desenho1 – 1; Design - Multimídia - 1 ]
oferecerDisciplina Desenho1
  A disciplina agora está acessível aos alunos.
showDisciplinasOfertadas
  [ Desenho1 ]
```
