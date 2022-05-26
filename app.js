const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const swaggerJson = require("./swagger.json");
const swaggerUI = require("swagger-ui-express");

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// accept request in form or JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./app/models");
db.client.sync();

require("./app/routes/player.routes")(app);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
