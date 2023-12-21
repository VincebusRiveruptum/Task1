const Button = ({text, onClick, type}) => {
    return(        
        <div class="container">
            <button type={type} onClick={onClick} >
                {text}
            </button>
        </div>
    )
}

export default Button;