// ! Importing express app
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// ! express app
const app = express();

// ! connect to mongoDB
const dbURI =
  "mongodb+srv://<dbuname>:<dbpass>@learn-node.e4fxe.mongodb.net/learn-node?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("connected");
    app.listen(3000);
  })
  .catch((err) => console.log("error: ", err.message));

// ! register view engine
app.set("view engine", "ejs");

// ! middleware
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// ! routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// ? blog routes
app.use("/blogs", blogRoutes);

// ! 404
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});
