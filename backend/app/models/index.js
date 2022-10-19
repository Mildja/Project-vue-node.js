const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.admins = require("./admin.model.js")(sequelize, Sequelize);
db.announces = require("./announce.model.js")(sequelize, Sequelize);
db.ap_requests = require("./ap_request.model.js")(sequelize, Sequelize);
db.colabors = require("./colabor.model.js")(sequelize, Sequelize);
db.comsubs = require("./comsub.model.js")(sequelize, Sequelize);
db.cs_students = require("./cs_student.model.js")(sequelize, Sequelize);
db.doc_presents = require("./doc_present.model.js")(sequelize, Sequelize);
db.doc_requests = require("./doc_request.model.js")(sequelize, Sequelize);
db.doc_sents = require("./doc_sent.model.js")(sequelize, Sequelize);
db.docs = require("./doc.model.js")(sequelize, Sequelize);
db.grades = require("./grade.model.js")(sequelize, Sequelize);
db.namedocs = require("./namedoc.model.js")(sequelize, Sequelize);
db.organizations = require("./organization.model.js")(sequelize, Sequelize);
db.pics = require("./pic.model.js")(sequelize, Sequelize);
db.requests = require("./request.model.js")(sequelize, Sequelize);
db.students = require("./student.model.js")(sequelize, Sequelize);

//one-to-one
db.pics.hasOne(db.announces);
db.announces.belongsTo(db.pics);

//one-to-many
db.organizations.hasMany(db.colabors);
db.colabors.belongsTo(db.organizations);

db.organizations.hasMany(db.namedocs);
db.namedocs.belongsTo(db.organizations);

db.comsubs.hasMany(db.cs_students);
db.cs_students.belongsTo(db.comsubs);

db.students.hasMany(db.cs_students);
db.cs_students.belongsTo(db.students);

db.students.hasMany(db.requests);
db.requests.belongsTo(db.students);

db.namedocs.hasMany(db.requests);
db.requests.belongsTo(db.namedocs);

db.colabors.hasMany(db.requests);
db.requests.belongsTo(db.colabors);

db.requests.hasMany(db.doc_sents);
db.doc_sents.belongsTo(db.requests);

db.requests.hasMany(db.doc_presents);
db.doc_presents.belongsTo(db.requests);

db.requests.hasMany(db.doc_requests);
db.doc_requests.belongsTo(db.requests);

db.requests.hasMany(db.ap_requests);
db.ap_requests.belongsTo(db.requests);

db.grades.hasMany(db.requests);
db.requests.belongsTo(db.grades);

db.admins.hasMany(db.ap_requests);
db.ap_requests.belongsTo(db.admins);

db.admins.hasMany(db.announces);
db.announces.belongsTo(db.admins);

db.admins.hasMany(db.docs);
db.docs.belongsTo(db.admins);

db.admins.hasMany(db.grades);
db.grades.belongsTo(db.admins);


module.exports = db;
