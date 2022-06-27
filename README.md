# i4gxzuri_node_05_rest_api: Booking Flight API

Read the Documentation:

1. Add/Book Flight (CREATE)

    POST: "/"

    Format:

    {

    title: String,

    time: String,

    price: Number,

    date: String,

    }

2. Get all Flight (INDEX)

    GET: "/"

3. Get a single Flight (SHOW)

    GET: "/:id"

4. Update/Edit Flight (UPDATE)

    PATCH: "/:id"

    Format:

    {

    title: String,

    time: String,

    price: Number,

    date: String,

    }

    Note: Falsy values will be ignored

5. Delete Flight (DELETE)

    DELETE: "/:id"

Anything else results to a bad request (400)
