import { app, BrowserWindow, ipcMain } from "electron";

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////////Theme functions////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

const changeTheme = async (command: string) => {
  const selectedTheme = await toggleTheme();
  const windows = getAllBrowserwindows();

  for (let i = 0; i < windows.length; i++) {
    windows[i].webContents.send("fromMain", {
      command: command,
      args: selectedTheme,
    });
  }
};

const getAllBrowserwindows = () => {
  return BrowserWindow.getAllWindows().filter((b) => {
    return b.isVisible();
  });
};

const toggleTheme = () => {
  checkTheme(store.get("theme")) == "light"
    ? store.set("theme", "dark")
    : store.set("theme", "light");
  return store.get("theme");
};

const loadTheme = (sender: BrowserWindow) => {
  const theme = checkTheme(store.get("theme"));
  sender?.webContents.on("did-finish-load", () => {
    sender?.webContents.send("fromMain", {
      command: "changeTheme",
      args: theme,
    });
  });
};

const checkTheme = (theme: any) => {
  theme == undefined ? store.set("theme", "light") : null;
  return store.get("theme");
};

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
