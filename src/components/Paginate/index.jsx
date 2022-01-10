import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { urlQueryToObject, objectToUrlQuery } from "utils/urlQueryToObject"
import './style.scss'


const Paginate = ({ totalPage }) => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const query = urlQueryToObject({ page: '1' })

    query.page = parseInt(query.page)
    const renderItem = () => {
        let list = []
        let start = parseInt(query.page) - 2
        let end = parseInt(query.page) + 2

        for (let i = start; i <= end; i++) {
            list.push(<Link
                to={`${pathname}?${objectToUrlQuery({ page: i })}`}
            >{i}</Link>)
        }
        return list
    }
    console.log(query.page)
    return (
        <div className="Paginate">
            {
                parseInt(query.page) - 2 > 1 &&  <Link to={`${pathname}?${objectToUrlQuery({ page: query.page - 1 })}`}>{'<'}</Link>
            }
           
            {renderItem()}
            {
                parseInt(query.page) + 2 < totalPage && <Link to={`${pathname}?${objectToUrlQuery({ page: query.page + 1 })}`}>{'>'}</Link>
            }

        </div>
    )
}

export default Paginate