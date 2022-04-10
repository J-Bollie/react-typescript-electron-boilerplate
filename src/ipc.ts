import { app, BrowserWindow, ipcMain } from "electron";

import Store from "electron-store";
const store = new Store();

ipcMain.on("toMain", async (e, args) => {
	const command = args[0].command;
	const sender = BrowserWindow.fromWebContents(e.sender);

	switch (command) {
		case "minimize":
			sender?.isMinimized() ? null : sender?.minimize();
			break;
		case "maximize":
			sender?.isMaximized() ? sender?.unmaximize() : sender?.maximize();
			sender?.isMaximized() ? sender?.setMovable(false) : sender?.setMovable(true);
			break;
		case "close":
			app.quit();
			break;
		case "changeTheme":
			await changeTheme(command);
			break;
	}
});

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
	checkTheme(store.get("theme")) == "light" ? store.set("theme", "dark") : store.set("theme", "light");
	return store.get("theme");
};

export const loadTheme = (sender: BrowserWindow) => {
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
