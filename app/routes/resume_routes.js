var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/resumes/:id', function(req, res) {
        const id = req.params.id
        const details = { '_id': new ObjectID(id) };
        db.collection('testdb').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                console.log('resume was found');
                res.send(item);
            }
        })
    })

    app.post('/resumes', function (req, res) {
        const resume = {title: req.body.title, file: req.body.file}
        db.collection('testdb').insert(resume, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                console.log('new resume posted');
                res.send(result.ops[0]);
            }
        })
    })

    app.put('/resumes/:id', function (req, res) {
        const id = req.params.id
        const details = { '_id': new ObjectID(id) };

        db.collection('testdb').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                var title = item.title;
                var file = item.file;

                if (req.body.title) {
                    title = req.body.title;
                }
                if (req.body.file) {
                    file = req.body.file;
                }
        
                var resume = {title: title, file: file};

                db.collection('testdb').update(details, resume, (err, result) => {
                    if (err) {
                        res.send({ 'error': 'An error has occurred' });
                    } else {
                        res.send(resume);
                    }
                });

            }
        });
    });

    app.delete('/resumes/:id', function (req, res) {
        const id = req.params.id
        const details = { '_id': new ObjectID(id) };
        
        db.collection('testdb').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                console.log('resume was deleted');
            }
        })
    })
}