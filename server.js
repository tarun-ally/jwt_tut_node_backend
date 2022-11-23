const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();
const db=require("./app/models");
const authConfig=require("./app/config/auth.config");
const Role=db.role;
var corsOptions={
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// use when inn prod
// db.sequelize.sync();
// use when inn development
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    initial();
})
function initial() {
    Role.create({
        id: 1,
        name: "user"
    });
    Role.create({
        id: 2,
        name: "moderator"
    });
    Role.create({
        id: 3,
        name: "admin"
    });
}
// simple route
app.get("/",(req,res) => {
    res.json({message: "tarun"});
});
console.log('jjs');

require("./app/routes/auth.routes")(app);
require("./app/routes/user.model")(app);

const PORT=process.env.PORT||8080
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}.`);
})