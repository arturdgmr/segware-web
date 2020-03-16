import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../styles.scss'

import Button from '../Button/button'
import UpVote from '../UpVote/upVote'

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/posts').then((res) => {
            const posts = res.data;
            setPosts(posts)
        })
    }, [])

    
    return(
        <ul>
            {posts.map(
                (post) => 
                <div className='divList' key={(post.id)}>
                    <p>
                        {post.text}
                    </p>
                    <div className='divBtnLists'>
                        <UpVote count={(post.upvote)} id={(post.id)} />
                        <Button id={(post.id)} type='edit' clName='btn' icon='far fa-edit' url={(`/${post.id}/editar`)} />
                        <Button id={(post.id)} type='delete' clName='btn' icon='far fa-trash-alt'/>
                    </div>
                </div>
                
            )}
        </ul>
    )
}