import './basicbutton.css'

interface BasicButtonProps {
    text: string
    onClick: () => void
}

export const BasicButton = (props: BasicButtonProps) => {
    const { text, onClick } = props
    return (
        <button className="basicbutton" onClick={onClick}>
            {text}
        </button>
    )
}
