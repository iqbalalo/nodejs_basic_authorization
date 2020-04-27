const jwt = require("jsonwebtoken");
const config = require("./config");

module.exports = () => {
  return (req, res, next) => {
    console.log("Authorization Middleware Called");
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "Access denied!" });
    } else {
      const tokenBody = token.slice(7);
      jwt.verify(tokenBody, config.SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: "Access denied!" });
        }
      });
      next();
    }
  };
};
