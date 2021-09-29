import { app, BrowserWindow } from 'electron';

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL(`file://${app.getAppPath()}/index.html`);
}

app.on('ready', createWindow);