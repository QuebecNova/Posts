import React from 'react'

export default function Comment({comment}) {
  return (
    <div className='comment'>
        <strong>{comment.id}:</strong>
        <p><strong>Name: {comment.name} - Email: {comment.email}</strong></p>
        <p className='comment-content'>{comment.body}</p>
    </div>
  )
}
