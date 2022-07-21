import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { useSelector } from "react-redux/es/exports"
import Post from "./Post"

export default function PostsList() {
  const posts = useSelector(state => state.posts)

  const renderedPosts = (posts.filteredPosts.length || !posts.isLoading) ? (
    posts.filteredPosts.map((post) => {
      return (
        <CSSTransition timeout={500} key={post.id} classNames="postCSS">
          <Post post={post} />
        </CSSTransition>
      )
    })
  ) : (
    <CSSTransition timeout={500} key={1} classNames="postCSS">
      <h1 className={"posts-not-found"}>Посты нет</h1>
    </CSSTransition>
  )

  return (
    <>
      <h1> Посты </h1>
      <TransitionGroup>
          {renderedPosts}
      </TransitionGroup>
    </>
  )
}
