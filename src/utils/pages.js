export default function getPageCount(totalPosts, limit) {
    if (totalPosts === 0) return 0
    return Math.ceil(totalPosts/limit)
}