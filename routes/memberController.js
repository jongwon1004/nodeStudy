const express = require('express')
const { getMemberById } = require('../repositories/memberRepository')
// const app = express()

const router = express.Router();

router.get('/:memberid', (req, res) => {
    console.log('여기 들어왔냐?');
    const memberid = req.params.memberid;
    console.log('memberid:', memberid);

    getMemberById(memberid, (err, user) => {
        if (err) {
            res.status(500).json({ error: 'Database query error' });
            return;
        }
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    });
});

module.exports = router;