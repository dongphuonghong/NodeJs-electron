'use strict'
var {dialog,app, BrowserWindow}=require('electron')
app.whenReady().then(()=>{
  var win=new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{nodeIntegration:true,contextIsolation:false,resizable: false}
  })
  win.loadFile('index.html');
})