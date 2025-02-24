import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class CustomLibService {
    getGreeting() {
        return 'Hello from SimpleLib Service!';
    }
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.7", ngImport: i0, type: CustomLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.7", ngImport: i0, type: CustomLibService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.7", ngImport: i0, type: CustomLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class CustomLibComponent {
    greeting = 'Hello from CustomLib (standalone)!';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.7", ngImport: i0, type: CustomLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.7", type: CustomLibComponent, isStandalone: true, selector: "lib-custom-lib", ngImport: i0, template: `
    <div class="card block mt-5">
      <div class="card-header">Custom Library Component</div>
      <div class="card-body">
        <p>{{ greeting }}</p>
      </div>
    </div>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.7", ngImport: i0, type: CustomLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-custom-lib', imports: [], template: `
    <div class="card block mt-5">
      <div class="card-header">Custom Library Component</div>
      <div class="card-body">
        <p>{{ greeting }}</p>
      </div>
    </div>
  ` }]
        }] });

/*
 * Public API Surface of custom-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CustomLibComponent, CustomLibService };
//# sourceMappingURL=custom-lib.mjs.map
