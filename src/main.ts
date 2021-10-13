import { app, BrowserWindow, ipcMain } from 'electron';
const path = require('path');

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, "preload.bundle.js")
    }
  });

  win.loadURL(isDev() ? `http://localhost:9000/` : `file://${__dirname}/index.html`).then(() => {
    win.show();
  }).catch((err: string) => {
    console.log(err);
  });

  function isDev() {
    return process.argv[2] == '--dev';
  }
}

ipcMain.on("test", (e, args) => {
  app.quit();
})

app.on('ready', createWindow);