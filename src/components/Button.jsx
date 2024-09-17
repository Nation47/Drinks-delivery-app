const Button = ({color, text}) => {
    return (
        <>
            <button style={{backgroundColor: color}} className="text-white py-2 px-4 rounded-md">{text}</button>
        </>
    );
}
 
export default Button;