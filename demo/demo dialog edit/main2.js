// Import required modules from Electron
var { dialog, app } = require('electron');
// Execute the code when the Electron app is ready
app.whenReady().then(async () => {
    try {
        // Show a warning message box with multiple buttons and a checkbox
        var result = await dialog.showMessageBox(null, {
            type: 'warning',
            title: 'Lầm delete data',
            message: 'Lỗi lầm của em',
            detail: 'Lỗi lầm của em',
            buttons: ['ok', 'cancel', 'retry', 'yes', 'no'],
            checkboxLabel: 'Bạn có muốn lưu thông tin không',
            checkboxChecked: true
        });
        // Destructure the result object to get response and checkboxChecked
        var { response, checkboxChecked } = result;
        // Handle the user's response based on the button clicked
        switch (response) {
            case 0:
                console.log('Nhấn OK');
                break;
            case 1:
                console.log('Bạn nhấn Cancel');
                break;
            case 2:
                console.log('Bạn nhấn Retry');
                break;
            case 3:
                console.log('Bạn nhấn Yes');
                break;
            case 4:
                console.log('Bạn nhấn No');
                break;
        }
        // Check if the checkbox was checked
        if (result.checkboxChecked == true) {
            console.log('Đã lưu thông tin');
        } else {
            console.log('Không lưu thông tin');
        }
    } catch (err) {
        // Handle errors
        console.log(err);
    }
});