
const Button = ({ props, label }) => {
    return(
        <>
            <button
            type ="button"
                {...props}
            >
                {label}
            </button>
        </>
    );
}

export default Button;