# Projeto Realizado por:
Cassio Gaspar Valezzi (RM 551059)
Octávio Hernandez Chiste Cordeiro (RM 97894)


# Requisito do projeto
Cabecalho: Componente reutilizável em todo o projeto:(Vide protótipo)

Login: Componente único, utilizado para controlar o acesso dos usuários ao sistema, importante
salientar que se o usuário não conseguir realizar a validação e autenticação, não pode sair desta
tela.

Criação: Criar as rotas dos elementos usando Router Provider no componente main.

API-JSON: Antes da realização do login, devemos criar nossa base de dados, cria um arquivo de
novo dados.json e adicione os seguintes campos: id, nome, email e senha;

Validação: A validação dos campos e-mail e senha deve ocorrer através desta API(arquivo-json),
do tipo JSON-SERVER.

Após a validação o usuário deve ser redirecionado para a tela principal, juntamente com seus
dados.

Validação/Redirect: O usuário validado deve ter seu nome e e-mail apresentado no Cabecalho.

Criar um sistema de logout, onde após o usuário executar, deve ser imediatamente redirecionado
para a tela de Login e seus dados limpos de todos as áreas(sessionStorage).


# Como acessar:
Ao acessar o link: https://global-solution-2-eight.vercel.app/login, você será redirecionado para a página de login. Para acessar a pagina de conteúdo digite no campo "Usuário" "fulano@email.com" e no campo "Senha" digite "2023ESR1!"

# Repositorio
https://github.com/CassioValezzi/Global_Solution_2
