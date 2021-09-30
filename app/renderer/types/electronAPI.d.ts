interface IElectronAPI {
  openExternal: (url: string) => void,
  printPdfWithPageUrl: () => void
}

interface Window {
  electronAPI: IElectronAPI
}