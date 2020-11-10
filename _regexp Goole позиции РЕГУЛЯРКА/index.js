var myRegexp = /<div class="r"><a href="(.+?)" ping="/g;
while ((match = myRegexp.exec(document.body.innerHTML)) !== null) {
    console.log(match[0]);
}


более точный

var myRegexp = /<div class="r"><a href="([^\"]+)" ping="/g;
while ((match = myRegexp.exec(document.body.innerHTML)) !== null) {
    console.log(match[1]);
}