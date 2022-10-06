const express = require('express')
const {addItem, getItems} = require('./repo');
const router = express.Router()

router.use(timeLog = (req, res, next) => {
        console.log('Time: ', Date.now());
        next();
    }
)

router.get('/', async (req, res) => {
        try {
            let items = getItems()
            if (items) {
                res.send(items)
            } else {
                res.send(404)
            }

        } catch (e) {
            console.log(e.name + ': ' + e.message);
        }
    }
);

router.post('/', async (req, res) => {
        try {
            await addItem(req.body)
            res.send({success: true})
        } catch (e) {
            console.log(e.name + ': ' + e.message);
        }
    }
);

module.exports = router