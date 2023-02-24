const express = require("express")
const app = express()
const port = 3000;
const {Restaurant, Menu, Item} = require("./models/index")
const {sequelize} = require("./db")

//TODO: 

app.listen(port, () => {
    sequelize.sync()
    console.log("App listening on port " + port)
})

app.get("/restaurants", async (request, response) => {
    let restaurants = await Restaurant.findAll({include: Menu})
    response.send(restaurants);
  });