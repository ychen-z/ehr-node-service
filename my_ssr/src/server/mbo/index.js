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
  getNewsList(); 
  ServerCookie = req.headers.cookie; // 获取到cookie的字段
  async function getApi1() {
    return await request("http://localhost:4001/api/news.json");
  }

  async function getApi2() {
    return await superagent.get(
        "http://localhost.netease.com:8080/mock/test/api/mbo/loginInfo?systems=12"
      )
      .set("Content-Type", "application/json;charset=UTF-8")
      .set("Cookie", ServerCookie)
  }
  
  async function getNewsList() {
    let list1 = await getApi1(); // getApi1
    let { body: list2 } = await getApi2(); // getApi2
    res.json({
      code: 200,
      data: {
        list1: list1,
        list2: list2,
      },
    });
  }
});

app.post("/info", (req, res) => {
  res.send("post");
});

module.exports = app;
