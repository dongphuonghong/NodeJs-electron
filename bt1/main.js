var {app,BrowserWindow}=require('electron')
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS']='true'
function suly(){
    new BrowserWindow().loadFile('./index.html')
}
app.whenReady().then(suly)