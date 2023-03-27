import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pesoSelecionado:string='';
  disSelecionado:string='';
  entSelecionado:string='';
  choiceSelecionado:string='';
  selecionado:string="";
  a:number=0;
  res:number=0;
  res1:number=0;
  res2:number=0;
  res3:number=0;
  conta:number=0;

  constructor(public alertController: AlertController) {}
  async exibirAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Você escolheu',
      subHeader: 'pela alternativa',
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }
  verificaSelecionado(valor: any) {
    let mensagem: string;
    mensagem = valor.detail.value;
    this.exibirAlerta(mensagem);
  }

  peso(){
    if(this.pesoSelecionado == "escolha1"){
      this.res = 30;
      return this.res;
    }
    if(this.pesoSelecionado == "escolha2"){
      this.res = 60;
      return this.res;
    }
    if(this.pesoSelecionado == "escolha3"){
      this.res = 90;
      return this.res;
    }
    if(this.pesoSelecionado == "escolha4"){
      this.res = 120;
      return this.res;
    }
    if(this.pesoSelecionado == "escolha5"){
      this.res = 150;
      return this.res;
    }
    else{
      this.res = 0;
      return this.res;
    }
  }

  distancia(){
    if(this.disSelecionado == "opção1"){
      this.res1 = 10;
      return this.res1;
    }
    if(this.disSelecionado == "opção2"){
      this.res1 = 20;
      return this.res1;
    }
    if(this.disSelecionado == "opção3"){
      this.res1 = 30;
      return this.res1;
    }
    if(this.disSelecionado == "opção4"){
      this.res1 = 40;
      return this.res1;
    }
    if(this.disSelecionado == "opção5"){
      this.res1 = 50;
      return this.res1;
    }
    else{
      this.res1 = 0;
      return this.res1;
    }
  }

  entrega(){
    if(this.entSelecionado == "regular"){
      this.res2 = 10;
      return this.res2;
    }
    if(this.entSelecionado == "expresso"){
      this.res2 = 50;
      return this.res2;
    }
    if(this.entSelecionado == "agendado"){
      this.res2 = 20;
      return this.res2;
    }
    else{
      this.res2 = 0;
      return this.res2;
    }
  }

  formula(){
    if(this.choiceSelecionado == "menos40kg"){
      this.res3 = 0.8;
      this.conta = this.peso() * this.res3 + this.distancia()  + this.entrega();
      return this.res3;
    }
    if(this.choiceSelecionado == "menos40km"){
      this.res3 = 0.8;
      this.conta = this.peso() + this.distancia() * this.res3 + this.entrega();
      return this.res3;
    }
    if(this.choiceSelecionado[0] == "menos40kg" && this.choiceSelecionado[1] == "menos40km"){
      this.res3 = 0.8;
      this.conta = this.peso() * this.res3 + this.distancia() * this.res3 + this.entrega();
      return this.res3;
    }
    else{
      this.conta = this.peso() + this.distancia() + this.entrega();
      return this.res3;
    }
  }

  b(){
    this.a = 0.2;
    return this.a;
  }

  async alert1() {
    if(this.peso() == 0 || this.distancia() == 0 || this.entrega() == 0){
      const alert = await this.alertController.create({
        header: 'Aplique um pagamento',
        subHeader: '',
        message: 'Selecione os tópicos',
        buttons: ['Preencher'],
      });
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        header: 'Parabéns',
        subHeader: '',
        message: 'você efetuou um pagamento',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
