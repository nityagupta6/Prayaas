const http = require("http");
require("dotenv").config();
const app = require("./app");
const server = http.createServer(app);
const { mongoConnect } = require("./services/mongo");

const PORT = process.env.PORT || 8000;
async function loadServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
loadServer();
