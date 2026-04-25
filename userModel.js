const db = require("./db");

const createUser = (name, email, password, role, callback) => {
    const query = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";
    db.query(query, [name, email, password, role], callback);
};

const findUserByEmail = (email, callback) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], callback);
};

module.exports = { createUser, findUserByEmail };