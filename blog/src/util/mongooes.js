module.exports = {
    mutipleMongooesToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    mongooesToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
