import ReactDOM from 'react-dom'

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        children,
        document.body // Nơi Element sẽ được append
    )
}