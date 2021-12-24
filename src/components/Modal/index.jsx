import ReactDOM from 'react-dom'

const Modal = ({ children, isOpen }) => {
    if(!isOpen) return null

    return ReactDOM.createPortal(
        children,
        document.body // Nơi Element sẽ được append
    )
}

export default Modal