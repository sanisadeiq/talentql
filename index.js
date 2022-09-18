const express = require("express");
const { default: rateLimit } = require("express-rate-limit");
const app = express();
const port = 8080;

 const Limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
	max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}) 

app.use(Limiter)

app.get("/howold", function (req, res) {

    const age =  ageCalculator(req.query.dob)

    if(age === null){

        res.status(400);
        res.send('Invalid timestamp')
        
    }else{

        res.send(`You are ${age} years old today`)
    }

   // res.send(`You are ${age} years old today`)
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

function ageCalculator(dob) {

    const dateOfBirth = new Date(dob * 1000).getFullYear();

    if(dateOfBirth === null || isNaN(dateOfBirth)) return null
   
    var currentdate = new Date().getFullYear(); 

    const age = currentdate - dateOfBirth;

    return age;

}
