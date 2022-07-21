import React from 'react'
import classes from './select.module.css'

export default function Select({options, defaultValue, value, onChange}) {
  return (
    <select 
        className={classes.select}
        value={value}
        onChange={e => onChange(e.target.value)}
    >
        <option value={''} disabled>{defaultValue}</option>
        {options.map(option => (
            <option value={option.value} key={option.value}>{option.name}</option>
        ))}
    </select>
  )
}
