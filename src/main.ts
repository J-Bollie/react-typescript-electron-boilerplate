import { app, BrowserWindow, ipcMain } from 'electron';
const path = require('path');

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, "preload.bundle.js")
    }
  });
  //win.loadURL(`http://localhost:9000/`);
  win.loadURL(`file://${__dirname}/index.html`);
}

ipcMain.on("test", (e, args) => {
  app.quit();
})

app.on('ready', createWindow);