interface ButtonProps {
    text: string;
    onClick: () => void;
    color: string;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    color,
}) => {
    return (
        <button style={{background: color}} onClick={onClick} className="button">{text}</button>
    );
}