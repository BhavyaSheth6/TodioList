import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "relative",
        top: "20vh",
        width: "100%",
        border: "2px solid green"
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; MyTodoList.com
            </p>
        </footer>

    )
}