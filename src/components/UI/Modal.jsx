import React from 'react'
import classes from './modal.module.css'

export default function Modal({children, visible, setModal}) {

    const rootClasses = [classes.modal]
    if (visible) {
        rootClasses.push(classes.active)
    }
    
  return (
    <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
        <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}