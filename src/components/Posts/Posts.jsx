import React, { useEffect, useRef, useState } from 'react'
import CreatePost from './CreatePost'
import FilterPosts from './FilterPosts'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import PostsList from './PostsList'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchAllPosts } from '../../store/slices/actionCreators'
import Loader from '../UI/Loader'
import ChangePages from '../UI/ChangePages'
import { changeCurrentPage } from '../../store/slices/postsSlice'
import { useObserver } from '../../hooks/useObserver'

export default function Posts() {

    const [modal, setModal] = useState(false)
    const paginationRef = useRef()
    
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)

    const observerCallback = () => {
        dispatch(changeCurrentPage(posts.currentPage + 1))
    }

    useObserver(paginationRef, posts.currentPage < 10, posts.isLoading, observerCallback)

    useEffect(() => {
        dispatch(fetchAllPosts({limit: 10, page: posts.currentPage}))
    }, [dispatch, posts.currentPage])

  return (
    <>
        <Button onClick={() => setModal(true)}>
            Создать пост
        </Button>
        <Modal visible={modal} setModal={setModal}>
            <CreatePost setModal={setModal}/>
        </Modal>
        <FilterPosts/>
        <ChangePages/>
        <PostsList/>
        <div ref={paginationRef} className='dynamicPaginaton'/>
        {posts.error
            ? <h1>{posts.error}</h1>
            : posts.isLoading && <Loader/>
        }
    </>
  )
}
