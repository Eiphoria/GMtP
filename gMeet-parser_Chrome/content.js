var contain = document.querySelector('[role="list"]')?.innerText; // put into variavble text from selector to get all inner text
if(typeof(contain) === "string"){
      var matches = contain.match(/[А-Я,І,Є,A-Z][А-Я,І,Є,A-Z,а-я,є,і,ї,a-z]{1,20} [А-Я,І,Є,A-Z][А-Я,І,Є,A-Z,а-я,є,і,ї,a-z]{1,20}/gm);//put into variavble regex pattern to find name only(try to UA and Eng names)
      //construction for getting unique values only
      usingFilter = () => {  
      return unique = matches.filter(function(item,index){  
            return matches.indexOf(item) == index;  
         });
      }
      var srt = usingFilter();//put into variable usingFilter() result
      var biba = srt.join();//put into variable result of converting array into string
      var str = biba.replace(/[,]/gm, ', \n');//put into variable result of replacing coma(,) symbol by coma(,) and endline(\n) symbol
      //var out = false;// define variable to response service worker (false by default)
      //checking if srting with final result have lengh
      if(str.length){
          //out = true;//put into variable response of succesfull result work by inject script
          navigator.clipboard.writeText(str);//copy succesfull result into cliboard
          console.log("Names coppied succesfull.");//local debug
          str;
      }else{
            //out = false;//put into variable response of unsuccesfull result work by inject script
            navigator.clipboard.writeText("Error: open member list, or move to google meet tab");//copy unsuccesfull message about result into cliboard
            console.log("Names coppied failed.");//local debug

      }
      //str;//print variable with result of work by injected script, but now i don't know how to get result of injected script to service worker

}else{
            //out = false;//put into variable response of unsuccesfull result work by inject script
            navigator.clipboard.writeText("Error: querySelector ");//copy unsuccesfull message about result into cliboard
            console.log("Not on Gmeet tab.");//local debug
}
