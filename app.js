const express = require("express");
const morgan = require("morgan");
const axios = require("axios");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  next();
});

// the endpoint we want to hit from our react app
app.get("/api/photos", (req, res) => {
  let recordsPerPage = 20;
  //    /api/photos?page=1
  let pageNum = req.query.page;

  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.FLICKR_API_KEY}&per_page=${recordsPerPage}&page=${pageNum}&format=json&nojsoncallback=1`;

  axios.get(url).then((response) => {
    const photos = response.data.photos.photo;

    res.status(200).json({
      status: "success",
      results: photos.length,
      photos
    });
  });
});

module.exports = app;
