import { useEffect, useRef } from "react"
import { useSelector } from "react-redux/es/exports"

export function useObserver(paginationRef, canLoad, isLoading, callback) {

    const observerRef = useRef()
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        if (posts.isLoading || !canLoad) return
        setTimeout(() => {
        if (observerRef.current) observerRef.current.disconnect()
        const cb = function(entries, observer) {
            if (entries[0].isIntersecting && !posts.isLoading) {
                callback()
            }
        }
            observerRef.current = new IntersectionObserver(cb)
            observerRef.current.observe(paginationRef.current)
        }, 100)

    }, [posts.isLoading, canLoad, paginationRef, callback])
}
