import { Component, Host, Input, forwardRef, Output, EventEmitter, } from '@angular/core';
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
export class SourceImageWMSComponent extends SourceComponent {
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
}
SourceImageWMSComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-imagewms',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }]
            },] }
];
SourceImageWMSComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
SourceImageWMSComponent.propDecorators = {
    attributions: [{ type: Input }],
    crossOrigin: [{ type: Input }],
    hidpi: [{ type: Input }],
    serverType: [{ type: Input }],
    imageLoadFunction: [{ type: Input }],
    params: [{ type: Input }],
    projection: [{ type: Input }],
    ratio: [{ type: Input }],
    resolutions: [{ type: Input }],
    url: [{ type: Input }],
    imageLoadStart: [{ type: Output }],
    imageLoadEnd: [{ type: Output }],
    imageLoadError: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2V3bXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2hpbWhhL1Byb2plY3RzL25neC1vbC9wcm9qZWN0cy9uZ3gtb2wvc3JjLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvaW1hZ2V3bXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEtBQUssRUFHTCxVQUFVLEVBRVYsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVlyRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZUFBZTtJQStCMUQsWUFBb0IsS0FBMEI7UUFDNUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUGYsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUV0RCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBRXBELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFJdEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQXVCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUM7YUFDbEc7OztZQVpRLG1CQUFtQix1QkE0Q2IsSUFBSTs7OzJCQTVCaEIsS0FBSzswQkFFTCxLQUFLO29CQUVMLEtBQUs7eUJBRUwsS0FBSztnQ0FFTCxLQUFLO3FCQUVMLEtBQUs7eUJBRUwsS0FBSztvQkFFTCxLQUFLOzBCQUVMLEtBQUs7a0JBRUwsS0FBSzs2QkFHTCxNQUFNOzJCQUVOLE1BQU07NkJBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZVdNUyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9JbWFnZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL0ltYWdlJztcbmltcG9ydCB7IFNlcnZlclR5cGUgfSBmcm9tICdvbC9zb3VyY2Uvd21zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1pbWFnZXdtcycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUltYWdlV01TQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlSW1hZ2VXTVNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBJbWFnZVdNUztcblxuICBASW5wdXQoKVxuICBhdHRyaWJ1dGlvbnM6IEF0dHJpYnV0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcbiAgQElucHV0KClcbiAgaGlkcGk6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNlcnZlclR5cGU6IFNlcnZlclR5cGU7XG4gIEBJbnB1dCgpXG4gIGltYWdlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICByYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXNvbHV0aW9uczogQXJyYXk8bnVtYmVyPjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIGltYWdlTG9hZFN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgaW1hZ2VMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJJbWFnZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSW1hZ2VXTVModGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdpbWFnZWxvYWRzdGFydCcsIChldmVudDogSW1hZ2VTb3VyY2VFdmVudCkgPT4gdGhpcy5pbWFnZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZW5kJywgKGV2ZW50OiBJbWFnZVNvdXJjZUV2ZW50KSA9PiB0aGlzLmltYWdlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignaW1hZ2Vsb2FkZXJyb3InLCAoZXZlbnQ6IEltYWdlU291cmNlRXZlbnQpID0+IHRoaXMuaW1hZ2VMb2FkRXJyb3IuZW1pdChldmVudCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XG4gICAgfVxuICB9XG59XG4iXX0=