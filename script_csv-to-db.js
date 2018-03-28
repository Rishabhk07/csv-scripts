/**
 * Created by rishabhkhanna on 28/03/18.
 */
const sworn = require('sworm');
const csvFilePath = "./categories.csv";
const csv = require('csvtojson');
const url = "oracle://mmehar:meharsingh@oracle.cise.ufl.edu:1521/orcl&maxRows=100000&pool=true";
let db = sworn.db({
    driver: 'oracle',
    config: {
        user: 'mmehar',
        password: 'meharsingh',
        host: 'oracle.cise.ufl.edu',
        sid: 'orcl'
    }
});
var categories = db.model({table: 'categories'});

csv().fromFile(csvFilePath).on('json', (jsonObj)=>{
    console.log(jsonObj);
    var saveThis = categories(jsonObj);
    saveThis.save();
}).on('done', (error)=>{
    console.log(error);
});