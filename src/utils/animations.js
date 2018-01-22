import { css, keyframes } from 'styled-components'

export const animation = (name, duration = 1, loops = 1) => css`
    animation: ${name} ${duration}s ${loops};
    animation-fill-mode: forwards;
  `

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    position: relative;
    top: 10px;
  }
  100% {
    opacity: 1;
    position: relative;
    top: 0;
  }
`

export const fadeOutUp = keyframes`
  0% {
    opacity: 1;
    position: relative;
    top: 0px;
  }
  100% {
    opacity: 0;
    position: relative;
    top: -10px;
  }
`

export const fadeInDown = keyframes`
  0% {
    opacity: 0;
    position: relative;
    bottom: 10px;
  }
  100% {
    opacity: 1;
    position: relative;
    bottom: 0;
  }
`

export const fadeOutDown = keyframes`
  0% {
    opacity: 1;
    position: relative;
    bottom: 0;
  }
  100% {
    opacity: 0;
    position: relative;
    bottom: -10px;
  }
`

export const progressLinearMovement = keyframes`
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
`

export const start = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 20px;
    opacity: 1;
  }
`

export const spin = keyframes`
  to { transform: translateY(-15.0em); }
`
