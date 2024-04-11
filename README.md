<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# NestJS Student Management System

A comprehensive NestJS application for managing student records, providing CRUD operations for students, and rendering views using EJS templating engine.

## Installation

```bash
For NestJS Installation and creating a new project in NestJS:
$ npm i -g @nestjs/cli
$ nest new project-name

For Configuration:
$ npm i --save @nestjs/config

For Database TypeORM Installation:
$ npm install --save @nestjs/typeorm typeorm mysql2

For EJS Views Engine:
$ npm install ejs @nestjs/platform-express
```
## Configuration and TypeORM Setup

In this NestJS application, we use environment variables for configuration and TypeORM for database management.

# Configuration

We utilize the `@nestjs/config` module to manage environment variables. These variables are stored in a `.env` file located in the root directory of the project. 
You need to define the following variables:

- `DB_HOST`: Hostname of the MySQL database.
- `DB_PORT`: Port number of the MySQL database.
- `DB_USERNAME`: Username for connecting to the MySQL database.
- `DB_PASSWORD`: Password for connecting to the MySQL database.
- `DB_DATABASE`: Name of the MySQL database.

Ensure you set up these variables appropriately before running the application.

# TypeORM Setup

TypeORM is configured to connect to a MySQL database. The configuration is specified in the `src/app.module.ts` file.

## Creating a New Module in NestJS

NestJS follows a modular architecture, allowing developers to organize their code into cohesive modules. Follow these steps to create a new module in your NestJS application:

# Step 1: Generate Module

NestJS follows a modular architecture, allowing developers to organize their code into cohesive modules. 

Follow these steps to create a new module in your NestJS application:

## Generate Module

Use the Nest CLI to generate a new module. Replace `module-name` with the name of your module:

# Step 2: Generate Module

```bash
nest generate module module-name
```

# Step 2: Generate Controller

```bash
nest generate controller module-name
```

# Step 3: Generate Service

```bash
nest generate service module-name
```

## Creating Entity Files and Views in NestJS

In a NestJS application, entity files represent the data model used to interact with the database.
Views, on the other hand, represent the UI templates rendered by the application.

Follow these steps to create entity files and views:

# Step 1: Create Entity File

Create a new TypeScript file for your entity. For example, `student.entity.ts` within the `entities` directory.
For example : ( Directory : (src/entities/student.entity.ts) )

# Step 2: Create View Files

Create a directory to store your views. For example, views within the module directory.
For example : ( Directory : (src/students/views/homepage.ejs) ) 

## For Running the Application

# Accessing Your NestJS Application Locally

To access your NestJS application running locally on your machine, follow these steps:

1. Make sure your NestJS application is running. If not, start the application by running:

```bash
# watch mode
$ npm run start:dev
```

2.Once the application is running, open your web browser.

Navigate to the following URL:

http://localhost:3000/module-name
( For Example : http://localhost:3000/students )

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
