const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  // on uncaught exception we actually want to crash our app as the entire node process is in unclean state.
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Webserver running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  
  server.close(() => {
    process.exit(1);
  });
});
