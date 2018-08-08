import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage{

  constructor(public navCtrl: NavController,private servicio: AuthService) {
  	this.getMedicionesInfo();
    //this.cargarDatos();
  }


  public lineChartLabels:Array<any> = [/*'January', 'February', 'March', 'April', 'May', 'June', 'July'*/];
  public lineChartData:Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'ABDOMEN'},//p
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'BICEPS'},//p
  {data: [18, 48, 77, 9, 100, 27, 40], label: 'BICEPS DERECHO CONTRAÍDO'},//c
  {data: [48, 48, 77, 9, 100, 27, 40], label: 'BICEPS IZQUIERDO CONTRAÍDO'},//c celeste
  {data: [98, 48, 77, 9, 100, 27, 40], label: 'ESPALDA'},//c
  {data: [158, 48, 77, 9, 100, 27, 40], label: 'ÍNDICE DE MASA CORPORAL'},//ec
  {data: [8, 48, 77, 9, 100, 27, 40], label: 'MUSLO'},//p
  {data: [162, 48, 77, 9, 100, 27, 40], label: 'MUSLO DERECHO'},//c
  {data: [38, 48, 77, 9, 100, 27, 40], label: 'MUSLO IZQUIERDO'},//c
  {data: [88, 48, 77, 9, 100, 27, 40], label: 'PORCENTAJE DE GRASA'},//ec verde
  {data: [98, 48, 77, 9, 150, 27, 40], label: 'PORCENTAJE DE MÚSCULO'},//ec
  {data: [48, 48, 77, 9, 100, 27, 40], label: 'PANTORRILLAS'},//p
  {data: [228, 48, 77, 9, 100, 27, 40], label: 'PECHO'},//c
  {data: [168, 48, 77, 9, 100, 27, 40], label: 'PESO'},//ec
  {data: [48, 48, 77, 9, 100, 27, 40], label: 'TRICEPS'}//p
];
  getMedicionesInfo()
  {
    let score ;
    var arreglo:Array<any>;
    let json ;
    this.servicio.getMedicionesInfo(this.servicio.user.at).done((datas)=>{
      score = {
      TeamA : [],//bicepsDerechoCont
      TeamB : [],//bicepsIzquierdoCont
      TeamC : [],//musloDerecho
      TeamD : [],//musloIzquierdo
      TeamE : [],//pecho
      TeamF : [],//espalda
      TeamG : [],//peso
      TeamH : [],//imc
      TeamI : [],//pGrasa
      TeamJ : [],//pMuscular
      TeamK : [],//triceps
      TeamL : [],//abdomen
      TeamM : [],//biceps
      TeamN : [],//muslo
      TeamO : [],//pantorrilla 
      TeamFechas : []
      };
      let date;
      $.each(datas, function(i, item) {
      score.TeamA.push(parseInt(datas[i].bicepsDerechoCont));//
      score.TeamB.push(parseInt(datas[i].bicepsIzquierdoCont));//
      score.TeamC.push(parseInt(datas[i].musloDerecho));//
      score.TeamD.push(parseInt(datas[i].musloIzquierdo));//
      score.TeamE.push(parseInt(datas[i].pecho));//
      score.TeamF.push(parseInt(datas[i].espalda));//
      score.TeamG.push(parseInt(datas[i].peso));//
      score.TeamH.push(parseInt(datas[i].imc));//
      score.TeamI.push(parseInt(datas[i].pGrasa));//
      score.TeamJ.push(parseInt(datas[i].pMuscular));//
      score.TeamK.push(parseInt(datas[i].triceps));//
      score.TeamL.push(parseInt(datas[i].abdomen));//
      score.TeamM.push(parseInt(datas[i].biceps));//
      score.TeamN.push(parseInt(datas[i].muslo));//
      score.TeamO.push(parseInt(datas[i].pantorrilla));//  //15 respuestas de grupos musculares
      //date=new Date(datas[i].fecha);
      //console.log((datas[i].fecha).toString());
      var d = new Date(datas[i].fecha);
      score.TeamFechas.push(d.toString());
      //score.TeamFechas.push(datas[i].fecha);
    });
    //arreglo= new Array();
    this.lineChartData=[
    {data:score.TeamL,label:"ABDOMEN"},
    {data:score.TeamM, label:"BICEPS"},
    {data:score.TeamA, label:"BICEPS DERECHO CONTRAÍDO"},
    {data:score.TeamB, label:"BICEPS IZQUIERDO CONTRAÍDO"},
    {data:score.TeamF, label:"ESPALDA"},
    {data:score.TeamH, label:"ÍNDICE DE MASA CORPORAL"},
    {data:score.TeamN, label:"MUSLO"},
    {data:score.TeamC, label:"MUSLO DERECHO"},
    {data:score.TeamD, label:"MUSLO IZQUIERDO"},
    {data:score.TeamI, label:"PORCENTAJE DE GRASA"},
    {data:score.TeamJ, label:"PORCENTAJE DE MÚSCULO"},
    {data:score.TeamO, label:"PANTORRILLAS"},
    {data:score.TeamE, label:"PECHO"},
    {data:score.TeamG, label:"PESO"},
    {data:score.TeamK, label:"TRICEPS"},
    ];
    this.lineChartLabels=score.TeamFechas;
    console.log(score.TeamFechas);
    })
  }

