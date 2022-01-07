import { BrowserWindow } from "electron";
import { isDev } from "@/utils";
import path from "path";

export const createMainWindow = () => {
  const window = new BrowserWindow({
    width: 1300,
    minWidth: 1350,
    height: 750,
    minHeight: 800,
    show: false,
    // frame: false,
    // transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, "preload.bundle.js"),
    },
  });

  window.menuBarVisible = false;

  window
    .loadURL(
      isDev() ? `http://localhost:9000/` : `file://${__dirname}/index.html#/`
    )
    .then(() => {
      window.show();
    })
    .catch((err: string) => {
      console.log(err);
    });

  return window;
};
