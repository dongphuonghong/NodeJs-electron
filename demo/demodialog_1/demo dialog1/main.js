const { dialog, app, BrowserWindow } = require('electron')
var win
function createWindow() {
    win = new BrowserWindow({
        webPreferences: { nodeIntegration: true, contextIsolation: false, }
    })
    win.loadFile('index.html')
    dialog.showOpenDialog(win, {
        title: "Custom title bar",
        buttonLabel: "Custom button",
        filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
        { name: 'Custom File Type', extensions: ['as'] },
        { name: 'All Files', extensions: ['*'] }
        ], properties: ['openFile', 'multiSelections']
    })
        .then(result => {
            win.webContents.send('data', result.filePaths)
        })
        .catch(() => {
            console.log('error')
        })
}
app.on('ready', createWindow);