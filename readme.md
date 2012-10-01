# httpTime

A stream module to capture and output the amount of time of a http request.

Using streams, you can pipe the request through the start and stop
streams to capture and log the time of the request.

## Usage

``` js
var http = require('http'),
  ht = require('http-time');

http.createServer(function(req,res) {
  req
    .pipe(ht.start(req))
    .pipe(...)
    .pipe(ht.stop(req))
    .pipe(res);
}).listen(3000);
```
or with event-stream

``` js
var http = require('http'),
  es = require('event-stream'),
  ht = require('http-time');

http.createServer(function(req,res) {
  es.pipeline(
    req,
    ht.start(req),
    ...,
    ht.stop(req),
    res
  );
}).listen(3000);
```


