const express = require('express')


const app = express();

app.get('/', function (req, res) {

        res.send('Hello world')
});
app.get('/alien', function (req, res) {

         const Id = req.query.id
        res.send('Welcome back aliens ' +  Id)
});
 app.get('/alien/:id', function (req, res) {

        const Id = req.params.id
        if (Id == 20 ) {
                res.send('Vishal' + Id )

        } else if (Id == 21 ) {

                res.send('Praveen'  + Id )
        } else if (Id == 22 ) {

                res.send('Aakash'  + Id )
        } else {

                res.send('welcome back aliens')
        }
}); 



app.listen(9000, function (req, res) {

        console.log('Server started..')
});

