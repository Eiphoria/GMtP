
function gParse() {
  browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    if (tabs?.length) {
      const tab = tabs[0];
      browser.tabs.executeScript(tab.id, {
        file: 'inject.js'
      }).then((result) => {
        if (result.length) {
          navigator.clipboard.writeText(result[0]);
        }
      }, (e) => {
        console.error(e);
      })
    }
  }, (e) => {
    console.error('error - ', e)
  })
}

browser.browserAction.onClicked.addListener(gParse);