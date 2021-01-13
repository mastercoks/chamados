const mongoose = require('mongoose')
const mongoConfig = require('../config/mongo')

mongoose.connect(
  `mongodb+srv://${mongoConfig.username}:${mongoConfig.password}@${mongoConfig.host}/${mongoConfig.database}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log("mongodb is connected");
}).catch((err) => {
  console.log("mondb not connected");
  console.log(err);
})