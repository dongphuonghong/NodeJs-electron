var {dialog,app}=require('electron')
app.whenReady().then(async()=>{
    try{
        var result =await
        dialog.showMessageBox(null,{
            type:'warning',
            title:'lầm delete data',
            message:'lỗi lầm của em',
            detail:'lỗi lầm của em',
            buttons: ['ok', 'cancel', 'retry', 'yes', 'no'],
                        checkboxLabel: 'bạn có muốn lưu thông tin không',
            checkboxChecked: true
    })
    var {response,checkboxChecked}=result;
    switch (response) {
        case 0:
            console.log('nhan ok');
            break;
            case 1:
                console.log('ban nhan cancel');
                break;
            case 2:
                console.log('ban nhan retry');
                break;
            case 3:
                console.log('ban nhan yes');
                break;
            case 4:
                console.log(' ban nhan no');
                break;
}
if(result.checkboxChecked==true){
    console.log('da lu thong tin');
}
else{
    console.log('khong lu thong tin');
}
    }
    catch(err){
        console.log(err);
    }
})
