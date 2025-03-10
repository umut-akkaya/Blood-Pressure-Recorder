import React from "react";

interface Props {
    children?: React.ReactNode;
}

const Header: React.FC<Props> = ({children}) => {
    return (
        <header className="w-full fixed top-0 z-10 left-0 bg-blue-200 py-2">
            {children}
        </header>
    )
}
export default Header