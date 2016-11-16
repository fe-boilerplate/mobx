import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.module.styl'
export default CSSModules(({onClick, title}) =>
  <a styleName='button' onClick={onClick}>{title}</a>, styles)
