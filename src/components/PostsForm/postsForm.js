import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'

export default function (props) {
    const [posts, setPosts] = useState([]);

    const history = useHistory()
    const id = props.match.params.id
    if(id) {
        useEffect(() => {
            axios.get(`/posts/${id}/`).then((res) => {
                const posts = res.data;
                setPosts(posts)
            })
        }, [])
    }
    
    function handleChange (event) {
        setPosts({ text: event.target.value, upvote: 0 })
    }

    function handleChangeUpdate (event) {
        setPosts({ text: event.target.value, upvote: 0 })
    }

    function handleSubmit (event) {
        event.preventDefault();

        axios.post(`/posts`, { text: posts.text,
            upvote: posts.upvote })
        .then(res => {
            res.data.id ? history.push('/') 
                : alert("Ops, algo deu errado! :(")
        })
    }

    function handleSubmitUpdate (event) {
        event.preventDefault();

        axios.patch(`/posts/editar/${id}/`, { text: posts.text,
            upvote: 0 })
        .then(res => {
            history.push('/') 
        })
    }
    if(id){
        return(
            <div className='inputTxt'>
                <form onSubmit={handleSubmitUpdate}>
                    <label>
                        <textarea className='input' type='text' name='text' onChange={handleChangeUpdate} 
                        value={posts.text} maxLength='250' />
                    </label>
                    <button className='btn' type='submit'>Publicar</button>
                </form>
            </div>
        )
    }else {
        return(
            <div className='inputTxt'>
                <form onSubmit={handleSubmit}>
                    <label>
                        <textarea className='input' type='text' name='text' onChange={handleChange} maxLength='250'/>
                    </label>
                    <button className='btn' type='submit'>Publicar</button>
                </form>
            </div>
        )

    }
}