const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const config = require('./config/default');
const routes = require('./routers');
const pkg = require('./package');

const app = express();
// 设置模版目录
app.set('views', path.join(__dirname, 'views'));
// 设置模版引擎为ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    name: config.session.key,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: config.session.maxAge,
    },
    store: new MongoStore({
        url: config.mongodb,
    }),
}));
app.use(flash());

routes(app);

app.listen(config.port, function(){
    console.log(`${pkg.name} listening on port ${config.port}`);
});