public lineChartOptions:any = {
  responsive: true
};
public lineChartColors:Array<any> = [
  { // grey
    backgroundColor: 'rgba(126,4,148,0.2)',
    borderColor: 'rgba(126,4,148,1)',
    pointBackgroundColor: 'rgba(126,4,148,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(126,4,148,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(126,4,148,0.2)',
    borderColor: 'rgba(126,4,148,1)',
    pointBackgroundColor: 'rgba(126,4,148,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(126,4,148,1)'
  },
  { // grey
    backgroundColor: 'rgba(36,212,233,0.2)',
    borderColor: 'rgba(36,212,233,1)',
    pointBackgroundColor: 'rgba(36,212,233,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(36,212,233,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgba(36,212,233,0.2)',
    borderColor: 'rgba(36,212,233,1)',
    pointBackgroundColor: 'rgba(36,212,233,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(36,212,233,1)'
  },
  { // grey
    backgroundColor: 'rgba(36,212,233,0.2)',
    borderColor: 'rgba(36,212,233,1)',
    pointBackgroundColor: 'rgba(36,212,233,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(36,212,233,0.8)'
  },
    { // dark grey
    backgroundColor: 'rgba(27,60,12,0.2)',
    borderColor: 'rgba(27,60,12,1)',
    pointBackgroundColor: 'rgba(27,60,12,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(27,60,12,1)'
  },
    { // grey
    backgroundColor: 'rgba(126,4,148,0.2)',//7
    borderColor: 'rgba(126,4,148,1)',
    pointBackgroundColor: 'rgba(126,4,148,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(126,4,148,1)'
  },
      { // dark grey
    backgroundColor: 'rgba(36,212,233,0.2)',
    borderColor: 'rgba(36,212,233,1)',
    pointBackgroundColor: 'rgba(36,212,233,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(36,212,233,1)'
  },
      { // grey
    backgroundColor: 'rgba(36,212,233,0.2)',
    borderColor: 'rgba(36,212,233,1)',
    pointBackgroundColor: 'rgba(36,212,233,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(36,212,233,0.8)'
  },
        { // dark grey
    backgroundColor: 'rgba(27,60,12,0.2)',
    borderColor: 'rgba(27,60,12,1)',
    pointBackgroundColor: 'rgba(27,60,12,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(27,60,12,1)'
  },
        { // grey
    backgroundColor: 'rgba(27,60,12,0.2)',
    borderColor: 'rgba(27,60,12,1)',
    pointBackgroundColor: 'rgba(27,60,12,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(27,60,12,0.8)'
  },
          { // dark grey
    backgroundColor: 'rgba(126,4,148,0.2)',//12
    borderColor: 'rgba(126,4,148,1)',
    pointBackgroundColor: 'rgba(126,4,148,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(126,4,148,0.8)'
  },
          { // grey
    backgroundColor: 'rgba(36,212,233,0.2)',
    borderColor: 'rgba(36,212,233,1)',
    pointBackgroundColor: 'rgba(36,212,233,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(36,212,233,0.8)'
  },
            { // dark grey
    backgroundColor: 'rgba(27,60,12,0.2)',
    borderColor: 'rgba(27,60,12,1)',
    pointBackgroundColor: 'rgba(27,60,12,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(27,60,12,1)'
  },
            { // grey
    backgroundColor: 'rgba(126,4,148,0.2)',
    borderColor: 'rgba(126,4,148,1)',
    pointBackgroundColor: 'rgba(126,4,148,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(126,4,148,1)'
  }
];
public lineChartLegend:boolean = true;
public lineChartType:string = 'line';
public randomize():void {
  let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  for (let i = 0; i < this.lineChartData.length; i++) {
    _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    for (let j = 0; j < this.lineChartData[i].data.length; j++) {
      _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    }
  }
  this.lineChartData = _lineChartData;
}

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
}

