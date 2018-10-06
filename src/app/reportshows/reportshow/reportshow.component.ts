import {Attribute, Component, Input, OnInit} from '@angular/core';
import { Report } from './reportshow';
import { REPORTS } from './mock-reports';
import { Socialcomments } from './socialinfo';
import {SOLICIALINFO, SOCIALCOMMENTS, ME} from './mock-Socialinfo';
import { User } from './user';
import { USER } from './mock-user';
import {variable} from '@angular/compiler/src/output/output_ast';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import { ShareModule } from '../../share/share.module';
import { Simuser } from '../../Interface/userinfo';
import { user1 } from '../../Interface/mock-user';
import {UserInfoProfile} from '../../others-personal-center/display-container/personal-information/userinfoprofile';
import {USERINFOPROFILE} from '../../others-personal-center/display-container/personal-information/mock-userinfoprofile';
import {ApiResult} from '../../Interface/ApiResult';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-reportshow',
  templateUrl: './reportshow.component.html',
  styleUrls: ['./reportshow.component.less']
})
export class ReportshowComponent implements OnInit {

  reports = REPORTS;
  Report = REPORTS[1];
  socialinfo = SOLICIALINFO;
  socialcomments = SOCIALCOMMENTS;
  selectedcomments: Socialcomments;
  user = USER;
  user1 = user1;
  constructor(private http: HttpService) { }

  Initlikecolor() {
    const __this = this;
    const callback = function(result: ApiResult) {
      __this.socialcomments = result.data;
    };
    this.http.get_report_list_by_userid(1, callback);
  }

  changecolor(): void {
    const Like = document.getElementById('change1');
    if (Like.classList.contains('anticon-like-o')) {
      Like.classList.remove('anticon-like-o');
      Like.classList.add('anticon-like');
      Like.style.color = 'blue';
    } else if (Like.classList.contains('anticon-like')) {
      Like.classList.remove('anticon-like');
      Like.classList.add('anticon-like-o');
      Like.style.color = 'rgba(0, 0, 0, 0.65)';
    }
  }

  changecolor2(comment: Socialcomments): void {
    this.selectedcomments = comment;
    if (this.selectedcomments.likeo) {
      this.selectedcomments.likeo = false;
    } else {
      this.selectedcomments.likeo = true;
    }
  }



  ngOnInit() {

  }
}
