<!-- 
  arquivo template
  
  import Alert from './alert.js';

class Template {

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

export const InstanceTemplate = new Template();

---------------

  <script type="module">
    import {InstanceTemplate} from './ui/template.js';
    console.log(InstanceTemplate);
  </script> -->