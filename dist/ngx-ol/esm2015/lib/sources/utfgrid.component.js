var SourceUTFGridComponent_1;
import { __decorate, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { UTFGrid } from 'ol/source';
let SourceUTFGridComponent = SourceUTFGridComponent_1 = class SourceUTFGridComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceUTFGridComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceUTFGridComponent.prototype, "tileJSON", void 0);
__decorate([
    Input()
], SourceUTFGridComponent.prototype, "url", void 0);
SourceUTFGridComponent = SourceUTFGridComponent_1 = __decorate([
    Component({
        selector: 'aol-source-utfgrid',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent_1) }]
    }),
    __param(0, Host())
], SourceUTFGridComponent);
export { SourceUTFGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRmZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy91dGZncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFPcEMsSUFBYSxzQkFBc0IsOEJBQW5DLE1BQWEsc0JBQXVCLFNBQVEsZUFBZTtJQUt6RCxZQUFvQixLQUF5QjtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTs7WUFSNEIsa0JBQWtCLHVCQUFoQyxJQUFJOztBQUhSO0lBQVIsS0FBSyxFQUFFO3dEQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO21EQUFhO0FBSFYsc0JBQXNCO0lBTGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBc0IsQ0FBQyxFQUFFLENBQUM7S0FDakcsQ0FBQztJQU1hLFdBQUEsSUFBSSxFQUFFLENBQUE7R0FMUixzQkFBc0IsQ0FhbEM7U0FiWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVVEZHcmlkIH0gZnJvbSAnb2wvc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS11dGZncmlkJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVVRGR3JpZENvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVVURkdyaWRDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogVVRGR3JpZDtcbiAgQElucHV0KCkgdGlsZUpTT046IEpTT047XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVVRGR3JpZCh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=