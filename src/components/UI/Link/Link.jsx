import React from 'react'
import s from './Link.module.scss'

const Link = props => {
    const cls = [
        s.link,
        s[props.view],
        s[props.type]
    ]

    return (
        <a
            className={cls.join(' ')}
            href={props.url}
        >
            {props.children}
        </a>
    )
}

export default Link