export function OrderListLink({ hrefID, text }) {
  return (
    <li>
      <a href={`#${hrefID}`}>{text}</a>
    </li>
  )
}
