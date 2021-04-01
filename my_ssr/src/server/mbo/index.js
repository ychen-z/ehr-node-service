var express = require("express");
var app = express();
var request = require("request-promise");
var cookieParser = require("cookie-parser");
const superagent = require("superagent");

app.use(cookieParser());

app.get("/info", (req, res) => {
  var data1;
  var data2;
  var data3;
  request("http://localhost:4001/api/news.json")
    .then(function (body) {
      data1 = JSON.parse(body);
      return request("http://localhost:4001/api/news.json");
    })
    .then(function (body) {
      data2 = JSON.parse(body);
      return request("http://localhost:4001/api/news.json");
    })
    .then(function (body) {
      data3 = JSON.parse(body);
      res.send([data3].concat([data1]).concat([data2]));
    });
});

app.get("/news", (req, res) => {
  getLogList(); // 获取日志列表
  ServerCookie = req.headers.cookie; // 获取到cookie的字段

  console.log(`ServerCookie`, ServerCookie);
  async function selectAllData() {
    return await request("http://localhost:4001/api/news.json");
  }

  async function selectCounts() {
    return await superagent.get(
        "http://localhost.netease.com:8080/mock/test/api/mbo/loginInfo?systems=12"
      )
      .set("Content-Type", "application/json;charset=UTF-8")
      .set("Cookie", ServerCookie)
  }
  async function getLogList() {
    let result = await selectAllData(); // 获取列表
    let { body } = await selectCounts(); // 查询总数
    res.json({
      code: 200,
      data: {
        list: result,
        total: body,
      },
    });
  }
});

app.post("/info", (req, res) => {
  res.send("post");
});

module.exports = app;
