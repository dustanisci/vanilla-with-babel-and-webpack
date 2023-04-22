import Alert from './alert.js';

export default class Template {

  constructor() {
    this.createHtml();
  }

  createHtml() {
    const body = document.body;
    const div = document.createElement('div');
    div.style.cssText = 'background:purple;width:50px;height:50px';

    body.append(div);
    new Alert();
  }
}

new Template();