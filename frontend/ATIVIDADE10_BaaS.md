# CC0043 - PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS - UFCA

* ## GOOGLE FIREBASE

### Aborde os tópicos:

#### - O que é um BaaS
#### - Vantagens e desvantagens
#### - Característica do BaaS da sua equipe (como utilizar, compatibilidade com react native, principais recursos)
#### - Qual a sua equipe pretende utilizar, com a justificativa

## O que é um BaaS

Um BaaS ou mBaaS ou Backend as a Service é uma plataforma que automatiza o desenvolvimento de back-end e cuida da infraestrutura de nuvem. Usando um BaaS, você terceirizará as responsabilidades de execução e manutenção de servidores para terceiros e se concentrará no front-end ou no desenvolvimento do lado do cliente.

## Vantagens do BaaS 

* Velocidade de desenvolvimento – É super rápido.
* Preço de desenvolvimento – Pode ser mais econômico, quando não se utiliza de todos os recursos de infraestrutura oferecidos pela plataforma, dependendo também da demanda que o projeto vai exigir.
* É sem servidor e você não precisa gerenciar a infraestrutura.

## Desvantagens do BaaS

* Menos flexibilidade em comparação com a codificação personalizada.
* Um nível mais baixo de personalização em comparação com um back-end personalizado.
* Bloqueio de fornecedor para plataformas de código fechado.

## Vantagens do Firebase

* Banco de dados em tempo real : esse recurso permitirá criar, por exemplo, aplicativos de mensagens como o WhatsApp, que atualizarão os dados entre os dispositivos quase instantaneamente.
* Machine Learning : ML é um recurso interessante disponível no Firebase e não disponível em outros back-ends como uma plataforma de serviço. Ele fornecerá um conjunto de APIs prontas para uso com casos de uso de aprendizado de máquina padrão, como reconhecimento facial, digitalização e reconhecimento de textos.
* Ad Mob : esse recurso permitirá que você monetize seu aplicativo e o integre a uma rede global de anúncios gerenciada pelo Google.

## Desvantagens do Firebase

* Controle e Acesso: Por estar utilizando o Firebase que, no caso, é uma plataforma de código fechado como Backend as a Service (“back-end como serviço”, em inglês, ou BaaS), você só conseguirá utilizar funcionalidades que estejam disponíveis no Firebase.
* Capacidade limitada de consultas devido ao modelo de fluxo de dados do Firebase.
* Os modelos de dados relacionais tradicionais não são aplicáveis ao NoSQL, seus chops SQL não serão transferidos.
* Sem instalação local.
* Não é open-source e também não possui servidores dedicados e suporte empresarial.
* Os preços podem ser difíceis de serem previstos e limitar custos pode ser incômodo.


## Característica do BaaS da sua equipe 

### Como utilizar:

* Criar uma conta no Firebase (Google)
* Criar um projeto Firebase
* Habilitar a autenticação por email e senha
* Criar o aplicativo na plataforma alvo (Android ou iOS) no Firebase
* Criar e configurar um novo aplicativo React Native
* Instalar o FirebaseSDK ao projeto
* Inicializar o aplicativo Firebase
* Configurar registro e login de usuários
* Persistir as credenciais de login
* Escrever e ler dados na Firebase Firestore


### Compatibilidade com react native
Compatibilidade com react native:
O Firebase oferece SDKs multiplataforma que auxiliam a criar e entregar apps: 
* Web
* Android
* IOS+
* C++
* Unity
 
O React Native é uma framework de criação de aplicativos móveis multiplataforma, a mesma suporta as seguintes plataformas:
* IOS+
* Android
* Web
* Windows
* MacOS
* Linux


### Principais recursos
Seus principais recursos podem ser categorizados em Build, Release & Monitor e Engage:

Build:
* Bancos de dados (Firestore + RTDB)
* Machine learning
* Cloud Functions
* Autenticação
* Cloud Messaging
* Hospedagem
* Armazenamento

Release & Monitor:
* Crashlytics
* Analytics
* Monitoramento de Desempenho
* Laboratório de Teste
* Distribuições de aplicativos

Engage:
* Configuração Remota
* Previsões
* Teste A / B
* Links dinâmicos
* Mensagens no aplicativo


### Qual a sua equipe pretende utilizar, com a justificativa

Como plataforma utilizada para o backend da aplicação desenvolvida pela equipe, foi escolhida a Strapi, um headless CMS de código aberto que utiliza uma API para conectar um Frontend com o Backend Strapi.

#### Pontos positivos:
* É uma plataforma user-friendly e gratuita
* É de fácil apŕendizado
* É compatível de fácil integração com varias tecnologias, como Flutter, Kotlin, React, React-Native


## Referência
https://blog.back4app.com/backend-as-a-service-baas/

https://www.alura.com.br/artigos/entendendo-firebase-principais-funcionalidades

https://blog.geekhunter.com.br/firebase-o-que-e-e-quando-usar-no-desenvolvimento-mobile/#Desvantagens_do_Firebase

https://blog.back4app.com/pt/o-que-e-o-firebase/#Recursos_do_Firebase

https://firebase.google.com/docs/libraries?hl=pt-br
