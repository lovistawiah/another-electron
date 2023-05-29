require("update-electron-app")()
const { app, BrowserWindow, ipcMain } = require('electron')
if (require("electron-squirrel-startup")) app.quit()
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    ipcMain.handle('ping', () => 'pong')
    win.loadFile('index.html')
}
app.whenReady().then(createWindow)