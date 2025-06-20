
import { alertToast } from '@/utilities/SweetAlert'

function isEmpty(value: any): boolean {
  return value === 0 || value === null || value === undefined ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0)
}
const isNull    = (value: any) => value === null
const isArray   = (value: any) => Array.isArray(value)
const isNumber  = (value: any) => typeof value === "number" && !isNaN(value)
const isBoolean = (value: any) => typeof value === "boolean"


export {
  isEmpty, isNull, isArray, isNumber, isBoolean,
  // SweetAlert2
  alertToast
}
