import HeaderMain from './headermain'
import HeaderTop from './headertop'
import './style.scss'

export default function Header() {
    return (
        <header>
        <div className='container'>
            <HeaderTop />
            <HeaderMain />
        </div>
        </header>
    )
}
