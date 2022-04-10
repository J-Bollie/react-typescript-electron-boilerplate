import { app, BrowserWindow, ipcMain } from "electron";
import { createMainWindow } from "@/browserWindows";

import Store from "electron-store";
const store = new Store();

declare global {
  namespace NodeJS {
    interface Global {
      mainWindow: BrowserWindow | null;
    }
  }
}

const createWindow = () => {
  global.mainWindow = createMainWindow();
  loadTheme(global.mainWindow);
};

app.on("ready", createWindow);
