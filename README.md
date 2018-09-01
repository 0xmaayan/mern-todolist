# MERN- todoList

This is a boilerplate TodoList using the following technologies:
- [React](https://facebook.github.io/react/) and [Redux](https://github.com/reduxjs/redux) for the frontend
- [Express](http://expressjs.com/) and [Mongoose](http://mongoosejs.com/) for the backend
- [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/getting-started/) for UI


## Running


```shell
git clone
```

```shell
cd mern-todoList
```

```shell
npm install
```

```shell
cp .env.example .env
```

## Production mode:

```shell
npm run dev
```

## Development (Webpack dev server) mode:

This app is ready to deploy on heroku server

Sign in to [Heroku account](https://signup.heroku.com/)

In the root of the project

```shell
git add .
```

```shell
git commit -m "deploy to heroku"
```

```shell
heroku login - Enter your Heroku credentials.
```

```shell
heroku create
```

```shell
git push heroku master
```
