const express = require("express");
const userRouter = require("./routes/routes.js");
const { error, successful } = require("../src/constants/app.const.js");

const app = express();
const PORT = process.env.PORT || 8002;
app.use(express.json());
app.use("/", userRouter);

// Handling any invalid route
app.use((req, res) => {
  res.status(400).send(error.invalid_route);
});

app.listen(PORT, () => {
  console.log(successful.server, PORT);
});
