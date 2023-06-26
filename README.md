## Installation

**editorconfig**

- link: https://editorconfig.org/

**setup eslint**

- link (eslint): https://eslint.org/docs/latest/use/getting-started
  - eslint airbnb (eslint-config-airbnb): https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

**prettier**

- link (prettier): https://prettier.io/docs/en/install.html
  - eslint prettier (eslint-config-prettier): https://github.com/prettier/eslint-config-prettier

**sequelize**

- link (sequelize): https://sequelize.org/docs/v6/getting-started/
  - sequelize-cli (sequelize-cli): https://sequelize.org/docs/v6/other-topics/migrations/#the-sequelizerc-file

**babel**

- link (@babel/node, @babel/core): https://babeljs.io/docs/babel-node
  - babel es6 (@babel/preset-env): https://babeljs.io/docs/babel-preset-env
  - babel build (@babel/cli): https://babeljs.io/docs/babel-cli
  - babel sequelize (@babel/register): https://sequelize.org/docs/v6/other-topics/migrations/#using-babel
  - babel eslint (@babel/eslint-parser): https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser

## Instructions

**launch app**

```bash
npm run clean:all
npm run i:all
sudo docker-compose up -d server
```

**sequelize**

```bash
docker-compose exec --user=node server sh -c "npm run migrate"
docker-compose exec --user=node server sh -c "npm run seed:all"
```

**rebuild containers to update dependencies and delete old images**

```bash
docker-compose build [--no-cache] [server | client]
docker-compose up -d [server | client]
docker image prune
```

**enter inside container**

```bash
docker-compose exec -it ${service_name} sh
```

**execute command inside container**

```bash
docker-compose exec --user=node ${service_name} sh -c "${command}"
```
