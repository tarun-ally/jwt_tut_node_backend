module.exports={
    HOST: "localhost",
    USER: "tarun",
    PASSWORD: "0000",
    DB: 'jwtauth',
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}