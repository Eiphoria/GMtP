//there we used simple clipboard.writeText() because, it can`t be used in background scripts, cause this extension rewrited on manifest V3

var amogus = document.querySelector('[aria-label="Участники"]')?.innerText; // put into variavble text from selector to get all inner text
var mitch = amogus.match(/[А-Я,І,Є][а-я,є,і,ї]{2,20} [А-Я,І,Є][а-я,є,і,ї]{2,20}/gm);//put into variavble regex pattern to find name only(on UA language)
//construction for getting unique values only
usingFilter = () => {  
return unique = mitch.filter(function(item,index){  
      return mitch.indexOf(item) == index;  
   });
}
var srt = usingFilter();//put into variable usingFilter() result
var biba = srt.join();//put into variable result of converting array into string
var str = biba.replace(/[,]/gm, ', \n');//put into variable result of replacing coma(,) symbol by coma(,) and endline(\n) symbol
var out = false;// define variable to response service worker (false by default)
//checking if srting with final result have lengh
if(str.length){
    out = true;//put into variable response of succesfull result work by inject script
    navigator.clipboard.writeText(str);//copy succesfull result into cliboard
    console.log("Names coppied succesfull.");//local debug
}else{
      out = false;//put into variable response of unsuccesfull result work by inject script
	navigator.clipboard.writeText("Error: open member list, or move to google meet tab");//copy unsuccesfull message about result into cliboard
      console.log("document.querySelector not found any matches.");//local debug
}
out;//print variable with result of work by injected script