import React from 'react'
import urlBlogImg from '../../assets/img/blogPost-img.jpg'
import urlAuthorImg from '../../assets/img/quote-avt.jpg'
import './style.scss'

export default function BlogPost({type = "small", urlBlog = "#", titleBlog, authorName, date, tag}) {
    return (
        <div className={`blog-post --${type}`}>
            <a href={urlBlog}>
                <div className="blog-post__image">
                    <img src={urlBlogImg} alt="" />
                </div>
                <div className="blog-post__content">
                    <h3 className="blog-post__title heading --h3">{titleBlog}</h3>
                    <div className="blog-post__info">
                        <div className="author">
                            <img className="author__avt" src={urlAuthorImg} alt="" />
                            <p className="author__name">{authorName}</p>
                        </div>
                        <p className="date">{date}</p>
                    </div>
                </div>
                <div className="blog-post__tag">{tag}</div>
            </a>
        </div>
    )
}
