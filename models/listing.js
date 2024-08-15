const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    // Set a default image URL if the value is an empty string
    set: (v) => v === "" ? "https://i.pinimg.com/564x/3d/02/ca/3d02ca446792d550fe23890b07f199c7.jpg" : v,
    // Optionally, you could also set a default value
    default: "https://i.pinimg.com/564x/3d/02/ca/3d02ca446792d550fe23890b07f199c7.jpg"
  },
  price: {
    type: Number,
    required: true, // Assuming price is required
  },
  location: {
    type: String,
    required: true, // Assuming location is required
  },
  country: {
    type: String,
    required: true, // Assuming country is required
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    }
  ]
});

listingSchema.post("findOneAndDelete",async(listing)=>{
  if(listing){
  await Review.deleteMany({_id:{$in:listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

