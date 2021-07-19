/*
 * @Author: HasebeAya
 * @Date: 2021-07-19 09:00:02
 * @Description: 文件操作
 * @LastEditors: HasebeAya
 * @LastEditTime: 2021-07-19 10:36:47
 */

import { constants, promises as fsPromiseAPIs } from 'fs'

const { F_OK, R_OK, W_OK } = constants

class FileAction {

  read (path: string, encoding : BufferEncoding = 'utf-8'): Promise<string> {
    return fsPromiseAPIs.readFile(path, { encoding })
  }

  write (path: string, content: string, encoding: BufferEncoding = 'utf-8'): Promise<void> {
    return fsPromiseAPIs.writeFile(path, content, { encoding })
  }

  rename (oldPath: string, newPath: string) {
    return fsPromiseAPIs.rename(oldPath, newPath)
  }

  delete (path: string): Promise<void> {
    return fsPromiseAPIs.unlink(path)
  }

  append (path: string, data: string, encoding: BufferEncoding = 'utf-8'): Promise<void> {
    return fsPromiseAPIs.appendFile(path, data, encoding)
  }

  hasFile (path: string): Promise<void> {
    return fsPromiseAPIs.access(path, F_OK)
  }

  canWrite (path: string): Promise<void> {
    return fsPromiseAPIs.access(path, R_OK)
  }

  canRead (path: string): Promise<void> {
    return fsPromiseAPIs.access(path, W_OK)
  }

}

export default new FileAction ()
