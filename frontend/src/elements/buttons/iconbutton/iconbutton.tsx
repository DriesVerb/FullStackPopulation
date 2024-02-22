import './iconbutton.css'

interface IconButtonProps {
    icon: string
    onClick: (() => void) | (() => Promise<void>)
}

export const Icon = (props: IconButtonProps) => {
    const { icon, onClick } = props

    return (
        <button className="iconbutton" onClick={onClick}>
            {icon}
        </button>
    )
}
