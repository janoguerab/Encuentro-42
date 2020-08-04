let moment = require('moment')
let coolImages = require('cool-images')
let fs = require('fs')
let cool = coolImages.many(1920, 1080, 10);
let fecha = new moment().local().format("YYYY/MM/DD hh:mm:ss a");
setTimeout(function(){
    insertText(fecha + '\n' + coolImages.one() + '\n')
}, 1000)
setTimeout(function(){
    insertText(fecha + '\n')
    cool.forEach(element => {
        insertText(element + '\n') ;
    });
}, 3000)
function insertText(element){
    fs.appendFile('./log.txt', element, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}