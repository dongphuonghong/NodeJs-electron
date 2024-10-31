var {app,BrowserWindow}=require('electron')
function suly(){
    var win=new BrowserWindow()
      win.loadFile('./index.html')
    var win1=new BrowserWindow({
            width: 400, height: 400,
        parent:win,modal: true, show: false
    })
      win1.loadURL('https://github.com')
    win1.once('ready-to-show',()=>win1.show())
}
app.whenReady().then(suly)