console.log ("inside of routes.js");

const Foodtrucks = require("../controllers/foodtrucks");
const Reviews = require("../controllers/reviews");

module.exports = function(app){
    app.get("/foodtrucks", Foodtrucks.getAll);
    app.post("/foodtruck", Foodtrucks.create);
    app.post('/foodtruck/:id/review', Reviews.addReview);
    
}