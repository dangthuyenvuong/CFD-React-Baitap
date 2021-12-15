import ReactDOM from 'react-dom'

const ModalSearch = () => {
    return ReactDOM.createPortal(
        <div>
            Modal
        </div>,
        document.body // Nơi Element sẽ được append
    )
}

export default ModalSearch