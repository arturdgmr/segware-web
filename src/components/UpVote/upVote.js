import React, { useState }  from 'react'
import axios from 'axios';

 function UpVote(props) {
    const [countState, setCountState] = useState(props.count);

    const id = props.id


    function handleSubmit (event) {
        event.preventDefault();
        axios.patch(`/posts/${id}/`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <button type='submit' className='btn' onClick={()=> setCountState(countState+1)}>
                <i className='far fa-thumbs-up' /> {countState}
            </button>
        </form>
    )
}

export default UpVote