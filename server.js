var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    'article-one': {
        title : 'Article One',
        date : 'Sep 2, 2017',
        content : `<p>
                This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. 
            </p>
            <p>
                This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. 
            </p>
            <p>
                This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. This is the content of article one. 
            </p>`
    },
    'article-two': {
        title : 'Article Two',
        date : 'Sep 1, 2017',
        content : '<p> This is the content of the second article.</p>'
    },
    'article-three': {
        title : 'Article Three',
        date : 'Sep 0, 2017',
        content : '<p> This is the content of the third article.</p>'
    }
}

function createArticle(data){
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title} | JM
            </title>
            <meta name = "viewport" content = "width=device-width, initial-scale=1"/>
        </head>
        <body>
            <div>
                <a href = '/'>Home</a>
            </div>
            <hr/>
            <h3>${title}</h3>
            <div>
                ${date}
            </div>
            <div class = "container">
                ${content}
            </div>
        </body>
    </html>`
    return htmlTemplate;
}

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one', function(req,res) {
   res.send(createArticle(articles['article-one']));
});

app.get('/article-two', function(req,res) {
   res.send(createArticle(articles['article-two']));
});

app.get('/article-three', function(req,res) {
   res.send(createArticle(articles['article-three']));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
