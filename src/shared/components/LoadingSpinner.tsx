
type Props = {
    size:string,
    color: string,
    thickness:string,
}

export function LoadingSpinner({color,size,thickness}:Props) {
  return (
    <div
    className={`${size} rounded-full animate-spin
                  ${thickness} border-solid ${color} border-t-transparent`}
    ></div>
  )
}
