const express = require("express");
const app = express();
const path = require('path')
const port = 5000;
const notFound = require("./utils/notfound");
const errorHandle = require("./utils/errorHandle");
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
});
app.use(express.static('public'))
app.use(notFound);
app.use(errorHandle);


app.listen(process.env.PORT || port, () => {
  console.log(`Express Listening at port ${port}`);
});
