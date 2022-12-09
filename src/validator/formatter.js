function trim(str){
        str=str.trim();
        console.log(str)
}
function changetoLowerCase(str){
    str=str.toLowerCase();
    console.log(str)
}
function changeToUpperCase(str){
    str=str.toUpperCase();
    console.log(str)
}

module.exports.trim=trim;
module.exports.changetoLowerCase=changetoLowerCase;
module.exports.changeToUpperCase=changeToUpperCase;
