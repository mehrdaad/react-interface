import { pseudoStyle } from 'styled-system'

export const grow = ({ grow }) => {
  if (grow === undefined) return null
  let cssAttr = grow
  if (grow === false) cssAttr = 0
  if (grow === true) cssAttr = 1

  return { 'flex-grow': cssAttr }
}

export const shrink = ({ shrink }) => {
  if (shrink === undefined) return null
  let cssAttr = shrink
  if (shrink === false) cssAttr = 0
  if (shrink === true) cssAttr = 1

  return { 'flex-shrink': cssAttr }
}

export const basis = ({ basis }) => {
  if (basis === undefined) return null
  return { 'flex-basis': basis }
}

export const maxWidth = ({ mw }) => {
  if (mw === undefined) return null
  return {
    'max-width': typeof mw === 'string'
      ? mw : `${mw}px`
  }
}

export const flex = ({ flex }) => {
  if (flex === undefined) return null
  return {
    display: flex ? 'flex' : 'initial'
  }
}
