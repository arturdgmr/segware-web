import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Button(props) {

    const id = props.id
    const type = props.type
    const url = props.url
    const history = useHistory()

    function onClick (event) {
        if(id && type === 'edit'){
            return history.push(url)
        }else if(id && type === 'delete'){
            return axios.delete(`/posts/${id}/`).then(history.go(0))
        }
        return history.push(url) 
    }
    return(
        <div className={props.divClassName}> 
            <button type='submit' className={props.clName} onClick={onClick}>
                <i className={props.icon} />
            </button>
        </div>
    )
}

export default Button
