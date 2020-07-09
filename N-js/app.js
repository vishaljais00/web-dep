const express = require('express')


const app = express();

app.get('/', function (req, res) {

        res.send('Hello world')
});
app.get('/alien', function (req, res) {

         const id = req.query.id
        res.send('Welcome back aliens' +  id)
});
/* app.get('/alien/:id', function (req, res) {

        const name = req.query.id
        const Id = req.params.id
        if (Id == 20 || name == vishal) {
                res.send('Vishal' )

        } else if (Id == 21 || name == praveen) {

                res.send('Praveen')
        } else if (Id == 22 || name == aakash) {

                res.send('Aakash')
        } else {

                res.send('welcome back aliens')
        }
}); */



app.listen(9000, function (req, res) {

        console.log('Server started..')
});

