import { BreadcrumbsItem } from 'components/Breadcrumbs'
import { Breadcrumbs } from 'components/Breadcrumbs'
import Button from 'components/Button'
import Paginate from 'components/Paginate'
import { PRODUCT_DETAIL_PATH } from 'constant/path'
import { useEffect } from 'react'
import Flickity from 'react-flickity-component'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { generatePath } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import productService from 'services/productService'
import { objectToUrlQuery } from 'utils/urlQueryToObject'
import { urlQueryToObject } from 'utils/urlQueryToObject'
import { Section1 } from './components/Section1'

console.log('Home')


const Home = () => {
    const [posts, setPosts] = useState()
    const dispatch = useDispatch()
    const { count } = useSelector(store => store.count)
    const { } = useSelector(store => store.page)
    let query = urlQueryToObject()
    query.page = query.page || 1

    const url = objectToUrlQuery(query)
    useEffect(async () => {
        const products = await productService.list('?' + url)
    }, [url])
    console.log(query)

    console.log('Home re-render')
    return (
        <div>
            {/* <Flickity
                options={{
                    pageDots: false
                }}
            >
                <img src="https://picsum.photos/seed/picsum/400/400" alt="" />
                <img src="https://picsum.photos/seed/picsum/400/401" alt="" />
                <img src="https://picsum.photos/seed/picsum/400/402" alt="" />
                <img src="https://picsum.photos/seed/picsum/400/403" alt="" />
            </Flickity> */}
            Count : {count} <br />
            <Button onClick={() => dispatch({ type: 'COUNT' })}>Count +</Button>
            {/* <div style={{ height: '100vh' }}></div> */}
            {/* <Section1 /> */}
            {/* <div style={{ height: '100vh' }}></div> */}
            <Breadcrumbs>
                <BreadcrumbsItem to="/home">Home</BreadcrumbsItem>
            </Breadcrumbs>
            {/* <Paginate totalPage={products.paginate.totalPage} /> */}
        </div>
    )
}

export default Home