import React from 'react'
import { Post } from '../../../components'
export function BlogPosts() {
    return (
        <section className='blogPosts'>
            <div className="container">
                <div className="title">
                    <h2>Read our Blog posts</h2>
                </div>
                <div className="posts">
                    <div className="posts_item">
                        <Post size='large' topic='Dinner' avt='imgs/avt4.png'>
                            Our chef tips for a great and tasty dinner ready in 20 minutes
                        </Post>
                    </div>
                    <div className="posts_item">
                        <Post size='middle' topic='Dinner' avt='imgs/avt4.png'>
                            Which vegetable your family will love and want’s eat each day
                        </Post>
                    </div>
                    <div className="posts_item">
                        <Post size='small' avt='imgs/avt4.png'>
                            Salat is kinda good start to your morning routines
                        </Post>
                        <Post size='small' avt='imgs/avt4.png'>
                            Salat is kinda good start to your morning routines
                        </Post>
                        <Post size='small' avt='imgs/avt4.png'>
                            Salat is kinda good start to your morning routines
                        </Post>
                    </div>
                </div>
            </div>
        </section>
    )
}