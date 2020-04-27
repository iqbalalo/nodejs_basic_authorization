const jwt = require("jsonwebtoken");

module.exports = () => {
  return (req, res, next) => {
    console.log("Authorization Middleware Called");
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "Access denied!" });
    }
    // next();
  };
};
