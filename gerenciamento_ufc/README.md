Vamos criar o sistema de gerenciamento curricular da UFC. Nele existirão 3 tipos de usuários (Administrador, Professor e Aluno) e esses usuários acessarão o sistema através de Login. Os usuários administradores poderão cadastrar usuários Professores e Alunos, cadastrar ementas de disciplinas, liberar disciplinas para a matricula dos alunos e cadastrar professores nas disciplinas. Os usuários Professores poderão cadastrar os critérios de avaliação de suas disciplinas e cadastrar as notas de seus alunos. Já os usuários Alunos podem se matricular em disciplinas quando as mesmas estiverem acessíveis e acompanhar seu progresso em cada uma delas.

## Funcionalidades
- Iniciar o sistema, login e adição de usuários
  - Sistema já começa com um Administrador cadastrado;
  - O Administrador pode:
    - Fazer login e logout;
    - Adicionar novos usuários;
    - Mostrar quais os usuários cadastrados no sistema;
```
# login _nome _senha
: login admin admin
>Bem-vindo, admin.
#logout
: logout
>Até logo.
# addUser _nome _senha _tipoDeUsuario
: addUser ruan ruan aluno
>Usuário Cadastrado com sucesso.
#showUsers
: showUsers
>[ admin ruan ]
```