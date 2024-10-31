var {app,BrowserWindow}=require('electron')
function xuly() {
  new BrowserWindow().loadFile('./index.html')
}
app.on('ready', xuly)