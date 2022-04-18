const { app, BrowserWindow } = require('electron');
const path = require('path');
require("@electron/remote/main").initialize();

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    //icon: path.join(__dirname +'./images/logo.png'),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: false
    }
  })

  const localURL = 'http://localhost:4000';
  const deployURL = 'https://elecadmin.netlify.app';
  //load the index.html from a url
  win.loadURL(deployURL);

  // Open the DevTools.
  win.webContents.openDevTools()
  //set Icon
  //win.setIcon(path.join(__dirname, './public/images/logo.png'));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.