import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min';
import { RegisterdataService } from '../services/registerdata.service';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  supply:number=0;
  it:number=0;
  hr:number=0;
  appdev:number=0;
  constructor(private registerService: RegisterdataService) { }

  ngOnInit() {
    this.registerService.getRegisterData().subscribe(snapshots=>{
      snapshots.forEach(snapshot => {
        console.log(snapshot.val().job)
        if(snapshot.val().job==="Application Developer"){
          this.appdev++;
        }
        if(snapshot.val().job==="HR"){
          this.hr++;
        }
        if(snapshot.val().job==="IT"){
          this.it++;
        }
        if(snapshot.val().job==="Supply Chain"){
          this.supply++;
        }
      } 
      )
      let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Job roles inside IBM by numbers"
        },
        data: [{
          type: "column",
          dataPoints: [
            { y: this.hr, label: "HR" },
            { y: this.supply, label: "Supply Chain" },
            { y: this.it, label: "IT" },
            { y: this.appdev, label: "Application Developer" },
          ]
        }]
      });
      chart.render();
    }
      )
      
       
    }
  }


