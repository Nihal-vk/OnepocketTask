const fs = require("fs");
const { readFile } = require("fs/promises");

const filename = "src/countWord/data.txt";

// console.log(fs.readFileSync(filename, "utf-8"));

fs.readFile(filename , 'utf-8', (err,data)=>{
    if(err){
        console.log("erorr loading file",err);
        return;
    }

    const wordCount= countWords(data)
    console.log('total wordCount is : ',wordCount);
})


function countWords(data){
    const words= data.split(/\s+/);

    const filter=words.filter((word)=>word!='')

    return filter.length;
}
