var fs = require('fs');
var path = require('path');
var http = require('http');
var express = require('express');
var httpProxy = require('http-proxy');
var child_process = require('child_process');
var moment = require('moment');
var _ = require('underscore');
var xml2js = require('xml2js').parseString
var bodyParser = require('body-parser');

var apiProxy = httpProxy.createProxyServer();

var svn_path ="svn://10.128.161.92/datacard/QCT_MDM9x30/branches/WEBUI_SRC/UI_WEB/www/docs/docs"

webroot = __dirname + '/www';
var webport = 8003;

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(webroot));

function getConnIP(req) {
  var dev_ip_info = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
  var dev_ip = dev_ip_info.split(":").reverse()[0];
  return dev_ip;
}

function getSvnLog(file, fn) {
  var cmd = 'svn log "' + file + '" --xml';
  console.log(cmd);
  child_process.exec(cmd, {encoding: 'utf8',maxBuffer: 50000 * 1024},function(err, stdout, stderr) {
    if(err){
      fn({error:1})
      return;
    }
    var _list = [];
    xml2js(stdout, function(err, result) {
      console.log(err)
      if(err){
        fn({error:1})
        return;
      }
      result = result.log.logentry;
      _.each(result, function(v, i) {
        var _item = {};
        _item.revision = v.$.revision;
        _item.author = v.author[0];
        _item.date = moment(v.date[0]).format("YYYY-MM-DD HH:mm:ss");
        _item.msg = v.msg[0];
        _list.push(_item);
        if (i == result.length - 1) {
          _list = _.sortBy(_list, function(item) {
            return -item.revision
          })
          fn && fn(_list)
        }
      })

    })
  })
}



app.get('/refresh', function(req, res) {
  var cmdStr = 'svn up'
  child_process.exec(cmdStr, function(error, stdout, stderr) {
    console.log(cmdStr + " ok!");
    res.end('update ok')
  });
})

app.get('/getlog', function(req, res) {
  var logsInfo = {
    "ip":getConnIP(req),
    "docs":req.query.path+".md",
    "time":moment().format("YYYY-MM-DD hh:mm:ss")
  } 
  
  getSvnLog(svn_path+req.query.path+".md",function(data){
    res.send(data)
  })
  child_process.exec("echo " + JSON.stringify(logsInfo) + " >> log/" + moment().format("YYYY-MM") + ".txt")
})

app.post('/getlogs', function(req, res) {
  var logsInfo = {
    ip:getConnIP(req),
    time:moment().format("YYYY-MM-DD hh:mm:ss")
  } 
  console.log(req.body)
  getSvnLog(req.body.path,function(data){
    res.send(data)
  })

})


app.listen(webport);

console.log(webroot + ' run on port: ' + webport);
