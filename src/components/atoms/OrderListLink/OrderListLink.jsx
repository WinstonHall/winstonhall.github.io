import { order_list_link } from './OrderListLink.module.css'

export function OrderListLink({ hrefID, positionNum, text }) {
    return (
        <li>
            <a className={order_list_link} href={`#${hrefID}`}>
                <span>{positionNum}.</span>
                {text}
            </a>
        </li>
    )
}
