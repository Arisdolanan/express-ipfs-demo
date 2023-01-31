const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT_APP || 3000;
require("dotenv").config();
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// orm - rest
const productRouter = require("./routes/products_route");
const categoryRouter = require("./routes/categories_route");
const ipfsRouter = require("./routes/uploads_route");

app.use("/api/v1/product", productRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/ipfs", ipfsRouter);

// graphql
const schema = require("./graphql/schema");
const { graphqlHTTP } = require("express-graphql");
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
  })
);

app.get("/", function (req, res) {
  res.json({
    data: "respond with a resource",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
