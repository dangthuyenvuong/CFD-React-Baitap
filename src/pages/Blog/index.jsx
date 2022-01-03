const Blog = () => {
    // const [isFetching, setIsFetching] = useState(true)
    // const [products, setProducts] = useState()
    
    // useEffect( () => {
    //     (async () => {
    //         setIsFetching(true)
    //         const res = await blogService.list()
    //         setProducts(res.data)
    //         setIsFetching(false)
    //     })()
    // }, [])


    const { data: products, isFetching: productIsFetching} = useQuery(productService.list, [])

}

export default Blog