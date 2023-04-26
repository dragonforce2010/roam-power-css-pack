import "./css-box.css"
import "./css-grid.css"
import "./css-border.css"
import "./css-bg.css"
import "./css-bg-level.css"
import "./css-font-level.css"
import "./css-font-family.css"
import "./css-font-color.css"
import "./css-font-size.css"

const onload = () => {
  document.body.classList.add('power-css-pack')
}

const onunload = () => {
  document.body.classList.remove('power-css-pack')
}

export default {
  onload: onload,
  onunload: onunload
}