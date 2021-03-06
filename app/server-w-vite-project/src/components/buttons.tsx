import React, { PropsWithChildren } from "react";

interface typeProps {
    onClick: () => void,
    children: string
}
;


const Button = ({children, onClick} : typeProps) => {
    return (
        <button onClick={() => {onClick()}}>
            {children}
        </button>
    )

}

export default Button;