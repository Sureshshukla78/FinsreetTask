const mongoose = require("mongoose");
const finstreetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    last:{
        type: Number,
    },
    buy:{
        type: Number,
    },
    sell:{
        type: Number,
    },
    volume:{
        type: Number,
    },
    baseUnit:{
        type: String,
    }
});

const StoreData = new mongoose.model("finstreetData", finstreetSchema);
module.exports = StoreData;