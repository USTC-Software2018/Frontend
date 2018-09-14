import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './route/route.module';
import { EditorModule } from './editor/editor.module';
import { ErrorModule } from './error/error.module';
import { Error404Component } from './error/error404/error404.component';
import { ReportshowComponent } from './reportshow/reportshow.component';
import { UserSetModule } from './user-set/user-set.module';

import { ProfileModule} from './profile/profile.module';
import { ReportshowotherComponent } from './reportshow/reportshowother/reportshowother.component';
import { ShareModule } from './share/share.module';
import { FeedsComponent } from './core/feeds/feeds.component';
import { IndexComponent } from './core/index/index.component';
import { HttpExampleComponent } from './http-example/http-example.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReportshowComponent,
    ReportshowotherComponent,
    FeedsComponent,
    IndexComponent,
    HttpExampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    UserSetModule,
    NgZorroAntdModule,
    AppRoutingModule,
    EditorModule,
    ErrorModule,
    ReactiveFormsModule,
    ProfileModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
