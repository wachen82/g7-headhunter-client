import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export const useTitle = (initialTitle: string) => {
    const [title, setTitle] = useState(initialTitle)

    const updateTitle = () => {
        const htmlTitle = document.querySelector('title')
        htmlTitle!.innerText = title
    }
    useEffect(updateTitle, [title])

    return setTitle
}
