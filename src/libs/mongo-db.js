const mongoose = require("mongoose")
const config = require("config")

require("../apps/models/category")
require("../apps/models/product")
require("../apps/models/user")
require("../apps/models/comment")
//const uris = "mongodb://127.0.0.1:27017/Vietpro_mongodb"
const uris = config.get("mongo.uri");

mongoose.connect(uris);
