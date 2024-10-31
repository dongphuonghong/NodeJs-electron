const {app, BrowserWindow} = require('electron')  
let window = null 
app.once('ready', () => { 
  window = new BrowserWindow({ 
    show: false, 
  }) 
  const url = process.argv[2] 
  window.loadURL(url) 
  window.once('ready-to-show', () => {   
      window.maximize() 
    window.show() 
  })
})