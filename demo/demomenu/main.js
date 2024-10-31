var { app, BrowserWindow,  Menu ,nativeImage}= require('electron');
var hinh1 =nativeImage.createFromPath('myapp.png').resize({ width: 64, height: 64 })
var hinh2=nativeImage.createFromPath('menu.png').resize({ width: 64, height: 64 })
function createWindow() {
     let win=new BrowserWindow();
    var menu=Menu.buildFromTemplate([
        {
            label:'the first menu',
            submenu:[
                {
                label:'Foo Bar', accelerator:'Ctrl+Shift+A',
                icon:hinh1,
            click:()=>{
                    console.log('hello');
                }
            },
                {type:'separator'},
                {
                type:'checkbox', 
                icon: hinh2,
                label:'Baz',
                checked:true, accelerator:'Ctrl+Shift+B',
                click:(menuItem)=>{
if(menuItem.checked==true){
console.log('hello');
}else{
    console.log('goodbye');
}
}
}
            ]
        },
            {        label:'the second menu',
              submenu: [{ role: 'copy' }, { role: 'paste' }, { role: 'cut' }]
    }
    ])
    Menu.setApplicationMenu(menu)
}
app.on('ready', createWindow);