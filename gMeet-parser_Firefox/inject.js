var amogus = document.querySelector('[aria-label="Участники"]')?.innerText;
var mitch = amogus.match(/[А-Я,І,Є][а-я,є,і,ї]{2,20} [А-Я,І,Є][а-я,є,і,ї]{2,20}/gm);
usingFilter = () => {  
return unique = mitch.filter(function(item,index){  
      return mitch.indexOf(item) == index;  
   });
}
var srt = usingFilter();
var biba = srt.join();
var str = biba.replace(/[,]/gm, ', \n');
str;