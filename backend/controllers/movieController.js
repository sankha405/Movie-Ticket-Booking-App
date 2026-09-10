const pool = require("../config/db");

const getMovies = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM movies ORDER BY movie_id"
        );

        res.status(200).json(result.rows);

    } catch (err) {
        console.error("========== MOVIE API ERROR ==========");
        console.error(err);
        console.error("Message:", err.message);
        console.error("Code:", err.code);
        console.error("Stack:", err.stack);
        console.error("=====================================");

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

module.exports = {
    getMovies
};