import { NgModule } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { PandaComponent } from './panda/panda.component';
import { OthersReportComponent } from './others-report/others-report.component';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import en from '@angular/common/locales/en';
import { UserInfoProfileComponent } from './user-info-profile/user-info-profile.component';
registerLocaleData(en);

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    PandaComponent,
    OthersReportComponent,
    UserInfoProfileComponent
  ],
  // 公用导出组件放在exports数组内
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [
    PandaComponent,
    UserInfoProfileComponent
  ]
})
export class ShareModule { }
