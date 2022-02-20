async function gParse() {
    //get current tab
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      //check if we got currect tab
      if (tabs?.length) {
        const tab = tabs[0];
        //inject script
        chrome.scripting.executeScript(
            {
              target: {tabId: tab.id},
              files: ['content.js'],
            },(result) => { 
              //if injecting is succesfull we check length of result and response into console
              if (result.length) {
                //console.log(result[0].result);
                if(result[0].result === true){
                  console.log("Succesfull copied names")
                }else{
                  console.log("Unsuccesfull copied names")
                }
               
              }else{
                console.log("Error, result don`t have length");
              } 
            });

      }
    });
};

chrome.action.onClicked.addListener(gParse);//execute function by clicking icon of script