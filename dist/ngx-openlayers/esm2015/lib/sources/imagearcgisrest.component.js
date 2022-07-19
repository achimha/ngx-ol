var SourceImageArcGISRestComponent_1;
import { __decorate, __param } from "tslib";
import { Component, EventEmitter, forwardRef, Host, Input, Output, } from '@angular/core';
import { ImageArcGISRest } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
let SourceImageArcGISRestComponent = SourceImageArcGISRestComponent_1 = class SourceImageArcGISRestComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.ratio = 1.5;
        this.imageLoadStart = new EventEmitter();
        this.imageLoadEnd = new EventEmitter();
        this.imageLoadError = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new ImageArcGISRest(this);
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
SourceImageArcGISRestComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceImageArcGISRestComponent.prototype, "projection", void 0);
__decorate([
    Input()
], SourceImageArcGISRestComponent.prototype, "url", void 0);
__decorate([
    Input()
], SourceImageArcGISRestComponent.prototype, "attributions", void 0);
__decorate([
    Input()
], SourceImageArcGISRestComponent.prototype, "crossOrigin", void 0);
__decorate([
    Input()
], SourceImageArcGISRestComponent.prototype, "imageLoadFunction", void 0);
__decorate([
    Input()
], SourceImageArcGISRestComponent.prototype, "params", void 0);
__decorate([
    Input()
], SourceImageArcGISRestComponent.prototype, "ratio", void 0);
__decorate([
    Input()
], SourceImageArcGISRestComponent.prototype, "resolutions", void 0);
__decorate([
    Input()
], SourceImageArcGISRestComponent.prototype, "wrapX", void 0);
__decorate([
    Output()
], SourceImageArcGISRestComponent.prototype, "imageLoadStart", void 0);
__decorate([
    Output()
], SourceImageArcGISRestComponent.prototype, "imageLoadEnd", void 0);
__decorate([
    Output()
], SourceImageArcGISRestComponent.prototype, "imageLoadError", void 0);
SourceImageArcGISRestComponent = SourceImageArcGISRestComponent_1 = __decorate([
    Component({
        selector: 'aol-source-imagearcgisrest',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent_1) }]
    }),
    __param(0, Host())
], SourceImageArcGISRestComponent);
export { SourceImageArcGISRestComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUdMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVdyRCxJQUFhLDhCQUE4QixzQ0FBM0MsTUFBYSw4QkFBK0IsU0FBUSxlQUFlO0lBb0JqRSxZQUFvQixLQUEwQjtRQUM1QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFaTixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBS3JCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFdEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUVwRCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO0lBSXRELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Q0FDRixDQUFBOztZQWpCNEIsbUJBQW1CLHVCQUFqQyxJQUFJOztBQWpCUjtJQUFSLEtBQUssRUFBRTtrRUFBcUM7QUFDcEM7SUFBUixLQUFLLEVBQUU7MkRBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTtvRUFBaUM7QUFDaEM7SUFBUixLQUFLLEVBQUU7bUVBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO3lFQUFrQztBQUNqQztJQUFSLEtBQUssRUFBRTs4REFBK0I7QUFDOUI7SUFBUixLQUFLLEVBQUU7NkRBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTttRUFBd0I7QUFDdkI7SUFBUixLQUFLLEVBQUU7NkRBQWlCO0FBR3pCO0lBREMsTUFBTSxFQUFFO3NFQUM2QztBQUV0RDtJQURDLE1BQU0sRUFBRTtvRUFDMkM7QUFFcEQ7SUFEQyxNQUFNLEVBQUU7c0VBQzZDO0FBbEIzQyw4QkFBOEI7SUFMMUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdDQUE4QixDQUFDLEVBQUUsQ0FBQztLQUN6RyxDQUFDO0lBcUJhLFdBQUEsSUFBSSxFQUFFLENBQUE7R0FwQlIsOEJBQThCLENBcUMxQztTQXJDWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VBcmNHSVNSZXN0IH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkxpa2UgfSBmcm9tICdvbC9zb3VyY2UvU291cmNlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL0ltYWdlJztcbmltcG9ydCB7IEltYWdlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvSW1hZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWltYWdlYXJjZ2lzcmVzdCcsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUltYWdlQXJjR0lTUmVzdENvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IEltYWdlQXJjR0lTUmVzdDtcblxuICBASW5wdXQoKSBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZSB8IHN0cmluZztcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlW107XG4gIEBJbnB1dCgpIGNyb3NzT3JpZ2luPzogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcbiAgQElucHV0KCkgcGFyYW1zPzogeyBbazogc3RyaW5nXTogYW55IH07XG4gIEBJbnB1dCgpIHJhdGlvID0gMS41O1xuICBASW5wdXQoKSByZXNvbHV0aW9ucz86IG51bWJlcltdO1xuICBASW5wdXQoKSB3cmFwWD86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSW1hZ2VBcmNHSVNSZXN0KHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2Fkc3RhcnQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMuaW1hZ2VMb2FkU3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVuZCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5pbWFnZUxvYWRFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVycm9yJywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLmltYWdlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGVQYXJhbXModGhpcy5wYXJhbXMpO1xuICAgIH1cbiAgfVxufVxuIl19