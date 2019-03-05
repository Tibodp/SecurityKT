var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://karentibo.eu.auth0.com/.well-known/jwks.json"
    }),
    audience: 'https://securitykt.azurewebsites.net/api',
    issuer: "https://karentibo.eu.auth0.com/",
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

app.listen(port);
//test
//var request = require("request");

//var options = { method: 'POST',
  //url: 'https://login0.local.dev.auth0.com/oauth/token',
  //headers: { 'content-type': 'application/json' },
  //body: '{"client_id":"mznURxpeLh3xI1AxqZiIa10Fu2ycTSZ8","client_secret":"T5pzHeEj0nQh_Tvt6o3o57Vfm5ijImP6K5i5ajBS_6x27uqPewnFQJO-JichNNvP","audience":"https://securitykt.azurewebsites.net/api","grant_type":"client_credentials"}' };

//request(options, function (error, response, body) {
  //if (error) throw new Error(error);

  //console.log(body);
//});
//test
//var request = require("request");

//var options = { method: 'GET',
  //url: 'http://path_to_your_api/',
  //headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJFRkJPVVJHUXpBeE0wUXhNek14T1VJek1ESkZSVEJHUmtWRE4wUkZRelF3T1VWRlF6azFOUSJ9.eyJpc3MiOiJodHRwczovL2thcmVudGliby5ldS5hdXRoMC5jb20vIiwic3ViIjoibXpuVVJ4cGVMaDN4STFBeHFaaUlhMTBGdTJ5Y1RTWjhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vc2VjdXJpdHlrdC5henVyZXdlYnNpdGVzLm5ldC9hcGkiLCJpYXQiOjE1NTE3ODIwMTksImV4cCI6MTU1MTg2ODQxOSwiYXpwIjoibXpuVVJ4cGVMaDN4STFBeHFaaUlhMTBGdTJ5Y1RTWjgiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.HV851LYgSQ7o93eNiluerovMCbrH3_zofOIDniROiVVBmzzqTX0KO2U5eqVQoilVPvv-Wapj3c5m3pnP1ZgngiZh84lP-oXIpWElxAukD7ZDmMAN66FmRwJBoK1ZW_0RR6w7WnXTlHolgmWelrymBpKa55HYFyDih_XNlhhZqnLZR2fC3PVPCQBEh0HXen0X-I1EC0DkcFtsnNbWfrpsBtTHQJhJHDrMGK-b97ymL1TWhuTAiXLm8j3nQ7Y8_GiFiO4onJbB09hC5kboAUBphswrCA8WSHJhNpnXUXOPgthH279jsLxis8lDjr3CcTfSia8uK_hJtTEhkNC3uE8Y3A' } };

//request(options, function (error, response, body) {
  //if (error) throw new Error(error);

  //console.log(body);
//});