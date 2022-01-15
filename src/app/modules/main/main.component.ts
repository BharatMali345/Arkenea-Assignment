import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/_http/users.service';
import { UserModel } from './model/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  //Variables
  usersData: UserModel[] = [];
  loading: boolean = false;
  type: string = '';
  row: any;
  enablePopup = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    //get user from service
    this.getUsers();
  }

  btnClicked(event: any) {
    switch (event.type) {
      case 'edit':
        this.type = event.type;
        this.row = event.data;
        this.enablePopup = true;

        break;
      case 'delete':
        this.type = event.type;
        this.row = event.data;
        this.enablePopup = true;

        break;

      default:
        break;
    }
  }
  popupAction(event: any) {
    switch (event.type) {
      case 'submit':
        this.enablePopup = false;
        break;
      case 'yes':
        this.deleteUser(event.data);

        break;
      case 'no':
        this.enablePopup = false;

        break;

      default:
        break;
    }
  }

  getUsers() {
    this.loading = true;
    this.usersService.getUsers().subscribe(
      (res: UserModel[]) => {
        this.usersData = res;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  deleteUser(data: any) {
    this.loading = true;
    this.usersData = this.usersData.filter((item: any) => item.id != data.id);
    setTimeout(() => {
      this.loading = false;
      this.enablePopup = false;
    }, 100);
  }
}
