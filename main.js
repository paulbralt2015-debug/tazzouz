const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1200, height: 760, minWidth: 640, minHeight: 480,
    autoHideMenuBar: true, backgroundColor: '#14151b',
    webPreferences: { contextIsolation: true }
  });
  win.loadFile('index.html');
});

app.on('window-all-closed', () => app.quit());
