# Sistema de Gerenciamento de disciplinas e notas da UFC
Vamos criar o sistema de gerenciamento curricular da UFC. Nele existirão 3 tipos de usuários (Administrador, Professor e Aluno) e esses usuários acessarão o sistema através de Login. Os usuários administradores poderão cadastrar usuários Professores e Alunos, cadastrar ementas de disciplinas, liberar disciplinas para a matricula dos alunos e cadastrar professores nas disciplinas. Os usuários Professores poderão cadastrar os critérios de avaliação de suas disciplinas e cadastrar as notas de seus alunos. Já os usuários Alunos podem se matricular em disciplinas quando as mesmas estiverem acessíveis e acompanhar seu progresso em cada uma delas.

## Funcionalidades
#### Iniciar o sistema fazendo login e adição de usuários
- Sistema já começa com um Administrador cadastrado;
- Administradores podem:
  - Adicionar novos usuários;
  - Mostrar quais os usuários cadastrados no sistema;
- Administradores, professores e alunos podem:
  - Fazer login e logout;
```
login admin admin
  Bem-vindo, admin.
logout
  Até logo.
addUser ruan ruan aluno
  Usuário Cadastrado com sucesso.
addUser david david professor
  Usuário Cadastrado com sucesso.
showUsers
  [ admin ruan david ]
```
#### Adição de semestre letivos, de ementas de disciplinas e liberação de disciplinas
- Administradores podem:
  - Adicionar semestres letivos aos alunos;
  - Adicionar ementas de disciplinas;
  - Ver quais as Ementas cadastradas;
  - Liberar disciplinas para a matrículas dos alunos;
  - Ver quais as disciplinas disponíveis para matrícula;
```
addSemestre ruan 1
  Semestre cadastrado com sucesso.
addEmentaDisciplina Desenho1 1
  Ementa cadastrada com sucesso. 
addEmentaDisciplina poo 1
  Ementa cadastrada com sucesso.
showEmentas
  [ Curso: Design Digital - Nome: Desenho1 - Semestre: 1; Curso: Design Digital - Nome: poo - Semestre: 1; ]
oferecerDisciplina poo
  A disciplina agora está acessível aos alunos.
showDisciplinasOfertadas
  [ Curso: Design Digital - Nome: poo - Semestre: 1 - Professor: ; ]
```
#### Alocar professores e matricular alunos em disciplinas
- O administrador pode:
  - Alocar professores em disciplinas;
- Administradores e alunos podem:
  - Matricular em disciplinas;
```
alocarProfessor david poo
  Professor Alocado. 
matricular ruan poo
  Aluno matriculado com sucesso.
```
#### Alocar professores e matricular alunos em disciplinas
- Administradores e professores podem:
  - Adicionar notas às disciplinas;
- Administradores e alunos podem:
  - Ver médias dos alunos nas disciplinas;
```
lancarNota ruan poo ap1 10
  Nota lançada com sucesso. 
lancarNota ruan poo ap2 9.5
  Nota lançada com sucesso.
verMedia ruan poo
  Aluno: ruan - Disciplina: poo - Média: 9.75.
```
