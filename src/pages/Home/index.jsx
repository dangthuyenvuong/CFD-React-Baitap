import Button from 'components/Button'
import { useEffect } from 'react'
import Flickity from 'react-flickity-component'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react/cjs/react.development'
import { Section1 } from './components/Section1'

const Home = () => {
    const [posts, setPosts] = useState()
    const dispatch = useDispatch()
    const { count } = useSelector(store => store.count)

    useEffect(() => {
        const id = Math.random()
        fetch('https://61cedbf665c32600170c7dd9.mockapi.io/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                "title": `title ${id}`,
                "content": `content ${id}`,
                "short_description": `Short Description ${id}`,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => { })
    }, [])


    return (
        <div>
            <Flickity
                options={{
                    pageDots: false
                }}
            >
                <img src="https://picsum.photos/seed/picsum/400/400" alt="" />
                <img src="https://picsum.photos/seed/picsum/400/401" alt="" />
                <img src="https://picsum.photos/seed/picsum/400/402" alt="" />
                <img src="https://picsum.photos/seed/picsum/400/403" alt="" />
            </Flickity>
            Count : {count} <br />
            <Button onClick={() => dispatch({ type: 'COUNT' })}>Count +</Button>
            <div style={{ height: '100vh' }}></div>
            <Section1 />
            <div style={{ height: '100vh' }}></div>
        </div>
    )
}

export default Home