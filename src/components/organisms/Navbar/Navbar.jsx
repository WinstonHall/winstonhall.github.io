import { useState } from 'react'
import { Link, ToggleNav } from '../../'

export function Navbar() {
    const [isToggled, setIsToggled] = useState(false)

    return (
        <div>
            <ToggleNav {...{ isToggled, setIsToggled }} />
            <nav className={`nav ${isToggled === true ? 'nav_hide' : ''}`}>
                <Link
                    className='nav_link'
                    href='#about'
                    position={0}
                    content='About'
                    closeNav={() => setIsToggled(true)}
                />
                <Link
                    className='nav_link'
                    href='#experience'
                    position={1}
                    content='Experience'
                    closeNav={() => setIsToggled(true)}
                />
                {/* <Link
                    className='nav_link'
                    href='#work'
                    position={2}
                    content='Work'
                    closeNav={()=>setIsToggled(flase)}
                /> */}
                <Link
                    className='nav_link'
                    href='#contact'
                    position={2}
                    content='Contact'
                    closeNav={() => setIsToggled(true)}
                />
                <Link
                    className='reume_link nav_link'
                    href='/Resume.pdf'
                    isExternal
                    content='Resume'
                />
            </nav>
        </div>
    )
}
