/**
 * Created by rishabhkhanna on 28/03/18.
 */
const sworn = require('sworn');
const csvFilePath = "";
const csv = require('csvtojson');

csv().fromFile(csvFilePath).on('json', (jsonObj)=>{
    console.log(jsonObj);
}).on('done', (error)=>{
    console.log(error);
});