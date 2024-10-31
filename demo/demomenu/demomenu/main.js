const { app, BrowserWindow, Menu, shell } = require('electron');
let mymenu = [
    {
        label: '&Edit', submenu: [
            { role: 'copy' },
            { role: 'paste' }
        ]
    },
    {
        label: '&Demo', submenu: [
            {
                label: 'submenu1', click() {
                    shell.openExternal('C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE')
                }
            },
            {
                label: 'submenu2', click() {
                    shell.openExternal('C:/Program Files/Microsoft Office/root/Office16/EXCEL.EXE')
                }
            },
        ]
    },
    {
        label: '&Help', submenu: [
            {
                label: 'gioithieu', click: () => {
                    win.webContents.send('gioithieu')
                }
            }
        ]
    },
    {
        label: '&Window', submenu: [
            { label: 'help' }
        ]
    }
]
let win = null
function createWindow() {
    win = new BrowserWindow({
        webPreferences: { nodeIntegration: true, contextIsolation: false }
    });
    win.loadFile('index.html');
    let mymenu1 = Menu.buildFromTemplate(mymenu);
    Menu.setApplicationMenu(mymenu1);
}
app.on('ready', createWindow);