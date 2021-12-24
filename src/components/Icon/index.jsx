import './style.scss'
import iconArrowLeft from '../../assets/img/icon-arrow-left.svg'

export const IconArrowLeft = () => {
    return <i><img src={iconArrowLeft}/></i>
}

export const IconLoading = () => {
    return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
}