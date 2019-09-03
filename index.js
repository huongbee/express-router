const express = require('express');
const app = express();

/**
 * http://localhost:3000/hiihi?name=haha
 * 
 *  {
        "params": "hiihi",
        "query": "haha"
    }
 */
app.get('/:name', (req, res) => {
    res.send({
        params: req.params.name,
        query: req.query.name
    });
})
app.listen(3000)
