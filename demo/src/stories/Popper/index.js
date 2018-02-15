import React from 'react'
import { Popper } from '../../../../src/components'
import { Icon } from '../../../../src/components'

export default () => (
  <Popper
    trigger={<Icon type="more-vertical" />}
  >
    <div style={{ background: '#ddd' }}>
      Heres some stuff, with some extra long content.
    </div>
  </Popper>
)
