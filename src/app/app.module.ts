import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AgGridAngular } from 'ag-grid-angular';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { UsersComponent } from './pages/users/users.component';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';

import { WrapInDivDirective } from './directives/wrap-in-div.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { AmountSuffixPipe } from './pipes/amount-suffix.pipe';

import {
  ModuleRegistry,
  AllCommunityModule,
  provideGlobalGridOptions,
} from 'ag-grid-community';
import { headerInterceptor } from './services/header.interceptor';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { UserDisplayComponent } from './pages/user-display/user-display.component';
import { InvestmentResultsComponent } from './pages/investment-results/investment-results.component';
import { InvestmentInputComponent } from './pages/investment-input/investment-input.component';
import { CustomLibComponent } from 'custom-lib';

// Register all community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Mark all grids as using legacy themes
provideGlobalGridOptions({ theme: 'legacy' });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    WrapInDivDirective,
    HighlightDirective,
    AmountSuffixPipe,
    DynamicCardComponent,
    SignalsComponent,
    RxjsComponent,
    UsersComponent,
    UserAddComponent,
    UserDisplayComponent,
    InvestmentResultsComponent,
    InvestmentInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AgGridAngular,
    CustomLibComponent,
    CollapseModule.forRoot(),
  ],
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([headerInterceptor]))
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
