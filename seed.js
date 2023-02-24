const {Restaurant, Item, Menu} = require("./models/index")
const {seedRestaurant, seedItem, seedMenu} = require("./seedData");
const {sequelize} = require("./db")

const syncSeed = async () => {
    await sequelize.sync({force: true});
    let appleBees = await Restaurant.create(seedRestaurant[0])
    let breakfastMenu = await Menu.create(seedMenu[0])
    let lunchMenu = await Menu.create(seedMenu[1])
    await appleBees.addMenu(breakfastMenu);
    await appleBees.addMenu(lunchMenu);
    let masala = await Item.create(seedItem[0])
    let soup = await Item.create(seedItem[1])
    let hamburger = await Item.create(seedItem[2])

    await breakfastMenu.addItem(masala);
    await breakfastMenu.addItem(soup);

    await lunchMenu.addItem(hamburger);

}

syncSeed()

