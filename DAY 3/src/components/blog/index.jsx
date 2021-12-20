import React from 'react'
import HeadingSection from '../heading-section'
import BlogPost from './blogPost'
import './style.scss'

export default function Blog() {
    return (
        <section className="section-blog blog">
            <HeadingSection heading="Read our Blog posts">Go to Blog</HeadingSection>

            <div className="container">
                <BlogPost type = "medium" urlBlog = "#" titleBlog = "Our chef tips for a great and tasty dinner ready in 20 minutes" authorName = "Author" date = "17. 6. 2020" tag = "Dinner tips"/>
            </div>
        </section>
    )
}
