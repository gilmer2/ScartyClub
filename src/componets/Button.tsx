interface ButtonProps {
    text: string;
    onClick: () => void;
    color: string;
    type: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    color,
    type,
}) => {
    return (
        <button style={{background: color}} onClick={onClick} className="button" type={type}>{text}</button>
    );
}