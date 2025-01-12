import {readFileSync} from 'fs'

export default function (){

    var fileString = readFileSync("./post.json","utf-8");
    var data = JSON.parse(fileString);
    return data;
}