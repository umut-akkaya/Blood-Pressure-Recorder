import React from "react";

interface Props {
    children?: React.ReactNode
}

const ContentBox:React.FC<Props> = ({ children }) => {
    return (
        <section className="w-full min-h-screen flex mt-10 ">
            {children}
        </section>
    )
}

export default ContentBox;