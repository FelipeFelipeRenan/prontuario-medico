## Configuração do Strapi

Para que a aplicação funcione corretamente é necessário configurar o Strapi como abaixo.

### Criação de primeiro usuário

1. Acesse a página de login do Strapi, por exemplo pela url, http://localhost:1337/admin. Caso for sua primeira vez é necessário criar uma conta no Strapi e depois entrar nela.

2. Clique em *Content Manager*, depois em *User* e em *Create new entry*.

3. Crie um usuário inserindo o *username*, *email*, *password*, *role* (selecione *Authenticated*), *accessLevel* (coloque 0, pois esse usuário é o administrador), escolha o sexo e o número de telefone. Clique em *Save*.

### Criação do token customizado

1. Clique em *Settings* na seção *GENERAL*, em *API Tokens* e depois em *Create new API Token*.

2. Coloque um nome e descrição a sua escolha. Em *Token duration* selecione *Unlimited* e em *Token type*, *Custom*.

3. Na tabela *Permissions*, em cada item dela (consulta, enfermeiro, medico, paciente, content-type-builder, email, upload, **users-permissions** e I18n), marque todas as opções. Alguns itens dessa tabela possuem várias opções, contudo **todas** elas devem ser marcadas, especialmente as do **users-permissions**.

4. Clique em *save*, copie o token e coloque na várivel de ambiente TOKEN_STRAPI.

### IP do Strapi

1. Copie o endereço/IP onde o Strapi está hospedado.

2. Coloque o endereço/IP obtido anteriormente na várivel de ambiente IP_TO_STRAPI.

### Acesso a aplicação

1. Inicie o aplicativo.

2. Faça o login com o usuário gerado no tópico "Criação de primeiro usuário", usando email ou nome de usuário e a senha.