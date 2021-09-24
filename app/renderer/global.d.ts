// less模块声明
declare module '*.less' {
  const content: { [key: string]: any };
  export default content;
}
// 图片模块声明
declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.png' {
  const png: string;
  export default png;
}

interface Window {
  api: {
    send: (chanel: string, data: any) => void,
    receive: (chanel: string, func: (...args: Array<any>) => void) => void
  }
}