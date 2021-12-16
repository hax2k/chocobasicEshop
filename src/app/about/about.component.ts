import { ToastrService } from 'ngx-toastr';
import { userData } from './aboutusdata';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/models/products';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user: UserData
  userdata: UserData[] = userData;
  toggle: boolean = false;
  isedit: boolean = false;

  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
    this.user = new UserData();
  }

  addUser() {
    this.userdata.push(this.user);
    this.user = new UserData();
    this.toast.success('Added Successfully')
    this.switch();
  }
  editUser(user: UserData) {
    this.switch();
    let i = this.userdata.indexOf(user);
    this.user = this.userdata[i];
  }
  newObj() {
    this.toast.info('Updated Successfully');
    this.user = new UserData();
    this.switch();
  }
  deleteUser(user: UserData) {
    let i = this.userdata.indexOf(user);
    this.userdata.splice(i, 1);
    this.toast.error('Deleted Successfully')
  }
  switch() {
    this.toggle = !this.toggle;
  }
  isEdittoggle(){
    this.isedit = !this.isedit;
  }

}
