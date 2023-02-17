import { external_link } from "./ExternalLink.module.css"

export function ExternalLink({ href = "/", text = "Missing Text" }) {
  return (
    <a className={external_link} href={href} target="_blank" rel="noreferrer">
      {text}
    </a>
  )
}
