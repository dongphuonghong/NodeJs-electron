const { app, BrowserWindow,ipcMain, dialog } = require('electron')
var win
function createWindow() {
win = new BrowserWindow({
  webPreferences: { nodeIntegration: true, contextIsolation: false ,  }
})
win.loadFile('index.html')
win.webContents.send('welcome', 'CDCNTT')
}
app.on('ready', createWindow);
ipcMain.on('Start', (event, argument) => {
console.log('hello', argument)
})
ipcMain.on('Stop', (event, argument) => {
dialog.showErrorBox('err', argument)
app.exit()
})
ipcMain.on('chontaptin', (event, argument) => {
const openFile = dialog.showOpenDialogSync(win, {
  properties: ['openFile', 'openDirectory']
})
console.log(openFile)
})