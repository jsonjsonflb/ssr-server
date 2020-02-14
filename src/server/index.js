import express from "express";
import { render } from "./utils";
const app = express();
// 请求静态资源在public里面找
app.use(express.static("public"));

app.get("*", function(req, res) {
  res.send(render(req));
});

var server = app.listen(3333, () => {
  console.log("start at 3333");
});
