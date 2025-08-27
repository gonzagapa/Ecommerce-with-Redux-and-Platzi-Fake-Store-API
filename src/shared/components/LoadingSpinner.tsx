
type Props = {
    size:string,
    color: string,
    thickness:string,
}
//<LoadingSpinner size="w-6 h-6"color="border-white" thickness="border-4"/>
export function LoadingSpinner({color,size,thickness}:Props) {
  return (
    <div
    className={`${size} rounded-full animate-spin
                  ${thickness} border-solid ${color} border-t-transparent`}
    ></div>
  )
}
