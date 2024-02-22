import './basicbutton.css'

interface BasicButtonProps {
    text: string
    onClick: () => void
}

export const Basic = (props: BasicButtonProps) => {
    const { text, onClick } = props
    return (
        <button className="basicbutton" onClick={onClick}>
            {text}
        </button>
    )
}
