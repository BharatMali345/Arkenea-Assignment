import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  //Inputs
  @Input() Data: any;

  //Variables
  maleCount: number = 0;
  femaleCount: number = 0;
  value = 0;
  loading = true;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.computeData();
  }

  computeData() {
    this.value = this.Data.length * 10;
    this.Data.forEach((item: any) => {
      if (item.gender == 'Male') {
        this.maleCount++;
      } else {
        this.femaleCount++;
      }
    });
    setTimeout(() => {
      this.loading = false;
    }, 0);
  }
}
