var { app, BrowserWindow  } = require('electron')
require('@electron/remote/main').initialize() 
var win
function suly(){
 win=new  BrowserWindow({
            webPreferences: { nodeIntegration: true, contextIsolation: false }
    })
    require('@electron/remote/main').enable(win.webContents) 
  win.loadFile('./index.html')
}
app.on('ready',suly)