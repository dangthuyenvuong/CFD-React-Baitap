import Flickity from 'react-flickity-component'

const Home = () => {
    return (
        <div>
            <Flickity
                options={{
                    pageDots: false
                }}
            >
                <img src="https://picsum.photos/seed/picsum/400/400" alt=""/>
                <img src="https://picsum.photos/seed/picsum/400/401" alt=""/>
                <img src="https://picsum.photos/seed/picsum/400/402" alt=""/>
                <img src="https://picsum.photos/seed/picsum/400/403" alt=""/>
            </Flickity>
        </div>
    )
}

export default Home