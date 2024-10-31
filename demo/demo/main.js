/**
 * var { app, BrowserWindow } = require('electron')
* var appWindows = {}
* function suly() {
    * appWindows.main=new BrowserWindow()
    *ap pWindows.main.loadFile('./index.html')
    * appWindows.main.on('closed', _ => delete appWindows.main)
    * appWindows.settings = new BrowserWindow({
        * width: 400, height: 400,
        * parent: appWindows.main
    * })
    * appWindows.settings=new BrowserWindow({width:400,height:400})
    * appWindows.settings.loadFile('./settings.html')
    * appWindows.settings.on('closed', _ => delete appWindows.settings)
* }
* app.on('ready', suly)
* app.on('window-all-closed', app.quit)*
*/
var { app, BrowserWindow, ipcMain } = require('electron')
function xuly() {
    var win=new  BrowserWindow({
            webPreferences: { nodeIntegration: true, contextIsolation: false }
    })
      win.loadFile('./index.html')
}
  app.on('ready', xuly)
  ipcMain.on('print-hello', (e, dulieu)=>{
    console.log('Xin chao ' + dulieu)
})  