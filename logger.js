import url from 'url'

var address = 'http://localhost:8080/';
var q = url.parse(address, true);

export const log = (message) => {
    console.log(message)
    console.log(q.host); //returns 'localhost:8080'
}