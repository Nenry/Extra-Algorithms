const https = require('https');

  function getPageCount(term) {
    return new Promise(function (resolve, reject) {
      let req = https.get(`https://jsonmock.hackerrank.com/api/countries/search?name=${term}`, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          let finalData = JSON.parse(data);
          resolve(finalData.total_pages);
        });
      }).on('error', (err) => {
        console.log("Error: " + err.message);

      });
    });
  }


    function getDataPage(term, num) {
      return new Promise(function (resolve, reject) {
        let req = https.get(`https://jsonmock.hackerrank.com/api/countries/search?name=${term}&page=${num}`, (resp) => {
          let data = '';

          resp.on('data', (chunk) => {
            data += chunk;
          });

          resp.on('end', () => {
            let finalData = JSON.parse(data);
            resolve(finalData);
          });
        }).on('error', (err) => {
          console.log("Error: " + err.message);

        });
      });
    }

// function getCountries(s, p) {
//   getData(s).then(data => {
//     let resultCount = 0;
//     let page
//     console.log(data);
//     data.data.forEach(country => {
//       if ( country.population >= p) {
//         resultCount++;
//       }
//     });
//     console.log(resultCount);
//     // return resultCount;

//   });
// }


function getCountries(s, p) {
  var resultsCount = 0;
  getPageCount(s).then(data => {
    let totalPages = data;
    
    // console.log(totalPages);
    for (let i = 1; i <= totalPages; i++ ) {
      
      getDataPage(s, i).then(pageData => {
        // console.log(pageData);
        const countries = pageData.data;
        // console.log(countries);
        for (let j = 0; j < countries.length; j++ ) {
            if (countries[j].population >= p) {
              resultsCount++;
              // console.log(resultsCount);
            }
        }

      });
    }
    
  });
  console.log(resultsCount);


}

// getPageCount('in').then(data => console.log(data));
getCountries('in', 1000000);

// getDataPage('in', 2).then(pageData => console.log(pageData));

