import React, {useState} from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { useDispatch } from 'react-redux/es/exports'
import { createPost } from '../../store/slices/postsSlice'

export default function CreatePost({setModal}) {

    const dispatch = useDispatch()
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')

    function createNewPost(e) {
        e.preventDefault()
        setModal(false)
        dispatch(createPost({title: postTitle, body: postBody}))
    }

  return (
    <div>
        <form>
            <Input value={postTitle} type='text' placeholder='Название поста' onChange={e => setPostTitle(e.target.value)}/>
            <Input value={postBody} type='text' placeholder='Описание поста' onChange={e => setPostBody(e.target.value)}/>
            <Button onClick={createNewPost}>Создать пост</Button>
        </form>
    </div>
  )
}
