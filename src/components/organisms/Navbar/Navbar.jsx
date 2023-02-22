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
                    <OrderListLink
                        hrefID='about'
                        positionNum={0}
                        text='About'
                    />
                    <OrderListLink
                        hrefID='experience'
                        positionNum={1}
                        text='Experience'
                    />
                    <OrderListLink hrefID='work' positionNum={2} text='Work' />
                    <OrderListLink
                        hrefID='contact'
                        positionNum={3}
                        text='Contact'
                    />
                </ol>
                <ExternalLink href='/' content='Resume' border={true} />
            </nav>
        </div>
    )
}
