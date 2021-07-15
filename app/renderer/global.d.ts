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