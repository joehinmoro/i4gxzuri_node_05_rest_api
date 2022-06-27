// IMPORTS
const { randomUUID: UUID } = require("crypto");

// COLLECTIONS
// flights collection object containing seed records
let flights = [
    {
        _id: UUID(),
        title: "Flight to Canada",
        time: "1pm",
        price: 26000,
        date: "26-06-2022",
        dateCreated: Date(1656339824685),
        dateUpdated: null,
    },

    {
        _id: UUID(),
        title: "Flight to North Korea",
        time: "12pm",
        price: 78000,
        date: "28-06-2022",
        dateCreated: Date(1656339921666),
        dateUpdated: null,
    },
];

// EXPORTS
module.exports = flights;
