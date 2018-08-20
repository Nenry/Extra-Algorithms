const https = require('https');

function getTopicCount(topic) {
  let fetchedData;
  let dataCount;
   function fetchData() {
    return new Promise((resolve, reject) => {

      https.get(`https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=${topic}`, (resp) => {
        let data ='';
        
        resp.on('data', (chunk) => {
          data += chunk;
        });
        
        resp.on('end', () => {

          fetchedData = Object.values(JSON.parse(data).parse.text);
          dataCount = fetchedData[0].toLowerCase().split(`${topic}`).length - 1;
          console.log(fetchedData[0].toLowerCase());
          resolve('fetched');
        });
        
      })
      .on('error', (err) => {
        console.log('Error: ' + err.message);
      });
    });
  }
   fetchData().then(() => console.log(dataCount));




}

getTopicCount('pizza');
