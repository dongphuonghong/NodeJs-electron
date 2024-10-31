const {app,BrowserWindow,ipcMain}=require('electron')
let     win;
function createWindow() {
win = new BrowserWindow({
  webPreferences: { nodeIntegration: true, contextIsolation: false ,  }
})
win.loadFile('index.html')   
}
app.on('ready',createWindow)
ipcMain.on('save_game',()=>{
dialog.showSaveDialog(win,{
        title: 'save game đang chơi', defaultPath: 'd:\\', 
      buttonLabel: '&Save game',
    noLink:true,
    normalizeAccessKeys:true
      })
})
.then(result=>{
  fs.writeFile(result.filePath,'level3',()=>{
    if(Error)
    return console.log('err no file')
  console.log('save game')
  })
ipcMain.on('nhapgame',()=>{
dialog.showOpenDialog(win,{
      title: 'chọn file game', defaultPath: 'd:\\',
      buttonLabel: '&Load game',
      noLink:true,
      normalizeAccessKeys:true
    })
        fs.readFile(result.filePaths[0],      'utf-8',      (err, datagame) =>{
      if(err)
      return console.log('err no file')
    console.log(  'Noi dung game' ,datagame)
            win.webContents.send('noidunggame', datagame) 
    })
  })
})