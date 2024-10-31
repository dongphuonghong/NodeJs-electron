var { app, BrowserWindow, ipcMain  } = require('electron')
var win
function suly(){
 win=new  BrowserWindow({
            webPreferences: { nodeIntegration: true, contextIsolation: false }
    })
  win.loadFile('./index.html')
}
app.on('ready',suly)
var diachi=[
    'https://mrteacherlong.wordpress.com/',
    'https://www.electronforge.io/',
    'https://github.com/'
]
ipcMain.on('taogame', () => {
      var win1=new BrowserWindow({
            width: 400, height: 400,
    parent: win
  })
win1.loadURL(diachi[Math.floor(Math.random()*3)])  })
