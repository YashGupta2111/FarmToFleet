const mongoose=require('mongoose');
const destinationSchema = new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number
});
module.exports= mongoose.model('destinations', destinationSchema);