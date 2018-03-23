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

export const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.8) translateY(-30%);
    pointer-events: none;
  }
  100% {
    opacity: 1;
    transform: none;
    pointer-events: auto;
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

export const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`
