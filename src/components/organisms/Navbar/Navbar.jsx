import { useState } from 'react'
import { Link, ToggleNav } from '../../'

export function Navbar() {
    const [isToggled, setIsToggled] = useState(false)

    return (
        <div>
            <ToggleNav {...{ isToggled, setIsToggled }} />
            <nav className={`nav ${isToggled ? 'nav_hide' : ''}`}>
                <Link
                    className='nav_link'
                    href='about'
                    position={0}
                    content='About'
                />
                <Link
                    className='nav_link'
                    href='experience'
                    position={1}
                    content='Experience'
                />
                <Link
                    className='nav_link'
                    href='work'
                    position={2}
                    content='Work'
                />
                <Link
                    className='nav_link'
                    href='contact'
                    position={3}
                    content='Contact'
                />
                <Link
                    className='reume_link nav_link'
                    href='/'
                    isExternal
                    content='Resume'
                />
            </nav>
        </div>
    )
}
