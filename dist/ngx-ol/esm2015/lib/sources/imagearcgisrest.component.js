var SourceImageArcGISRestComponent_1;
import { __decorate, __param } from "tslib";
import { Component, EventEmitter, forwardRef, Host, Input, Output, } from '@angular/core';
import ImageArcGISRest from 'ol/source/ImageArcGISRest';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2ltYWdlYXJjZ2lzcmVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxlQUFlLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBV3JELElBQWEsOEJBQThCLHNDQUEzQyxNQUFhLDhCQUErQixTQUFRLGVBQWU7SUFvQmpFLFlBQW9CLEtBQTBCO1FBQzVDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVpOLFVBQUssR0FBRyxHQUFHLENBQUM7UUFLckIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUV0RCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXBELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFJdEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBakI0QixtQkFBbUIsdUJBQWpDLElBQUk7O0FBakJSO0lBQVIsS0FBSyxFQUFFO2tFQUFxQztBQUNwQztJQUFSLEtBQUssRUFBRTsyREFBYTtBQUNaO0lBQVIsS0FBSyxFQUFFO29FQUErQjtBQUM5QjtJQUFSLEtBQUssRUFBRTttRUFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7eUVBQWtDO0FBQ2pDO0lBQVIsS0FBSyxFQUFFOzhEQUErQjtBQUM5QjtJQUFSLEtBQUssRUFBRTs2REFBYTtBQUNaO0lBQVIsS0FBSyxFQUFFO21FQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTs2REFBaUI7QUFHekI7SUFEQyxNQUFNLEVBQUU7c0VBQzZDO0FBRXREO0lBREMsTUFBTSxFQUFFO29FQUMyQztBQUVwRDtJQURDLE1BQU0sRUFBRTtzRUFDNkM7QUFsQjNDLDhCQUE4QjtJQUwxQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0NBQThCLENBQUMsRUFBRSxDQUFDO0tBQ3pHLENBQUM7SUFxQmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtHQXBCUiw4QkFBOEIsQ0FxQzFDO1NBckNZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgSW1hZ2VBcmNHSVNSZXN0IGZyb20gJ29sL3NvdXJjZS9JbWFnZUFyY0dJU1Jlc3QnO1xuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvSW1hZ2UnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9JbWFnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtaW1hZ2VhcmNnaXNyZXN0JyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlSW1hZ2VBcmNHSVNSZXN0Q29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlSW1hZ2VBcmNHSVNSZXN0Q29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBpbnN0YW5jZTogSW1hZ2VBcmNHSVNSZXN0O1xuXG4gIEBJbnB1dCgpIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgYXR0cmlidXRpb25zOiBBdHRyaWJ1dGlvbkxpa2U7XG4gIEBJbnB1dCgpIGNyb3NzT3JpZ2luPzogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZUxvYWRGdW5jdGlvbj86IExvYWRGdW5jdGlvbjtcbiAgQElucHV0KCkgcGFyYW1zPzogeyBbazogc3RyaW5nXTogYW55IH07XG4gIEBJbnB1dCgpIHJhdGlvID0gMS41O1xuICBASW5wdXQoKSByZXNvbHV0aW9ucz86IG51bWJlcltdO1xuICBASW5wdXQoKSB3cmFwWD86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSW1hZ2VBcmNHSVNSZXN0KHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2Fkc3RhcnQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMuaW1hZ2VMb2FkU3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVuZCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5pbWFnZUxvYWRFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZGVycm9yJywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLmltYWdlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSAmJiBjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS51cGRhdGVQYXJhbXModGhpcy5wYXJhbXMpO1xuICAgIH1cbiAgfVxufVxuIl19