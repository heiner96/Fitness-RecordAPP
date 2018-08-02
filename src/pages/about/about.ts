import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from "jquery";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage{

  constructor(public navCtrl: NavController) {
  	this.cargarDatos();
  }
   cargarDatos()
  {
  	 $.ajax({
    url: 'https://localhost:8000/api/auth/medicion',//ruta
    headers: {
        'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE2Zjg0YjQzYmRkYmNiNGJhZmJlYWJjYzY1ZTgxMjE5ZWEzZjVkN2NhN2Y4ZWJjZTg3YzFiODIxNDE4OTEwZTIxNmQyODM4YmY3NjQ3MDcxIn0.eyJhdWQiOiI2IiwianRpIjoiMTZmODRiNDNiZGRiY2I0YmFmYmVhYmNjNjVlODEyMTllYTNmNWQ3Y2E3ZjhlYmNlODdjMWI4MjE0MTg5MTBlMjE2ZDI4MzhiZjc2NDcwNzEiLCJpYXQiOjE1MzMyMzg4NTcsIm5iZiI6MTUzMzIzODg1NywiZXhwIjoxNTY0Nzc0ODU3LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.b3Ti-wMkl6uUpyDliFgMNRQ_MGVAk02SUX6a9g0CaFP7kcuqrYTw77uqmTeBoxuVTtycP5NeUVaTsUScJ4IyYjbk_dnTU8knpZ4WVl4VuhYSRwX-tCtqkGjDUkoOHH_PGHrRRO3NTOp6_Uyp4GvJEtPpDTVU0HmWQ0wq6vRgPXL-NzSTAmbSiI2pIzwNcxopG3F9CAIuUUUQEhUNm_23u5MdOHr8Z6C2NzdPTFrnEujg6wFhu12Yzu9GYTnjPK4UiCLak2wYndxIUOxKOdkc2y52ow2hsVr9D_HqzwUmPIPl2hwqfpbM_Pq2mMAh1JU8TiAGEnwmmpqE8IDikvvR6WzlXf9TMIMCGSQli-UWV3YOzlKx0vI7ZMND4RZt9kXiFpr2zPW4yQejpF_pBecTLZZ5dajujsl58PxrztbviF7K9fblvuBnnuBtc19YV5UKsmNDT9039frHOnr2QlPsHvSLzGdU4XS1p3CfMyJpGwjCqZsZ-l_RabVXbRDFTkKb9RdOxVDvZf9ADucbue3eDtjxyy_1PCmJvouX3DS4vyBSSYBygivAs4meWiMAA6ZCcPclpp9YafdMS9PsVMjzfPgIqGIbOIai1ZMLoB1Xt1Ba66C-DvK3RzqbraH0-0M0SaWND1JUxpl-QGuLTfMnOdvLx6PIPkEsvMZDm5WRvb4'
        
    },
    type: 'GET',
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (datas) {
    	console.log(datas);
    var score = null;
    var asociativo=[];
    var fechas=[];
    var asofechas=[];
    var aux=[];
    var cantidadMediciones=0;
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
      TeamEtiquetas:['ABDOMEN','BICEPS','BICEPS DERECHO CONTRAÍDO','BICEPS IZQUIERDO CONTRAÍDO','ESPALDA',
        'ÍNDICE DE MASA CORPORAL','MUSLO','MUSLO DERECHO','MUSLO IZQUIERDO','PORCENTAJE DE GRASA',
        'PORCENTAJE DE MÚSCULO','PANTORRILLAS','PECHO','PESO','TRICEPS'],//labels 15
      TeamFechas : [],   /**/         
      Color : []
      };
    var hue = '';
    var date;
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
      date=new Date(datas[i].fecha);
      score.TeamFechas.push(date);
    });
    for (var i = 0; i <= 14; i++) {
      hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
      (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      score.Color.push(hue);        
    }
    //var data = new google.visualization.DataTable();
    for (var i = 0; i < datas.length; i++) {
      asociativo[i]=[
        asociativo[score.TeamEtiquetas[i]] =  score.TeamA[i],//ABDOMEN        
        asociativo[score.TeamEtiquetas[i+1]] = score.TeamB[i],//BICEPS        
        asociativo[score.TeamEtiquetas[i+2]] = score.TeamC[i],//BICEPS DERECHO CONTRAÍDO        
        asociativo[score.TeamEtiquetas[i+3]] = score.TeamD[i],//BICEPS IZQUIERDO CONTRAÍDO        
        asociativo[score.TeamEtiquetas[i+4]] = score.TeamE[i],//ESPALDA        
        asociativo[score.TeamEtiquetas[i+5]] = score.TeamF[i],//ÍNDICE DE MASA CORPORAL        
        asociativo[score.TeamEtiquetas[i+6]] = score.TeamG[i],//MUSLO        
        asociativo[score.TeamEtiquetas[i+7]] = score.TeamH[i],//MUSLO DERECHO        
        asociativo[score.TeamEtiquetas[i+8]] = score.TeamI[i],//MUSLO IZQUIERDO        
        asociativo[score.TeamEtiquetas[i+9]] = score.TeamJ[i],//PORCENTAJE DE GRASA        
        asociativo[score.TeamEtiquetas[i+10]] = score.TeamK[i],//PORCENTAJE DE MÚSCULO        
        asociativo[score.TeamEtiquetas[i+11]] = score.TeamL[i],//PANTORRILLAS        
        asociativo[score.TeamEtiquetas[i+12]] = score.TeamM[i],//PECHO        
        asociativo[score.TeamEtiquetas[i+13]] = score.TeamN[i],//PESO        
        asociativo[score.TeamEtiquetas[i+14]] = score.TeamO[i],//TRICEPS     15
      ];
      asofechas[i]=[
        aux[i]=[
          new Date(score.TeamFechas[i]),
          score.TeamA[i],
          score.TeamB[i],
          score.TeamC[i],
          score.TeamD[i],
          score.TeamE[i],
          score.TeamF[i],
          score.TeamG[i],
          score.TeamH[i],
          score.TeamI[i],
          score.TeamJ[i],
          score.TeamK[i],
          score.TeamL[i],
          score.TeamM[i],
          score.TeamN[i],
          score.TeamO[i]
        ],
      ];  
      cantidadMediciones++;
    }
    //console.log(asofechas);
    /*data.addColumn('date', 'FECHA');
    data.addColumn('number', 'ABDOMEN');
    data.addColumn('number', 'BICEPS');
    data.addColumn('number', 'BICEPS DERECHO CONTRAÍDO');
    data.addColumn('number', 'BICEPS IZQUIERDO CONTRAÍDO');
    data.addColumn('number', 'ESPALDA');
    data.addColumn('number', 'ÍNDICE DE MASA CORPORAL');
    data.addColumn('number', 'MUSLO');
    data.addColumn('number', 'MUSLO DERECHO');
    data.addColumn('number', 'MUSLO IZQUIERDO');
    data.addColumn('number', 'PORCENTAJE DE GRASA');
    data.addColumn('number', 'PORCENTAJE DE MÚSCULO');
    data.addColumn('number', 'PANTORRILLAS');
    data.addColumn('number', 'PECHO');
    data.addColumn('number', 'PESO');        
    data.addColumn('number', 'TRICEPS');
    for (var i = 0; i < asofechas.length; i++) {
      data.addRows(Array.from(asofechas[i]));
    }   
    var options = {
      'title':'GRAFICOS HISTORICOS DE 2 AÑOS ATRÁS.',
      'width':1170,//derecha
      'height':600,//abajo
      hAxis: {
        title: 'FECHA',
        ticks: score.TeamFechas
      },
      vAxis: {
        title: 'NUMERO'/**/
     /* },
      axes: {/*
        y: {
          Temps: {label: 'Izquierda'},
          Daylight: {label: 'Derecha'}
        }
      },
        colors: score.Color//, '#097698', '#997138', '#097188']
      };*/
      /*chart = new google.visualization.LineChart(document.getElementById('charts'));
      chart.draw(data, google.charts.Line.convertOptions(options));  
      chart.draw(data, options);*/
    },
    error: function (request, status, error) {
      console.log(error);
      console.log(status);
      console.log(request);
    }
  }); 
  }
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
public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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

