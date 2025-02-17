const { app, BrowserWindow, nativeTheme } = require('electron')


// Janela Principal
let win
const createWindow = () => {
    // Tema claro ou escuro
    nativeTheme.themeSource = 'dark'
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    // esconde menu
    // autoHideMenuBar: true,
    // Minimizar
    minimizable: false,
    // Recimentionar
    resizable: false
  })

  win.loadFile('./src/views/index.html')
}

// Iniciar a aplicação 
app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })