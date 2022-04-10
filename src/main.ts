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

ipcMain.on("toMain", async (e, args) => {
  const command = args[0].command;
  const sender = BrowserWindow.fromWebContents(e.sender);

  switch (command) {
    case "minimize":
      sender?.isMinimized() ? null : sender?.minimize();
      break;
    case "maximize":
      sender?.isMaximized() ? sender?.unmaximize() : sender?.maximize();
      sender?.isMaximized()
        ? sender?.setMovable(false)
        : sender?.setMovable(true);
      break;
    case "close":
      app.quit();
      break;
    case "loadTheme":
      break;
    case "changeTheme":
      await changeTheme(command);
      break;
  }
});

app.on("ready", createWindow);
