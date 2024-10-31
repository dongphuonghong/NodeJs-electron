const {dialog,app ,BrowserWindow }=require('electron')
app.whenReady().then(() => {
    dialog.showMessageBox(null,{
        type:'warning',
        title:'lầm delete data',
        message:'lỗi lầm của em',
        detail:'lỗi lầm của em',
    buttons:['&đồng ý','&hủy bỏ','&thử lại','&có','&không'],    
        checkboxLabel:'bạn có mukốn lư  thông tin không',
     checkboxChecked:true,
     noLink:true,
     normalizeAccessKeys:true
})    
.then(result=>{
    if(result.response==0){
        document.write('bam nut đồng ý');
}else if(result.response==1){
    document.write('bam nut hủy bỏ');
}else if(result.response==2){
    document.write('bam nut RETRY');
}else if(result.response==3){
    document.write('bam nut có');
}else if(result.response==4){
    document.write('bam nut không');
}
    if(result.checkboxChecked==true){
    document.write('luu thong tin');
}else{
    document.write('khong luu thong tin');
}
})
.catch(()=>{
    console.log('lỗi');
})k
})