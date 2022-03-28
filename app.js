const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let port = 3001;


//create home route
app.get("/", (req, res) => {
  // res.send("Say Hello World");

  let today = new Date();
  let Daily = today.getDay();

  switch (Daily) {
    case 1:
        res.send("mon");
      console.log("mon");
      break;

    case 2:
        res.send("tue");
      console.log("tue");
      break;

    case 3:
        res.send("wed");
      console.log("wed");
      break;

    case 4:
        res.send("thurs");
      console.log("thurs");
      break;

    case 5:
        res.send("fri");
      console.log("fri");
      break;

    case 6:
        res.send("sat");
      console.log("sat");
      break;

    default:
        res.send("!error");
      console.log("!error");
  }

});







//create listen for display server
app.listen(port, ()=> {
    console.log("Server started on port " + port)
});