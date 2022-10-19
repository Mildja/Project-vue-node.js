const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to portest." });
});


require("./app/routes/admin.routes")(app);
require("./app/routes/announce.routes")(app);
require("./app/routes/ap_request.routes")(app);
require("./app/routes/colabor.routes")(app);
require("./app/routes/comsub.routes")(app);
require("./app/routes/cs_student.routes")(app);
require("./app/routes/doc_present.routes")(app);
require("./app/routes/doc_request.routes")(app);
require("./app/routes/doc_sent.routes")(app);
require("./app/routes/doc.routes")(app);
require("./app/routes/grade.routes")(app);
require("./app/routes/namedoc.routes")(app);
require("./app/routes/organization.routes")(app);
require("./app/routes/pic.routes")(app);
require("./app/routes/request.routes")(app);
require("./app/routes/student.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
