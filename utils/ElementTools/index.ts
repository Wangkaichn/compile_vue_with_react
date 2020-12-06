/*
 * @Author: your name
 * @Date: 2020-12-05 18:11:34
 * @LastEditTime: 2020-12-05 20:27:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/utils/createDomNode/index.ts
 */

export const ElementToolsInit = () => {
  document.createElement = new Proxy(document.createElement, {
    apply: function (handle, thisArg, args) {
      return handle.apply(thisArg, args)
    }
  })
}



type TypeCreate = (
  elementType: string,
  id: string
) => void

type TypeMount = (
  ReactDOM: any,
  id: string,
  mountedObject: any
) => void

interface TypeREPOS {
  ids: string[]
  nodes: Array<HTMLElement>
}

export default class ElementTools {
  static create: TypeCreate = (
    elementType,
    id
  ) => {
    try {
      const node = document.createElement(elementType)
      node.setAttribute('id', id)
      document.body.appendChild(node)
    } catch (error) {
      console.error(error)
    }
  }
  static mount: TypeMount = (ReactDOM, id, mountedObject) => {
    try {
      const node = document.getElementById(id)
      console.info('ReactDOM: ', ReactDOM, node, mountedObject)
      ReactDOM.createPortal(mountedObject, node)
    } catch (error) {
      console.error(error)
    }
  }
}
