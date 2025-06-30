import { EventHandler } from '@create-figma-plugin/utilities'

export interface BuildHandler extends EventHandler {
  name: 'BUILD'
  handler: (data: ComponentProperties) => void
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}

export interface ComponentProperty {
  name: string
  value: string | boolean
  visible: boolean
  isProperty: boolean
  variants?: string[]
}

export interface ComponentProperties {
  [key: string]: ComponentProperty
}

export interface ComponentDataMap {
  [componentName: string]: ComponentProperties
}
