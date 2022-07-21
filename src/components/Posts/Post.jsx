import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { deletePost } from '../../store/slices/postsSlice'
import Button from '../UI/Button'

export default function Post({post}) {

  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  function deletePostById() {
    dispatch(deletePost(post.id))
  }

  return (
    <div className='post'>
        <div className='post__content'>
          <strong>{post.id}: {post.title}</strong>
          <div>
            {post.body}
          </div>
        </div>
        <Button onClick={() => navigate(`${post.id}`)}>Открыть</Button>
        <Button onClick={deletePostById}>Удалить</Button>
    </div>
  )
}
