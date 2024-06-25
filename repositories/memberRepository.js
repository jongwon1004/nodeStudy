const connection = require('./dbConnection');

const getMemberById = (memberId, callback) => {
    const query = 'SELECT * FROM Member WHERE member_id = ?';
    connection.query(query, [memberId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results[0]);
    });
};

module.exports = {
    getMemberById
};