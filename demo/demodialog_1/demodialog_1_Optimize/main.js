const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const fs = require('fs');
let win;
function createWindow() {
    // Create the Electron window
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true, contextIsolation: false }
    });
    // Load the HTML file into the window
    win.loadFile('index.html');
    // Show the file dialog to select images
    dialog.showOpenDialog(win, {
        title: "Custom title bar",
        buttonLabel: "Custom button",
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
            { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
            { name: 'Custom File Type', extensions: ['as'] },
            { name: 'All Files', extensions: ['*'] }
        ],
        properties: ['openFile', 'multiSelections']
    })
    .then(result => {
        // Process selected image paths
        const imagePaths = result.filePaths;
        const imageDataPromises = imagePaths.map(readImageFile);
        // Wait for all image data promises to resolve
        Promise.all(imageDataPromises)
            .then(imageDataArray => {
                // Send the image data to the renderer process
                win.webContents.send('data', imageDataArray);
            })
            .catch(error => {
                console.error(error);
            });
    })
    .catch(error => {
        console.error(error);
    });
}
// Function to read image file and convert to Base64
function readImageFile(filePath) {
    return new Promise((resolve, reject) => {
        // Create a read stream for the image file
        const readStream = fs.createReadStream(filePath, { encoding: 'base64' });
        let base64Data = '';
        // Event: data is read in chunks
        readStream.on('data', chunk => {
            base64Data += chunk;
        });
        // Event: end of file reading
        readStream.on('end', () => {
            // Construct the Base64-encoded image source
            const imageSrc = `data:image/png;base64,${base64Data}`;
            resolve(imageSrc);
        });
        // Event: error during file reading
        readStream.on('error', error => {
            reject(error);
        });
    });
}
// Event: Electron app is ready
app.on('ready', createWindow);
// Event: IPC message from renderer process
ipcMain.on('data', (event, result) => {
    // Send the image data to the renderer process
    win.webContents.send('data', result);
});