import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage{

   lineChartLabels:Array<any> = [''];
   lineChartData:Array<any> = [{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''},{data:[],label:''}];
  /*{data: [], label: 'ABDOMEN'},//p
  {data: [], label: 'BICEPS'},//p
  {data: [], label: 'BICEPS DERECHO CONTRAÍDO'},//c
  {data: [], label: 'BICEPS IZQUIERDO CONTRAÍDO'},//c celeste
  {data: [], label: 'ESPALDA'},//c
  {data: [], label: 'ÍNDICE DE MASA CORPORAL'},//ec
  {data: [], label: 'MUSLO'},//p
  {data: [], label: 'MUSLO DERECHO'},//c
  {data: [], label: 'MUSLO IZQUIERDO'},//c
  {data: [], label: 'PORCENTAJE DE GRASA'},//ec verde
  {data: [], label: 'PORCENTAJE DE MÚSCULO'},//ec
  {data: [], label: 'PANTORRILLAS'},//p
  {data: [], label: 'PECHO'},//c
  {data: [], label: 'PESO'},//ec
  {data: [], label: 'TRICEPS'}//p
];*/

  constructor(public navCtrl: NavController,private servicio: AuthService) {
  	//this.getMedicionesInfo();
  }
ionViewWillEnter()
{
  this.getMedicionesInfo();
}
getMedicionesInfo()
  {
    let score ;
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
      var d = new Date(datas[i].fecha);
      var month = new Array();
      month[0] = 'January';
      month[1] = 'February';
      month[2] = 'March';
      month[3] = 'April';
      month[4] = 'May';
      month[5] = 'June';
      month[6] = 'July';
      month[7] = 'August';
      month[8] = 'September';
      month[9] = 'October';
      month[10] = 'November';
      month[11] = 'December';
      var n = month[d.getMonth()];
      score.TeamFechas.push(datas[i].fecha);
    });
    this.lineChartLabels=score.TeamFechas;
    this.lineChartData=[
    {data:score.TeamL , label:"ABDOMEN"},
    {data:score.TeamM , label:"BICEPS"},
    {data:score.TeamA , label:"BICEPS DERECHO CONTRAÍDO"},
    {data:score.TeamB , label:"BICEPS IZQUIERDO CONTRAÍDO"},
    {data:score.TeamF , label:"ESPALDA"},
    {data:score.TeamH , label:"ÍNDICE DE MASA CORPORAL"},
    {data:score.TeamN , label:"MUSLO"},
    {data:score.TeamC , label:"MUSLO DERECHO"},
    {data:score.TeamD , label:"MUSLO IZQUIERDO"},
    {data:score.TeamI , label:"PORCENTAJE DE GRASA"},
    {data:score.TeamJ , label:"PORCENTAJE DE MÚSCULO"},
    {data:score.TeamO , label:"PANTORRILLAS"},
    {data:score.TeamE , label:"PECHO"},
    {data:score.TeamG , label:"PESO"},
    {data:score.TeamK , label:"TRICEPS"}
    ];
    
    
    console.log(this.lineChartLabels);
    console.log(this.lineChartData);
    });
    
  }

public lineChartOptions:any = {
  responsive: true,
  legend: { display: true }
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
/*public randomize():void {
  let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  for (let i = 0; i < this.lineChartData.length; i++) {
    _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    for (let j = 0; j < this.lineChartData[i].data.length; j++) {
      _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    }
  }
  this.lineChartData = _lineChartData;
}*/

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
}

