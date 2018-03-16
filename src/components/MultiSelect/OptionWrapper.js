import { Menu } from '../Menu'

export default Menu.extend`
  > li:hover {
    .checkbox {
      background: ${props => props.theme.colors.multiSelectCheckboxHoverBackground};
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
