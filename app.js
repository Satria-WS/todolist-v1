const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const liveReload = require("reload");

let port = 3001;
const server = http.createServer(app);

//create var item for add item in the list
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

//create view engine
app.set("view engine", "ejs");

//create urlencoded
//we've told our app to use body Parser, we can now grab the value of newItem from request.body.newItem;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


//create get home route
app.get("/", (req, res) => {
  //res.send function just 1 piece data , res.write can create multiple piece data
  // res.write("Say Hello World");
  let today = new Date();
  let Daily = today.getDay();
  let recentDay;
  let option = {
    weekday: "long",
    day: "2-digit",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", option);

  res.render("list", {listTitle: day,newListItem: items});

});
  //create post home root for pull the data from post
  app.post("/", (req, res) => {
    let item = req.body.newItem;

    if(req.body.list === "Work") {
      workItems.push(item);
      res.redirect("/work");
    } else {
      items.push(item);
      res.redirect("/");
    }

  });



//create get work root
 app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List" , newListItem: workItems});
 });




  /* 
    switch (Daily) {
      case 1:
        // res.send("mon");
        // res.write("<h1>Monday</h1>")
        // res.write("<h1>Monday</h1>");
          // res.send("mon");
          recentDay = "mon";
        console.log("mon");
      //   res.sendFile(__dirname + "/index.html");
        break;

      case 2:
        recentDay = day;
        console.log("tue");
        
        break;

      case 3:
      //   res.send("wed");
       recentDay = "wed";
        console.log("wed");
        break;

      case 4:
      //   res.send("thurs");
       recentDay = "thurs";
        console.log("thurs");
        break;

      case 5:
      //   res.send("fri");
       recentDay = "fri";
        console.log("fri");
        break;

      case 6:
      //   res.sendFile(__dirname + "/weekday.html");
       recentDay = "sat";
        console.log("sat");
        break;

      default:
      //   res.sendFile(__dirname + "/weekend.html");
       recentDay = "week";
        console.log("week");
    }
    //render list.ejs
   */



//listen port
app.set("port", process.env.PORT || 3001);
//create liveReload
liveReload(app)
  .then((reloadReturned) => {
    server.listen(app.get("port"), () => {
      console.log("Server started on port " + app.get("port"));
    });
  })
  .catch((err) => {
    console.error("Reload Just Errorr!!");
  });

//create listen for display server
// app.listen(port, () => {
//     console.log("Server started on port " + port)
// });