// async function gParse() {
//     //get current tab
//     chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
//       //check if we got currect tab
//       if (tabs?.length) {
//         const tab = tabs[0];
//         //inject script
//         chrome.scripting.executeScript(
//             {
//               target: {tabId: tab.id},
//               files: ['content.js'],
//             },(result) => { 
//               //if injecting is succesfull we check length of result and response into console
//               console.log("biba");
//               // if (result.length) {
//               //   //console.log(result[0].result);
//               //   if(result[0].result === true){
//               //     console.log("Succesfull copied names")
//               //   }else{
//               //     console.log("Unsuccesfull copied names")
//               //   }               
//               // }else{
//               //   console.log("Error, result don`t have length");
//               // } 
//             });

//       }
//     });
// };

// chrome.action.onClicked.addListener(gParse);//execute function by clicking icon of script

//Note. If you using service workers you can see console output only following instruction below:
// Go to chrome://serviceworker-internals
// Choose any service worker and start it if not already started.
// Click on Inspect!!
// Boom! You have the console there!

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  },function(results){ //callback string with names as result of perform injected script(object)
     //console.log(results[0].result.length);
     //console.log(typeof(results[0].result)); //getting stirng from object
     //console.log(results[0].result != null);
     if(results[0].result != null){
        //console.log("Injected script return  result");
        //console.log(results[0].result); //local debug
        //navigator.clipboard.writeText(results[0].result);
        if((results[0].result.match(/\n/g)) != null){
            var counter = (results[0].result.match(/\n/g)).length + 1;//counting num of names by matches '\n' symbol + 1
        }else{
            var counter = 1;//set counter value 1
        }
        
        // console.log(counter + "\n  = counted num of names");//local debug
        chrome.action.setBadgeText( {tabId: tab.id  ,text: counter.toString() });//setting on badge num count of names on current tab
     }else{
        //console.log("Inject return object with .result = null");
        chrome.action.setBadgeText( {tabId: tab.id  ,text: "Err" });//setting on badge num count of names on current tab
     }
  })
});