const express = require('express');

const app=express();
const bodyParser = require('body-parser');

app.get('/' , (req,res) => {
    res.send(`
    <div>   
        <form method="POST">
            <input placeholder ="email"/>
            <input placeholder ="password"/>
            <input placeholder ="password confirmation"/>
            <button> Sign up </button>
        </form>
    </div>
    `);
});

app.post('/' ,  bodyParser.urlencoded({extended:true}) , (req,res) => {
    console.log(req.body);
    res.send('account created');
});


app.listen(3000, ()=>{
    console.log('listening')
});
