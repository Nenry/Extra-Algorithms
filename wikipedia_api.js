const https = require('https');

function getTopicCount(topic) {

  https.get(`https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${topic}`, (resp) => {
    let data ='';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      console.log(JSON.parse(data).parse.text);
    });

  })
  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });



}

getTopicCount('pizza');