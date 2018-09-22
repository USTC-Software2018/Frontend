import { Component, Input, OnInit } from '@angular/core';
import {Simuser} from '../../Interface/userinfo';

@Component({
  selector: 'app-user-info-profile',
  templateUrl: './user-info-profile.component.html',
  styleUrls: ['./user-info-profile.component.less']
})
export class UserInfoProfileComponent implements OnInit {
  @Input() userinfoprofile: Simuser;
  @Input() ifmyself: boolean;
  number_router: string;
  ifFollow: boolean;
  follow_or_unfollow: string;
  constructor() { }
  ngOnInit() {
    this.ifFollow = this.userinfoprofile.ifFollow;
    this.follow_or_unfollow = this.ifFollow ? 'Follow' : 'Unfollow';
    // 根据是否是自己设置点击四个字母跳转
    if (this.ifmyself) {
      this.number_router = '/mypersonalcenter/myinfo';
    } else{
      this.number_router = '/profile';
    }
  }
  toggleFollow() {
    this.ifFollow = this.ifFollow ? false : true;
    this.follow_or_unfollow = this.ifFollow ? 'Follow' : 'Unfollow';
  }
  /*
  handleOk(): void {
    this.userinfoprofile.follow_or_unfollow = 'follow';
    this.userinfoprofile.isVisible = false;
  }
  handleCancel(): void {
    this.userinfoprofile.isVisible = false;
  }
  */
}
