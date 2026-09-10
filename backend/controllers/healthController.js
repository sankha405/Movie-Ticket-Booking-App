const getHealth = (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Backend is healthy"
    });
};

module.exports = {
    getHealth
};