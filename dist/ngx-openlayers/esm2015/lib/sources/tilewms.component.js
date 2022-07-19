var SourceTileWMSComponent_1;
import { __decorate, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileWMS } from 'ol/source';
let SourceTileWMSComponent = SourceTileWMSComponent_1 = class SourceTileWMSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
};
SourceTileWMSComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "cacheSize", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "crossOrigin", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "gutter", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "hidpi", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "params", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "projection", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "reprojectionErrorThreshold", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "serverType", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "tileGrid", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "tileLoadFunction", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "url", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "urls", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "wrapX", void 0);
SourceTileWMSComponent = SourceTileWMSComponent_1 = __decorate([
    Component({
        selector: 'aol-source-tilewms',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent_1) }]
    }),
    __param(0, Host())
], SourceTileWMSComponent);
export { SourceTileWMSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3RpbGV3bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFxQixVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBU3BDLElBQWEsc0JBQXNCLDhCQUFuQyxNQUFhLHNCQUF1QixTQUFRLGVBQWU7SUE2QnpELFlBQW9CLEtBQXlCO1FBQzNDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBZDRCLGtCQUFrQix1QkFBaEMsSUFBSTs7QUExQmpCO0lBREMsS0FBSyxFQUFFO3lEQUNVO0FBRWxCO0lBREMsS0FBSyxFQUFFOzJEQUNZO0FBRXBCO0lBREMsS0FBSyxFQUFFO3NEQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7cURBQ087QUFFZjtJQURDLEtBQUssRUFBRTtzREFDdUI7QUFFL0I7SUFEQyxLQUFLLEVBQUU7MERBQ1c7QUFFbkI7SUFEQyxLQUFLLEVBQUU7MEVBQzJCO0FBRW5DO0lBREMsS0FBSyxFQUFFOzBEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFO3dEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFO2dFQUN1QjtBQUUvQjtJQURDLEtBQUssRUFBRTttREFDSTtBQUVaO0lBREMsS0FBSyxFQUFFO29EQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7cURBQ087QUEzQkosc0JBQXNCO0lBTGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBc0IsQ0FBQyxFQUFFLENBQUM7S0FDakcsQ0FBQztJQThCYSxXQUFBLElBQUksRUFBRSxDQUFBO0dBN0JSLHNCQUFzQixDQTJDbEM7U0EzQ1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIGZvcndhcmRSZWYsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlV01TIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFRpbGVHcmlkIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdGlsZXdtcycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVRpbGVXTVNDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VUaWxlV01TQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBpbnN0YW5jZTogVGlsZVdNUztcbiAgQElucHV0KClcbiAgY2FjaGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGd1dHRlcjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBoaWRwaTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNlcnZlclR5cGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHVybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB1cmxzOiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlV01TKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlUGFyYW1zKHRoaXMucGFyYW1zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==