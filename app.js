/* packages */
const express = require('express');
const config = require('config');
const controller = require("./controller/logic/product.controller");
const bodyParser = require("body-parser");

/* app configuration */
const app = express();
const port = config.get('server-port');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

tkFn = require("./middleware/verifyToken");
app.use(tkFn);

/* Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to the first RESTAPI");
});

const productRoutes = require("./routes/product.routes");
ProductRoutes(app);

const customerRoutes = require("./routes/customer.routes");
CustomerRoutes(app);

const customerUserRoutes = require("./routes/customer_user.routes");
CustomerUserRoutes(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});