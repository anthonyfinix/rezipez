const { disconnect } = require("mongoose");

const mongoose = require('mongoose');

module.exports={
    init:function init(){
        mongoose
          .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
          .then(response=>console.log('connected to database'))
          .catch((error) => console.log(error));
      },
      disconnect:function disconnect(){
        mongoose.disconnect();
      }
}
