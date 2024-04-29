require("dotenv").config();
const { sendEmailUsingGmail } = require("./controllers/sendEmailUsingGmail");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();
app.use(express.json());

// security
app.use(helmet());
app.use(xss());
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 20,
  })
);

// const corsConfig = {
//   origin: "https://www.ksacrashlab.com",
// };

// const corsConfig = {
//   origin: "https://radiant-peony-76a502.netlify.app",
// };

// app.use(cors(corsConfig));

app.use(cors());
app.get("/", (req, res) => {
  res.send("connected");
});

app.post("/sendEmail", sendEmailUsingGmail);

app.use((req, res) => res.status(404).send("Route does not exist"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
