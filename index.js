var request = require("request");
var fs = require("fs");

var link = "https://sytantris.github.io/http-examples/future.jpg";

request(link)
            .on('error', (err) => {
              throw err;
            })
            .on('response', (response) => {
              console.log("response.statusMessage", response.statusMessage);
              console.log("response.headers['content-type']: ", response.headers['content-type']);
              console.log("Downloading image");
            })
            .pipe(fs.createWriteStream('./future.jpg'))
            .on('finish', () => {
              console.log("Download complete");
            });
