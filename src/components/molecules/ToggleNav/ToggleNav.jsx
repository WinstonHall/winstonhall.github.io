import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import { toggle_btn } from './ToggleNav.module.css'

export function ToggleNav({ isToggled, setIsToggled }) {
    return isToggled === true ? (
        <RxHamburgerMenu
            className={`${toggle_btn} high_light`}
            onClick={() => {
                setIsToggled(!isToggled)
            }}
        />
    ) : (
        <RxCross2
            className={`${toggle_btn} high_light`}
            onClick={() => {
                setIsToggled(!isToggled)
            }}
        />
    )
}
