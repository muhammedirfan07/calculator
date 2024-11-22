//function to display constent
function displayContent(content){
    result.value +=content
}
//function clear 
 function buttonclear(){
    result.value=" "
}

//result
function calacOutput(){
    result.value =eval(result.value)
}
//backspace 
function removeLastDigit(){
    result.value= result.value.slice(0,-1)
}