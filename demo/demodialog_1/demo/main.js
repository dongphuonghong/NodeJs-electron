var { app, dialog ,BrowserWindow} = require('electron')
app.on('ready', () => {
    let win = new BrowserWindow({
            webPreferences: {nodeIntegration: true, contextIsolation:false}
    })
    win.loadFile('index.html')
    dialog.showOpenDialog(win,{
        title:'open file',
        buttonLabel: 'chon file'
    })
    .then(result=>{
        win.webContents.send('data',result)
})
    .catch(()=>{
        console.log('error')
    })
})