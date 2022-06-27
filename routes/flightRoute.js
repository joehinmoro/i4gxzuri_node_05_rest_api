//  IMPORTS AND SETTINGS
const express = require("express");
const {
    createFlight,
    getFlights,
    getFlight,
    updateFlight,
    deleteFlight,
    _400Route,
} = require("../controllers/flightController");
// instatiate express router
const router = express.Router();

// ROUTES
// 1. Add/Book Flight (CREATE)
router.post("/", createFlight);

// 2. Get all Flight (INDEX)
router.get("/", getFlights);

// 3. Get a single Flight (SHOW)
router.get("/:id", getFlight);

// 4. Update/Edit Flight (UPDATE)
router.patch("/:id", updateFlight);

// 5. Delete Flight (DELETE)
router.delete("/:id", deleteFlight);

// 6. 400 Route (Bad Request)
router.use(_400Route);

// EXPORTS
module.exports = router;
