const lookupArray: any = {}
lookupArray['required'] = 'This field is required'

export function convertErrorToText(formError: any) {
  const errorType = Object.keys(formError)[0]
  return lookupArray[errorType] ?? 'Generic Error'
}
