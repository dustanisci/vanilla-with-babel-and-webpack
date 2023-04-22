import {
  cjsFile
} from './../example/example1.cjs';

export default class Alert {

  constructor() {
    this.showAlert();
  }

  showAlert() {
    alert('Adicionado com sucesso!');
    cjsFile();
  }

}