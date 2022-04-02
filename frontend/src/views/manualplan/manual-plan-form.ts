import { LitElement, html, css, customElement } from 'lit-element';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/combo-box/src/vaadin-combo-box.js';
import '@vaadin/horizontal-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/text-field/src/vaadin-text-field.js';
import '@vaadin/checkbox/src/vaadin-checkbox.js';

@customElement('manual-plan-form')
export class ManualPlanForm extends LitElement {
  static get styles() {
    return css`
      :host {
          display: block;
          height: 100%;
      }
      `;
  }

  render() {
    return html`
<vaadin-form-layout style="margin: var(--lumo-space-m); padding: var(--lumo-space-m);">
 <vaadin-text-field id="name" type="text" required tabindex="" label="Name"></vaadin-text-field>
 <vaadin-checkbox tabindex="" checked label="Enabled" type="checkbox" value="on" id="enabled"></vaadin-checkbox>
 <vaadin-combo-box tabindex="" label="Action"></vaadin-combo-box>
 <vaadin-horizontal-layout theme="spacing">
  <vaadin-button theme="primary" id="save">
    Save 
  </vaadin-button>
  <vaadin-button theme="error" id="delete">
    Delete 
  </vaadin-button>
  <vaadin-button theme="tertiary" id="close">
    Close 
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-form-layout>
`;
  }
}
