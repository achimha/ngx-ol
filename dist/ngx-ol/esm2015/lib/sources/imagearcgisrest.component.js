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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VhcmNnaXNyZXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2ltYWdlYXJjZ2lzcmVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFHTCxNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFXckQsSUFBYSw4QkFBOEIsc0NBQTNDLE1BQWEsOEJBQStCLFNBQVEsZUFBZTtJQW9CakUsWUFBb0IsS0FBMEI7UUFDNUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBWk4sVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUtyQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXRELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFFcEQsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztJQUl0RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFqQjRCLG1CQUFtQix1QkFBakMsSUFBSTs7QUFqQlI7SUFBUixLQUFLLEVBQUU7a0VBQXFDO0FBQ3BDO0lBQVIsS0FBSyxFQUFFOzJEQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7b0VBQWlDO0FBQ2hDO0lBQVIsS0FBSyxFQUFFO21FQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTt5RUFBa0M7QUFDakM7SUFBUixLQUFLLEVBQUU7OERBQStCO0FBQzlCO0lBQVIsS0FBSyxFQUFFOzZEQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7bUVBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFOzZEQUFpQjtBQUd6QjtJQURDLE1BQU0sRUFBRTtzRUFDNkM7QUFFdEQ7SUFEQyxNQUFNLEVBQUU7b0VBQzJDO0FBRXBEO0lBREMsTUFBTSxFQUFFO3NFQUM2QztBQWxCM0MsOEJBQThCO0lBTDFDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQ0FBOEIsQ0FBQyxFQUFFLENBQUM7S0FDekcsQ0FBQztJQXFCYSxXQUFBLElBQUksRUFBRSxDQUFBO0dBcEJSLDhCQUE4QixDQXFDMUM7U0FyQ1ksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlQXJjR0lTUmVzdCB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9JbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL0ltYWdlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1pbWFnZWFyY2dpc3Jlc3QnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VJbWFnZUFyY0dJU1Jlc3RDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VJbWFnZUFyY0dJU1Jlc3RDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGluc3RhbmNlOiBJbWFnZUFyY0dJU1Jlc3Q7XG5cbiAgQElucHV0KCkgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2UgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZVtdO1xuICBASW5wdXQoKSBjcm9zc09yaWdpbj86IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpIHBhcmFtcz86IHsgW2s6IHN0cmluZ106IGFueSB9O1xuICBASW5wdXQoKSByYXRpbyA9IDEuNTtcbiAgQElucHV0KCkgcmVzb2x1dGlvbnM/OiBudW1iZXJbXTtcbiAgQElucHV0KCkgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBpbWFnZUxvYWRTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZEVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEltYWdlQXJjR0lTUmVzdCh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ltYWdlbG9hZHN0YXJ0JywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLmltYWdlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlbmQnLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMuaW1hZ2VMb2FkRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRlcnJvcicsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5pbWFnZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlUGFyYW1zKHRoaXMucGFyYW1zKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==