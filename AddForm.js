import React, {useState} from 'react'

const AddForm = ({ addItem }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [allowComments, setAllowComments] = useState(false)

    const fetchValues = (e) => {
        e.preventDefault()
        // console.log({title,body,allowComments});
        addItem({ title, body, allowComments })
    }
    return (
        <div>
            <form onSubmit={fetchValues}>
                <div className="form-group">
                <label>Title</label>
                <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control" 
                type="text" 
                name="title" 
                placeholder="enter title" />
                </div>
                <div className="form-group">
                <label>Body</label>
                <input 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="form-control"
                type="text" 
                name="body" 
                placeholder="type something .." />
                </div>
                <div className="form-group">
                <label>Allow Comments </label>
                <input 
                value={allowComments}
                onChange={(e) => setAllowComments(e.currentTarget.checked)}
                className="form-control-check"
                type="checkbox" 
                name="commentAllowed" />
                </div>
                <button 
                className="btn btn-primary form-control" 
                type="submit">Share</button>
            </form>
        </div>
    )
}
export default AddForm