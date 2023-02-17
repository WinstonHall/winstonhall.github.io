import { ExternalLink, OrderListLink } from "../../"
import { link_list, nav } from "./Navbar.module.css"

export function Navbar() {
  return (
    <nav className={nav}>
      <ol className={link_list}>
        <OrderListLink hrefID="about" text="About" />
        <OrderListLink hrefID="experience" text="Experience" />
        <OrderListLink hrefID="work" text="Work" />
        <OrderListLink hrefID="contact" text="Contact" />
      </ol>
      <ExternalLink href="/" text="Resume" />
    </nav>
  )
}
