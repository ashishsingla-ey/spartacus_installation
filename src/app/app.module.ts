import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule, defaultCmsContentConfig } from '@spartacus/storefront';
import { FooterNavigationComponentCustomComponent } from './footer-navigation-component-custom/footer-navigation-component-custom.component';
import { ConfigModule } from '@spartacus/core';
import { CxInnerFooterComponent } from './cx-inner-footer/cx-inner-footer.component';
import { InnerCustomComponentComponent } from './inner-custom-component/inner-custom-component.component';
import { FooterNavigationComponentCustomComponent2Component } from './footer-navigation-component-custom-component2/footer-navigation-component-custom-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterNavigationComponentCustomComponent,
    CxInnerFooterComponent,
    InnerCustomComponentComponent,
    FooterNavigationComponentCustomComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: environment.baseUrl,
          prefix: '/rest/v2/'
        }
      },
      authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret'
      },
      context: {
        baseSite: ['electronics'
        ,'apparel-uk', 'apparel-de'
      ],
        language: ['en', 'de'],
        currency: ['USD', 'GBP', 'EUR'],
        urlParameters: ['baseSite','language','currency']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      // features: {
      //   level: '1.3',
      //   anonymousConsents: false
      // }
    }),    
    ConfigModule.withConfig({
      cmsComponents: {
        // FooterNavigationComponent: {
        //   component: FooterNavigationComponentCustomComponent //The class of your Angular component
        // }
      },
    }),
    ConfigModule.withConfigFactory(defaultCmsContentConfig)
  ],
  entryComponents: [
    FooterNavigationComponentCustomComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
