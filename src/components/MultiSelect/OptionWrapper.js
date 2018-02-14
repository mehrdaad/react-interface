import styled from 'styled-components'
import { space, width, borderRadius } from 'styled-system'
import { Menu } from '../Menu'

export default Menu.extend`
  > div:hover {
    .checkbox {
      background: ${props => props.theme['checkbox.hover.background']};
    }
  }

  .children {
    height: 100%;
  }

  .checkbox-wrapper {
    width: 100%;
  }

  .checkbox-label {
    flex-grow: 1;
    padding-left: 0;
  }

  label {
    width: 100%;
  }
`
