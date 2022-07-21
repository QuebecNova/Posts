import React from 'react'
import classes from './button.module.css'

export default function Button(props) {
  return (
    <button className={classes.btn} {...props}>
        {props.children}
    </button>
  )
}
