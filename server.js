const express = require('express');
const path = require("path");
const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("Public"))

require('./apiroutes')(app);
// require('./htmlroutes')(app);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Public/index.html"))
})

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
});