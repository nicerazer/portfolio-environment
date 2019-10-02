var
    express     = require("express"),
    bodyParser  = require("body-parser"),
    app         = express();
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));

//ROUTE SETUP
app.get("/home", function(req, res){
    res.render("home");
});

app.get("*", function(req, res){
    res.redirect("/home");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("App has started...");
});