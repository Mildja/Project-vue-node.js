module.exports = {
    HOST: "projectmild.postgres.database.azure.com",
    USER: "mildadmin@projectmild",
    PASSWORD: "project@2022",
    DB: "project",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
    
  };