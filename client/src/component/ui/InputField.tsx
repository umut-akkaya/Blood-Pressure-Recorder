interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm font-medium">{label}</label>}
            <input
                className="w-full transition duration-150 ease-in-out rounded-md outline-0 p-2 mb-8 border border-[#ced4da] focus:border-[#00b6fd] focus:shadow-custom"
                {...props}
            />
        </div>
    );
};

export default Input;
