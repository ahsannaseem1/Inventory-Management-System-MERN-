const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://ahsannaseem974:Ahsan974@cluster0.qdguv6e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
