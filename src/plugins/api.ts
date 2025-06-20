
import axios from 'axios'
import { alertToast } from '@/utilities/SweetAlert'

type ResponseType = 'json' | 'text' | 'stream' | 'blob' | 'arraybuffer';

// --- --- --- Variables --- --- ---
const BASE_URL_CONFIG = {
  PROTOCOL: 'https://' as string,
  URL:      'jsonplaceholder.typicode.com' as string,
  PORT:     '/' as string,
  TOKEN_REQUIRED: true as boolean,
}
const BASE_HEADERS_CONFIG = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
}

// --- --- --- Funciones Api --- --- ---
const ApiGet = async(
  ROUTE_API: string, DATA_API: object,
  BASE_URL = BASE_URL_CONFIG, BASE_HEADERS = BASE_HEADERS_CONFIG,
  RESPONSE_TYPE: ResponseType = 'json'
) => {
  let oResultApi = {} as any
  // Config Api
  const oHeaders = getHeaders(BASE_HEADERS) // Generar Headers
  axios.defaults.baseURL = getBaseUrl(BASE_URL) // Generar Base URL

  try{
    oResultApi = await axios.get(ROUTE_API, {
      headers: oHeaders,
      params: DATA_API,
      responseType: RESPONSE_TYPE,
    })
  }catch( error: any ){
    oResultApi = error
    alertToast({
      title: '' as string,
      icon: 'warning',
      text: '¡Ups! Algo salió mal. Si el problema continúa, comunícate con nuestro equipo de soporte.',
      timer: 9500 as number,
      position: 'top-end',
    })
  }

  return oResultApi
}

const ApiPut = async (
  ROUTE_API: string, DATA_API: object,
  BASE_URL = BASE_URL_CONFIG, BASE_HEADERS = BASE_HEADERS_CONFIG,
) => {

  const oHeaders = getHeaders(BASE_HEADERS) // Generar Headers
  axios.defaults.baseURL = getBaseUrl(BASE_URL) // Generar Base URL

  let oResultApi = {}
  try{

    if( oHeaders['Content-Type'] == 'multipart/form-data' ) DATA_API = getContentTypeFormData(DATA_API)
    oResultApi = await axios.put(ROUTE_API, DATA_API, {
      headers: oHeaders
    })

  }catch(error: any){
    oResultApi = error
    alertToast({
      title: '' as string,
      icon: 'warning',
      text: '¡Ups! Algo salió mal. Si el problema continúa, comunícate con nuestro equipo de soporte.',
      timer: 9500 as number,
      position: 'top-end',
    })
  }
  return oResultApi
}


export { ApiGet, ApiPut, BASE_URL_CONFIG }







// --- --- --- Funciones Locales --- --- ---
// Generar la Url Api
function getBaseUrl(BASE_URL = {} as any) {
  let sBaseUrl = '' as string
  BASE_URL = { ...BASE_URL_CONFIG, ...BASE_URL }
  sBaseUrl += BASE_URL.PROTOCOL
  sBaseUrl += BASE_URL.URL
  sBaseUrl += BASE_URL.PORT
  return sBaseUrl
}

// Obtener los header para el Api
function getHeaders( BASE_HEADERS = {} ){
  return { ...BASE_HEADERS_CONFIG, ...BASE_HEADERS }
}

// Formulario
function getContentTypeFormData(DATA_API = {} as any) {
  console.log('DATA_API', DATA_API)
  // const formData = new FormData()
  const formData = new FormData()
  for( const key in DATA_API ) formData.append(key, DATA_API[key])

  return formData
}
