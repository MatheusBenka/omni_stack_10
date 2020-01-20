const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://node_stack:mongando@cluster0-zzrvb.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


app.use(express.json());


app.delete('/:id', (request, response) => {
    console.log(request.params);
    return response.json({
        message:'vamo porra!',
    });
});

app.post('/users',(req, resp) =>{
   console.log(req.body);
    return resp.json({
        message:'postante!',
    });
});


app.listen(3333);