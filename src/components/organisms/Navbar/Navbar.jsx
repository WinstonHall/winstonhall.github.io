import { useState } from 'react'
import { ExternalLink, OrderListLink, ToggleNav } from '../../'
import { link_list, nav, nav_hide } from './Navbar.module.css'

export function Navbar() {
    const [isToggled, setIsToggled] = useState(false)

    return (
        <div>
            <ToggleNav {...{ isToggled, setIsToggled }} />
            <nav className={`${nav}${isToggled ? ` ${nav_hide}` : ''}`}>
                <ol className={link_list}>
                    <OrderListLink hrefID='about' text='About' />
                    <OrderListLink hrefID='experience' text='Experience' />
                    <OrderListLink hrefID='work' text='Work' />
                    <OrderListLink hrefID='contact' text='Contact' />
                </ol>
                <ExternalLink href='/' text='Resume' />
            </nav>
        </div>
    )
}
