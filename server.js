import fs from "fs";
import path from "path";
import jsonServer from "json-server";

const db = JSON.parse(fs.readFileSync(path.join("db.json")));

// JSON Server module
const server = jsonServer.create();
const router = jsonServer.router(db);

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/*": "/$1",
  })
);
server.use(router);
server.post("/students", (req, res) => {
  res.jsonp(req.body);
});
// Listen to port
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
