import {FC, useEffect, useState} from 'react'
import s from './ScrollToTop.module.css'

export const ScrollToTop: FC = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        scrolled > 300 ? setVisible(true) : setVisible(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)
    }, [])

    return <>{visible && <button className={s.scrollButton} onClick={scrollToTop}>Up</button>}</>
}
