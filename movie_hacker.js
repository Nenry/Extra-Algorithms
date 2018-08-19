// To solve this challenge, you are required to write an HTTP GET method to retrieve information
// from a movie database.
// Function Description
// Given a string substr, getMovieTitles must perform the following tasks:
// 1. Query https://jsonmock.hackerrank.com/api/movies/search/?
// Title = substr(replace substr).
// 2. Initialize the titles array to store total string elements.Store the Title of each movie
// meeting the search criterion in the titles array.
// 3. Sort titles in ascending order and return it as your answer.
// The query response from the website is a JSON response with the following five fields:
// page: The current page.
//   per_page : The maximum number of results per page.
//     total : The total number of movies in the search result.
//       total_pages : The total number of pages which must be queried to get all the results.
//         data : An array of JSON objects containing movie information where the Title field
// denotes the title of the movie.
// In order to get all results, you may have to make multiple page requests.To request a page by
// number, your query should read
// https://jsonmock.hackerrank.com/api/movies/search/?
// Title = substr & page=pageNumber, replacing substr and pageNumber.
// Input Format For Custom Testing
// Input from stdin will be processed as follows and passed to the function.
// A single string, substr, denoting the substring you must query for.

// let totalPages;
// https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman`, (resp) => {
//   let data = '';

//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   resp.on('end', () => {
//     totalPages = JSON.parse(data).total_pages;
//     console.log(totalPages);
//   });
// }).on('error', (err) => {
//   console.log("Error: " + err.message);

// });
const https = require('https');
function getMovieInfo(substr) {
let totalPages;
const subStr = substr;


  function fetchPageCount() {
    return new Promise (function(resolve, reject) {
      let req = https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${subStr}`, (resp) => {
        let data = '';
        
        resp.on('data', (chunk) => {
          data += chunk;
        });
        
        resp.on('end', () => {
          let pageCount = JSON.parse(data).total_pages;
          resolve(pageCount);
        });
      }).on('error', (err) => {
        console.log("Error: " + err.message);
        
      });
    });
  }
  
  const movieData = {};
  
  function fetchPage(page) {
    return new Promise (function(resolve, reject) {
      let req = https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${subStr}&page=${page}`, (resp) => {
        let data = '';
        
        resp.on('data', (chunk) => {
          data += chunk;
        });
        
        resp.on('end', () => {
          movieData[page] = JSON.parse(data).data;
          resolve(movieData);
        });
      }).on('error', (err) => {
        console.log("Error: " + err.message);
        
      });
    });
  }
  


  const promiseChain = [];
  const results = [];
  function executeChain(num) {
    for (let i = 1; i <= num; i++) {
      // console.log(num);
      promiseChain.push(fetchPage(i));
    }
  }

  

  fetchPageCount()
    .then((pages) => { totalPages = pages })
    .then(() => executeChain(totalPages))
    .then(() => Promise.all(promiseChain))
    .then(() => {
      // console.log(movieData);
        for (let i = 1; i <= totalPages; i++) {
          // console.log(typeof movieData[i]);
          movieData[i].forEach(movie => {
            results.push(movie.Title);
          });
        }
      }).then(() => {
        let sortedResults = results.sort();
        sortedResults.forEach(movieTitle => {
          console.log(movieTitle);
        });
      });
}
  
getMovieInfo('spiderman');
  
  // fetchPageCount('spiderman').then(pageCount => console.log(pageCount));
  
  
  //already wrote out the promises but need to do multiple fetch
//make another function that will do all of the work and on the last fetch .then results for if i == pagecount then (return results)