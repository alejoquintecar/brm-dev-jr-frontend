import Swal from 'sweetalert2'
import type { SweetAlertOptions, SweetAlertPosition, SweetAlertIcon } from 'sweetalert2'

const oConfigToast = {
  text: '' as string,
  icon: 'info' as SweetAlertIcon,
  title: '' as string,
  timer: 9500 as number,
  position: 'top-end' as SweetAlertPosition,
  iconColor: '' as string
} as SweetAlertOptions

export const alertToast = (
  oConfig = oConfigToast, status: number | null = null
) => {
  oConfig = { ...oConfigToast, ...oConfig } as any
  const toastOptions = {
    toast: true,
    timer: oConfig.timer,
    position: oConfig.position,
    icon: oConfig.icon,
    title: oConfig.title,
    text: oConfig.text,
    iconColor: oConfig.iconColor,
    showConfirmButton: false,
    timerProgressBar: true,
    showCloseButton: true,
    didOpen: (toast: any) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  } as SweetAlertOptions
}
