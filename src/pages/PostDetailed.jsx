import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate, useParams } from 'react-router-dom'
import Comment from '../components/Posts/Comment'
import Button from '../components/UI/Button'
import Loader from '../components/UI/Loader'
import { fetchPostById, fetchPostCommentsById } from '../store/slices/actionCreators'

export default function PostDetailed() {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchPostById(params.id))
        dispatch(fetchPostCommentsById(params.id))
    }, [dispatch, params.id])
    
    const postComments = posts.postComments.map(comment => {
        return (
            <Comment comment={comment} key={comment.id}/>
        )
    })

  return (
    <div>
        <Button onClick={() => navigate('/posts')}>Назад</Button>
        {posts.isLoading ? <Loader/> 
        :
        <>
            <p>Post:</p>
            <div className='post__content'>
            <strong>{posts.singlePost.id}: {posts.singlePost.title}</strong>
            <div>
                {posts.singlePost.body}
            </div>
            </div>
            <div className='comments'>
                <h2>Comments:</h2>
                {postComments}
            </div>
        </>
        }
    </div>
  )
}
