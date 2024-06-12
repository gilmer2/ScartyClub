interface InputProps {
    type: string;
    placeholder: string;
}
export const Input: React.FC<InputProps> = ({ placeholder, type}) => {
    return (
        <input type={type} placeholder={placeholder} />
    )
};