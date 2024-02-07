import './iconbutton.css'

interface IconButtonProps {
  icon: string
  onClick: () => void
}

export const IconButton = (props: IconButtonProps) => {
  const { icon, onClick } = props

  return (
    <button className="iconbutton" onClick={onClick}>
      {icon}
    </button>
  )
}
