import {Component, Input, OnInit} from '@angular/core';
import {Report, Simuser} from '../../Interface/userinfo';
import {ReportServiceService} from '../report-service.service';
import {USER} from '../../Interface/mock-user';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import {User} from '../../Interface/userinfo';


@Component({
  selector: 'app-report1',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: 0})),
      transition('void => *', [
        style({height: 0}),
        animate(250, style({height: '*'}))
      ])
    ])
  ]

})
export class Report2Component implements OnInit {
  user: User = USER;
  reports_onshow = [];
  reports_unshow = [];
  i = 0;
  t: Report;

  constructor(private reportService: ReportServiceService) { }
  ngOnInit() {
     this.initReports();
  }

  reportShowMore() {

    console.log(this.reports_unshow.length);
    this.reports_unshow.reverse();
    for ( this.i = 0; this.i < this.reports_unshow.length && this.i < 6; ++this.i) {
      this.t = this.reports_unshow.pop();
      this.reports_onshow.push(this.t);
    }
    this.i = 0;
    this.reports_unshow.reverse();
  }

  initReports(): void {


    if (this.user.reports.length <= 6) {
      this.reports_onshow = this.user.reports.slice(0, this.user.reports.length);
    } else {
      this.reports_onshow = this.user.reports.slice(0, 6);
      this.reports_unshow = this.user.reports.slice(6, this.user.reports.length);
    }
  }
  ifFollowing(otheruser: Simuser) {
    const ii = this.user.following.content.findIndex(function(value) {
      return value.id === otheruser.id;
    });
    if (ii === -1) {
      console.log('no');
      return false;
    } else {
      console.log('yes');
      return true;
    }
  }

}
