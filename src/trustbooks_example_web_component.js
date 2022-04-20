import * as React from 'react'
import { render } from 'react-dom'
import { StylesProvider, jssPreset } from '@material-ui/styles'
import { create } from 'jss'

import TrustbooksExampleWebComponent from './components/trustbooks_example_web_component/trustbooks_example_web_component.js'

class MyWebComponent extends HTMLElement { // Creates web component
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' })
    const mountPoint = document.createElement('span')
    const reactRoot = shadowRoot.appendChild(mountPoint)
    const jss = create({
      ...jssPreset(),
      insertionPoint: reactRoot
    })

    render(
      <StylesProvider jss={jss}>
        <TrustbooksExampleWebComponent />
      </StylesProvider>,
      mountPoint
    )
  }
}
customElements.define('trustbooks-example-web-component', MyWebComponent) // Registers web component