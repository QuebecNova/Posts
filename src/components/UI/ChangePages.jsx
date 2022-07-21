import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { changeCurrentPage } from '../../store/slices/postsSlice'

export default function ChangePages() {
 
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const allPages = useMemo(() => {

        function changePage(page) {
            dispatch(changeCurrentPage(page))
         }

        const pages = []
        for (let page = 1; page < posts.totalPages + 1; page++) {
            pages.push(
            <div 
                className={`page ${posts.currentPage === page ? 'page-active' : ''}`}
                key={page}
                onClick={() => changePage(page)}
            >
                {page}
            </div>)
        }
        return pages
     }, [posts.totalPages, posts.currentPage, dispatch])

  return (
    <div className='pages'>
        {allPages}
    </div>
  )
}
