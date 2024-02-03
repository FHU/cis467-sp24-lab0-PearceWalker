const facts = require('./facts.json')

const express = require('express')
const app = express()

const PORT = process.env.PORT || "3000"

app.set('view engine', 'ejs')

app.listen(PORT, ()=> {
    console.log( `App is running on http://localhost:${PORT}...`)
})

app.get("/", (req, res) => {

    res.send("Good Job!")

})

// http://localhost:3000/greet?name=kaylee&dob=2002
app.get('/greet', (req, res) => {
    const { name, year } = req.query;

    if (!name || !year) {
        res.status(400).send('Please provide both name and year parameters.');
        return;
    }

    const currentYear = new Date().getFullYear();
    const age1 = currentYear - parseInt(year);
    const age2 = age1 - 1;

    res.send(`Hello, ${name}!\nYou are ${age1} or ${age2} years old.`);
});

app.get('/math/:num1/:op/:num2', (req, res) => {
    const { num1, op, num2 } = req.params;

    
    const parsedNum1 = parseInt(num1);
    const parsedNum2 = parseInt(num2);

    let result;
    switch (op) {
        case 'plus':
            result = parsedNum1 + parsedNum2;
            break;
        case 'minus':
            result = parsedNum1 - parsedNum2;
            break;
        case 'times':
            result = parsedNum1 * parsedNum2;
            break;
        case 'divide':
            result = parsedNum1 / parsedNum2;
            break;
        default:
            res.status(400).send('Invalid operation');
            return;
    }

    
    res.send(result.toString());
});


app.get('/pandorasbox', (req, res)=> {

    // do the work


    fetch("https://icanhazdadjoke.com/",
    {
        headers: {
            "Accept": "application/json"
        }
    })
    
    .then(response => response.json())

    .then((data) => {
        console.log(data)
        res.render('pandorasbox', {title: "Pandora's Box", message: data.joke} )
    })
    
    const length = facts.length;
    const random = Math.floor(Math.random() * length)
    const fact4 = facts[4].fact

     

})