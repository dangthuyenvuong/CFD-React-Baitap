import React from 'react'
import { CustomerQuotes , BestSelling , CategoryMenu, ProductList , BlogPosts} from './components';
export default function HomePage() {
    const list1 = [
        {
            content: 'Bakery',
            link: ''
        },
        {
            content: 'Fruit and vegetables',
            link: ''
        },
        {
            content: 'Meat and fish',
            link: ''
        },
        {
            content: 'Drinks',
            link: ''
        },
        {
            content: 'Kitchen',
            link: ''
        }
    ]
    const list2 = [
        {
            content: 'Kitchen',
            link: ''
        },
        {
            content: 'Meat and fist',
            link: ''
        },
        {
            content: 'Special nutrition',
            link: ''
        },
        {
            content: 'Pharmacy',
            link: ''
        },
        {
            content: 'Baby',
            link: ''
        }
    ]
    const list3 = [
        {
            content: 'Carrots',
            link: ''
        },
        {
            content: 'Tomatoes',
            link: ''
        },
        {
            content: 'Potatoes',
            link: ''
        },
        {
            content: 'Chicken',
            link: ''
        },
        {
            content: 'Pork',
            link: ''
        }
    ]
    return (
        <div className='home'>
            <CategoryMenu list={list1}/>
            <BestSelling list={list2} />
            <BestSelling list={list3} title = 'Best from Framers' />
            <CustomerQuotes />
            <ProductList />
            <BlogPosts />
            
        </div>
    )
}
