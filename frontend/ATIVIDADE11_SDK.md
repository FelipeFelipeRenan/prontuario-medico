# CC0043 - PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS - UFCA

## Aborde os tópicos:

* Compatibilidade com react native
* Instalação do SDK no projeto
* Como utilizar o SDK para realizar as principais operações no BaaS, com React Native

## INSTALAÇÃO

Para iniciar a instalação, adicione `strapi-sdk-js`na dependência no projeto: 

```js
npm install --save strapi-sdk-js
```

Então você pode criar uma nova instância importando `strapi-sdk-js` em seu projeto e você pode passar várias opções para constructor:

```js
import Strapi from "strapi-sdk-js";

const strapi = new Strapi();
```

## COMO UTILIZAR
De inicio, uma nova instância deve ser criada.

* ### Nova instância

```js
import Strapi from "strapi-sdk-js";
//SEM OPÇÃO
const strapi = new Strapi();

// OU COM OPÇÃO
const strapi = new Strapi({
  url: "http://localhost:1337",
  prefix: "/api",
  store: {
    key: "strapi_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
  axiosOptions: {},
});
```
* ### Tipos de métodos
Todos os métodos contentTypes são construídos em torno das operações Strapi CRUD padrão.

* `find(contentType, params)` 

Retorna objeto de acordo com seus filtros de consulta.

```js
await strapi.find('restaurants', {
  filters: {
    name: {
      $eq: 'La Fourchette'
    }
  },
  sort: 'name:asc',
  pagination: {
    start: 0,
    limit: 0
  },
  fields: [...];
  populate: [...] || '' || {};
  publicationState: 'live';
  locale: 'all'
})
```

* `findOne(contentType, id, params)`

Retorna um objeto específico por id, como também, adicionar filtros de consulta.

```js
await strapi.findOne('restaurants', 1)
// with query filters
await strapi.findOne('restaurants', 1, {
  fields: ['id', 'name']
  populate: ['menu'],
})
```

* `create(contentType, data, params)`
Cria uma nova inserção de dados e retorne seu valor. Você pode adicionar filtros de consulta para selecionar o retorno do objeto.

```js
await strapi.create('restaurants', { name: '' })
// with query filters
await strapi.create('restaurants', 1, {
  fields: ['id', 'name']
  populate: ['menu'],
})
```
* `update(contentType, id, data, params)`    
Atualize dados de um objeto pelo seu id e retorne a entrada atualizada.

```js
await strapi.update('restaurants', 1, { name: '' })
// with query filters
await strapi.update('restaurants', 1, {
  fields: ['id', 'name']
  populate: ['menu'],
})
```

* `delete(contentType, id, params)` 
Exclue um dado pelo seu id e retorne a entrada excluída.

```js
await strapi.delete('restaurants', 1)
// with query filters
await strapi.delete('restaurants', 1, {
  fields: ['id', 'name']
  populate: ['menu'],
})
```



```js
```


