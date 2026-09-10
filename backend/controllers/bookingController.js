const pool = require("../config/db");

const createBooking = async (req, res) => {

    try {

        const { customer_name, show_id, seat_number } = req.body;

        const result = await pool.query(
            `INSERT INTO bookings(customer_name, show_id, seat_number)
             VALUES($1,$2,$3)
             RETURNING *`,
            [customer_name, show_id, seat_number]
        );

        res.status(201).json(result.rows[0]);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            message: "Booking Failed"
        });

    }

};

module.exports = {
    createBooking
};