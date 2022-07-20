var SourceImageWMSComponent_1;
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef, Output, EventEmitter, } from '@angular/core';
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
let SourceImageWMSComponent = SourceImageWMSComponent_1 = class SourceImageWMSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new ImageWMS(this);
        this.host.instance.setSource(this.instance);
        this.instance.on('imageloadstart', (event) => this.imageLoadStart.emit(event));
        this.instance.on('imageloadend', (event) => this.imageLoadEnd.emit(event));
        this.instance.on('imageloaderror', (event) => this.imageLoadError.emit(event));
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
};
SourceImageWMSComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
tslib_1.__decorate([
    Input()
], SourceImageWMSComponent.prototype, "attributions", void 0);
tslib_1.__decorate([
    Input()
], SourceImageWMSComponent.prototype, "crossOrigin", void 0);
tslib_1.__decorate([
    Input()
], SourceImageWMSComponent.prototype, "hidpi", void 0);
tslib_1.__decorate([
    Input()
], SourceImageWMSComponent.prototype, "serverType", void 0);
tslib_1.__decorate([
    Input()
], SourceImageWMSComponent.prototype, "imageLoadFunction", void 0);
tslib_1.__decorate([
    Input()
], SourceImageWMSComponent.prototype, "params", void 0);
tslib_1.__decorate([
    Input()
], SourceImageWMSComponent.prototype, "projection", void 0);
tslib_1.__decorate([
    Input()
], SourceImageWMSComponent.prototype, "ratio", void 0);
tslib_1.__decorate([
    Input()
], SourceImageWMSComponent.prototype, "resolutions", void 0);
tslib_1.__decorate([
    Input()
], SourceImageWMSComponent.prototype, "url", void 0);
tslib_1.__decorate([
    Output()
], SourceImageWMSComponent.prototype, "imageLoadStart", void 0);
tslib_1.__decorate([
    Output()
], SourceImageWMSComponent.prototype, "imageLoadEnd", void 0);
tslib_1.__decorate([
    Output()
], SourceImageWMSComponent.prototype, "imageLoadError", void 0);
SourceImageWMSComponent = SourceImageWMSComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'aol-source-imagewms',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent_1) }]
    }),
    tslib_1.__param(0, Host())
], SourceImageWMSComponent);
export { SourceImageWMSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2V3bXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvaW1hZ2V3bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxFQUdMLFVBQVUsRUFFVixNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWXJELElBQWEsdUJBQXVCLCtCQUFwQyxNQUFhLHVCQUF3QixTQUFRLGVBQWU7SUErQjFELFlBQW9CLEtBQTBCO1FBQzVDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVBmLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFdEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUVwRCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO0lBSXRELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Q0FDRixDQUFBOztZQWpCNEIsbUJBQW1CLHVCQUFqQyxJQUFJOztBQTNCakI7SUFEQyxLQUFLLEVBQUU7NkRBQ3NCO0FBRTlCO0lBREMsS0FBSyxFQUFFOzREQUNZO0FBRXBCO0lBREMsS0FBSyxFQUFFO3NEQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7MkRBQ2U7QUFFdkI7SUFEQyxLQUFLLEVBQUU7a0VBQ3lCO0FBRWpDO0lBREMsS0FBSyxFQUFFO3VEQUN1QjtBQUUvQjtJQURDLEtBQUssRUFBRTsyREFDNEI7QUFFcEM7SUFEQyxLQUFLLEVBQUU7c0RBQ007QUFFZDtJQURDLEtBQUssRUFBRTs0REFDbUI7QUFFM0I7SUFEQyxLQUFLLEVBQUU7b0RBQ0k7QUFHWjtJQURDLE1BQU0sRUFBRTsrREFDNkM7QUFFdEQ7SUFEQyxNQUFNLEVBQUU7NkRBQzJDO0FBRXBEO0lBREMsTUFBTSxFQUFFOytEQUM2QztBQTdCM0MsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBdUIsQ0FBQyxFQUFFLENBQUM7S0FDbEcsQ0FBQztJQWdDYSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtHQS9CUix1QkFBdUIsQ0FnRG5DO1NBaERZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVdNUyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9JbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL0ltYWdlJztcbmltcG9ydCB7IFNlcnZlclR5cGUgfSBmcm9tICdvbC9zb3VyY2Uvd21zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1pbWFnZXdtcycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlV01TQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlSW1hZ2VXTVNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBJbWFnZVdNUztcblxuICBASW5wdXQoKVxuICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcbiAgQElucHV0KClcbiAgaGlkcGk6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNlcnZlclR5cGU6IFNlcnZlclR5cGU7XG4gIEBJbnB1dCgpXG4gIGltYWdlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICByYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXNvbHV0aW9uczogQXJyYXk8bnVtYmVyPjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSW1hZ2VXTVModGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRzdGFydCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5pbWFnZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZW5kJywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLmltYWdlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZXJyb3InLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMuaW1hZ2VMb2FkRXJyb3IuZW1pdChldmVudCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XG4gICAgfVxuICB9XG59XG4iXX0=