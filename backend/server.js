const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const { sequelize } = require("./models/index");

const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const uploadRoutes = require("./routes/uploadRoutes");
const userRoutes = require("./routes/userRoutes");
const introRoutes = require("./routes/introRoutes");
const projectRoutes = require("./routes/projectRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");

const mainMenuRoutes = require("./routes/mainMenuRoutes");
const subMenuRoutes = require("./routes/subMenuRoutes");
const mattributeRoutes = require("./routes/mattributeRoutes");
const sattributeRoutes = require("./routes/sattributeRoutes");
const subMenuCatRoutes = require("./routes/subMenuCatRoutes");
const scattributeRoutes = require("./routes/scattributeRoutes");

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/upload", uploadRoutes);
app.use("/api/intro", introRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/users", userRoutes);

app.use("/api/menu", mainMenuRoutes);
app.use("/api/sub", subMenuRoutes);
app.use("/api/cat", subMenuCatRoutes);
app.use("/api/mat", mattributeRoutes);
app.use("/api/sat", sattributeRoutes);
app.use("/api/scat", scattributeRoutes);

////////////////////////////////// Server Sync Block //////////////////////////////
// const syncStatus = false;

// sequelize
//   .sync({
//     force: syncStatus,
//     alter: true,
//   })
//   .then(() => {
//     //   //if  (syncStatus) {
//     //   //defaultValueManager.Generate(syncStatus);
//     //   // }

//     console.log("initial synced".yellow.inverse);
//   })
//   .catch((err) => console.log(err));
////////////////////////////////// Server Sync Block End //////////////////////////////

app.use("/uploads", express.static(path.join(path.resolve(), "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.resolve(), "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(path.resolve(), "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running.....");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const time = new Date();
app.listen(
  PORT,
  console.log(
    `Server runing in ${process.env.NODE_ENV} mode ${time}  on port ${PORT}`
      .green.bold.underline
  )
);
