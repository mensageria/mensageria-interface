import { ConversasProvider } from './../../providers/conversas/conversas';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Conversa } from '../../models/conversa';
import { ModalCadastrarConversaPage } from '../modal-cadastrar-conversa/modal-cadastrar-conversa';
import { Events } from 'ionic-angular/util/events';
import { Chart } from 'chart.js';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { StorageProvider } from '../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-lista-conversas',
  templateUrl: 'lista-conversas.html',
  providers: [ConversasProvider]
})
export class ListaConversasPage {
  conversas: Conversa[];

  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public conversasProvider: ConversasProvider,
    public modalCtrl: ModalController,
    public events: Events,
    public usuarioProvider: UsuarioProvider,
    public storage: StorageProvider) { }

  async ionViewDidLoad() {
    this.events.subscribe('conversa:atualizar', conversa => this.atualizarConversas(conversa));
    await this.usuarioProvider.getUsuario(4).subscribe(usuario => {
      this.storage._.set(this.storage.USUARIO, usuario);
    })

    this.getAllConversas();
  }

  atualizarConversas(conversa) {
    if (this.conversas.indexOf(conversa) == -1) {
      this.conversas.push(conversa);
    } else {
      this.conversas = this.conversas.splice(conversa);
    }
  }

  getAllConversas() {
    this.conversasProvider.getAllConversas()
      .subscribe((conversas: any) => {
        this.conversas = conversas;
        //this.criarChart();
      })
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalCadastrarConversaPage, characterNum);
    modal.present();
  }

  criarConversa() {
    this.openModal({ charNum: 0 })
  }

  getChartElement(conversa: Conversa) {
    return document.getElementById('canvas' + conversa.id);
  }

  getDataChart(conversa) {

  }

  criarChart() {
    console.log('teste', document.getElementsByClassName('canvas'))
    this.barChart = new Chart(document.getElementsByClassName('canvas'), {

      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }

}
