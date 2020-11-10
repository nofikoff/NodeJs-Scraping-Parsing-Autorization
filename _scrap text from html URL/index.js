//https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'http://u86166.test-handyhost.ru/';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {


//var $ = cheerio.load(html);
const postJobButton = $(html).text();
console.log(postJobButton);


  })
  .catch(function(err) {
    //handle error
  });