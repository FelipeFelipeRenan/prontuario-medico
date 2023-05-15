# Workflow

1 - Rodar o Strapi com docker compose up;

2 - Criar conta no Strapi;

3 - Criar um token com acesso total e duração ilimitada em Setting/Create API TOKEN (**essa não é a forma recomendada**);

4 - Criar usuários da aplicação cada qual com um nível de acesso diferente via Strapi Painel:

* 0 - Administrador
* 1 - Médico
* 2 - Enfermeira(o)
* 3 - Paciente

5 - Verificar IP local de sua máquina (ipconfig para Windows e ip addr para Linux);

6 - Em frontend/strapi/strapi.ts

* Na variável localIP colocar o IP do passo 4;
* Em Authorization colocar a frente de Bearer o token gerado no passo 2;

7-  Fazer o projeto.
