export interface CssValidator {
  validity: boolean
  errors: Error[]
  warnings: Warning[]
}

export interface Error {
  line: string
  errortype: string
  context: string
  errorsubtype: string
  skippedstring: string
  type: string
  message: string
  error: string
}

export interface Warning {
  line: string
  level: string
  message: string
  type: string
  warning: string
}
