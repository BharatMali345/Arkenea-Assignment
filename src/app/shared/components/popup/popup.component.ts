import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  //Inputs
  @Input() Type: string = '';
  @Input() Data: any;

  //Outputs
  @Output() onActionClicked: EventEmitter<any> = new EventEmitter();

  //variables
  formLoading = false;
  constructor() {}

  ngOnInit(): void {
    this.setDate();
  }

  onBtnClicked(event: any) {
    let newEvent = { type: event, data: this.Data };
    this.onActionClicked.emit(newEvent);
  }

  setDate() {
    // this.Data.dob = moment(this.Data.dob);
    // setTimeout(() => {
    //   this.formLoading = false;
    // }, 0);
  }
}
