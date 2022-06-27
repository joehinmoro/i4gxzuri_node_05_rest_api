// IMPORTS
let flightDB = require("../database/flightdb");
const { randomUUID: UUID } = require("crypto");

// CONTROL FUNCTIONS
// 1. Add/Book Flight (CREATE)
const createFlight = (req, res) => {
    try {
        // destructure data for new flight record from request body
        const { title, time, price, date } = req.body;
        // define unique id for new flight record
        const ID = UUID();

        // define object for new flight record
        const flight = {
            _id: ID,
            title,
            time,
            price,
            date,
            dateCreated: Date(Date.now()),
            dateUpdated: null,
        };
        // push new flight record object to flight DB
        flightDB.push(flight);
        // if successful, redirect to new flight record (GET)
        res.redirect(`/${ID}`);
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: "something went wrong" });
        console.log(error);
    }
};

// 2. Get all Flight (INDEX)
const getFlights = (req, res) => {
    try {
        // define array to contain all flight records
        const allFlights = flightDB;
        // respond with allFilght array
        res.status(200).json(allFlights);
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: "something went wrong" });
        console.log(error);
    }
};

// 3. Get a single Flight (SHOW)
const getFlight = (req, res) => {
    try {
        // destruct id from request params
        const { id } = req.params;
        // find a flight object with the id requested
        const flight = flightDB.find(({ _id }) => _id === id);
        // if flight is not found, respond with error message and code
        if (!flight) {
            return res.status(404).json({ error: "flight record not found" });
        }
        // if flight is found, respond with flight data:
        res.status(200).json(flight);
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: "something went wrong" });
        console.log(error);
    }
};

// 4. Update/Edit Flight (UPDATE)
const updateFlight = (req, res) => {
    try {
        // destruct id from request params
        const { id } = req.params;
        // find a flight object with the id requested
        const flight = flightDB.find(({ _id }) => _id === id);
        // if flight is not found, respond with error message and code
        if (!flight) {
            return res.status(404).json({ error: { message: "flight record not found" } });
        }
        // if flight is found:
        // destructure update data from req.body
        const { title, time, price, date } = req.body;
        // update each property if update version is truthy
        if (title) flight.title = title;
        if (time) flight.time = time;
        if (price) flight.price = price;
        if (date) flight.date = date;
        // set dateUpdated property of flight record to now
        flight.dateUpdated = Date(Date.now());
        // if successful, redirect to new flight record (GET)
        res.redirect(`/${id}`);
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: { message: "something went wrong" } });
        console.log(error);
    }
};

// 5. Delete Flight (DELETE)
const deleteFlight = (req, res) => {
    try {
        // destruct id from request params
        const { id } = req.params;
        // find a flight object with the id requested
        const flight = flightDB.find(({ _id }) => _id === id);
        // if flight is not found, respond with error message and code
        if (!flight) {
            return res.status(404).json({ error: { message: "flight record not found" } });
        }
        // if flight is found, filter out flight record to be deleted
        // and save the returned result as new flight collection
        const newFlightDB = flightDB.filter(({ _id }) => _id !== id);
        // set newFlightDB as current flight collection
        flightDB = newFlightDB;
        // redirect to Get all Flights (INDEX) route
        res.redirect("/");
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: { message: "something went wrong" } });
        console.log(error);
    }
};

// 6. 400 Route (Bad Request)
const _400Route = (req, res) => {
    try {
        // send 400 error if user makes a bad request
        res.status(400).json({ error: { message: "bad request" } });
    } catch (error) {
        // if error, send error message and status code
        res.status(500).json({ error: { message: "something went wrong" } });
        console.log(error);
    }
};

// EXPORTS
module.exports = {
    createFlight,
    getFlights,
    getFlight,
    updateFlight,
    deleteFlight,
    _400Route,
};
