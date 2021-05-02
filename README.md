# Aplicacao de Projeto Integrador
Aplicativo "MeuGuia" para auxilio de localização e compartilhamento de pontos turísticos.

## Execução:
- Crie o banco de dados na pasta database através do script SQL
- Acesse a pasta server
- Construa o servidor com o comando npm install
- Execute o servidor com o comando npm run dev
- Acesse a pasta client
- Execute o cliente com o comando npm start
- Construa o cliente com o comando npm install

## Funcionamento:
- Através da página inicial é possível pesquisar um nome de cidade (inteiro ou parcial) e é retornado uma lista de pontos turísticos cadastrados no local
- Caso algum ponto que conheça não foi retornado, ele não está cadastrado no banco de dados, então é possível adicioná-lo através do link abaixo às opções retornadas
- É possível adicionar cidades ao banco, caso não tenha encontrado a sua disponível para adicionar o local, para isso é só acessar a aba "Cidades"
- Também é possível pesquisar locais por tag, caso esteja indeciso sobre qual cidade visitar, para isso é só acessar a aba "Tags"

A página do site deverá abrir automáticamente no seu navegador, caso contrário, acesse ela por http://localhost:3000

O servidor está alocado em http://localhost:3001

Em caso de dúvidas, contate os desenvolvedores.
