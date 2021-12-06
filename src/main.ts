import { app, BrowserWindow, ipcMain } from "electron";
import { createMainWindow } from "@/browserWindows";

declare global {
  namespace NodeJS {
    interface Global {
      mainWindow: BrowserWindow | null;
    }
  }
}

const createWindow = () => {
  global.mainWindow = createMainWindow();
};

ipcMain.on("test", (e, args) => {
  const sender = BrowserWindow.fromWebContents(e.sender);

  app.quit();
});

app.on("ready", createWindow);
