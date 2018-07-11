const conn = require('./connection')

function getRats () { // returns rats from the database
    return conn('rats')
    // .where("id", 1)
}

function addRat (rat) {
    return conn('rats')
        .insert(rat)
}


module.exports = {
    getRats,
    addRat
}