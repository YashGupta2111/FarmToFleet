const mongoose=require('mongoose');
const destinationSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});
module.exports= mongoose.model('contact', destinationSchema);