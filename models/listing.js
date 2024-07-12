const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image : { 
    type: String, 
   set : (v) => v === "" ? "https://i.pinimg.com/564x/3d/02/ca/3d02ca446792d550fe23890b07f199c7.jpg": v
 },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
