const express = require('express');
const app = express();
const cors = require("cors");

require('dotenv').config()
const port = process.env.PORT || 5000;

const connect = require('./schemas');
connect ();

app.use(cors()); // 우선 cors 다 열어줌

app.use(express.urlencoded({ extened: false }));
app.use(express.json());

const mainRouter = require("./routers/note"); //데이터명 정해주기
const user = require('./routers/user');
const memoRouter = require('./routers/memo')
app.use('/api', mainRouter);
app.use('/api', user);
app.use('/api', memoRouter);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
