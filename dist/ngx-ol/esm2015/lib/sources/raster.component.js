import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Output, } from '@angular/core';
import { Raster } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
export class SourceRasterComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.beforeOperations = new EventEmitter();
        this.afterOperations = new EventEmitter();
        this.sources = [];
    }
    set source(sourceComponent) {
        this.sources = [sourceComponent.instance];
        if (this.instance) {
            // Openlayer doesn't handle sources update. Just recreate Raster instance.
            this.init();
        }
    }
    ngAfterContentInit() {
        this.init();
    }
    init() {
        this.instance = new Raster(this);
        this.instance.on('beforeoperations', (event) => this.beforeOperations.emit(event));
        this.instance.on('afteroperations', (event) => this.afterOperations.emit(event));
        this._register(this.instance);
    }
}
SourceRasterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-raster',
                template: ` <ng-content></ng-content> `,
                providers: [
                    {
                        provide: SourceComponent,
                        useExisting: forwardRef(() => SourceRasterComponent),
                    },
                ]
            },] }
];
SourceRasterComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
SourceRasterComponent.propDecorators = {
    operation: [{ type: Input }],
    threads: [{ type: Input }],
    lib: [{ type: Input }],
    operationType: [{ type: Input }],
    beforeOperations: [{ type: Output }],
    afterOperations: [{ type: Output }],
    source: [{ type: ContentChild, args: [SourceComponent, { static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoaW1oYS9Qcm9qZWN0cy9uZ3gtb2wvcHJvamVjdHMvbmd4LW9sL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3Jhc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFVLE1BQU0sV0FBVyxDQUFDO0FBRzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVlyRCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTtJQTRCeEQsWUFBb0IsS0FBMEI7UUFDNUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBaEJmLHFCQUFnQixHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUUxRixvQkFBZSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUV6RixZQUFPLEdBQWEsRUFBRSxDQUFDO0lBYXZCLENBQUM7SUFYRCxJQUNJLE1BQU0sQ0FBQyxlQUFnQztRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQiwwRUFBMEU7WUFDMUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBTUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7cUJBQ3JEO2lCQUNGO2FBQ0Y7OztZQVpRLG1CQUFtQix1QkF5Q2IsSUFBSTs7O3dCQXpCaEIsS0FBSztzQkFFTCxLQUFLO2tCQUVMLEtBQUs7NEJBRUwsS0FBSzsrQkFHTCxNQUFNOzhCQUVOLE1BQU07cUJBS04sWUFBWSxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhc3RlciwgU291cmNlIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IE9wZXJhdGlvbiwgUmFzdGVyU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvUmFzdGVyJztcblxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXJhc3RlcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlUmFzdGVyQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgaW5zdGFuY2U6IFJhc3RlcjtcblxuICBASW5wdXQoKVxuICBvcGVyYXRpb24/OiBPcGVyYXRpb247XG4gIEBJbnB1dCgpXG4gIHRocmVhZHM/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGxpYj86IGFueTtcbiAgQElucHV0KClcbiAgb3BlcmF0aW9uVHlwZT86ICdwaXhlbCcgfCAnaW1hZ2UnO1xuXG4gIEBPdXRwdXQoKVxuICBiZWZvcmVPcGVyYXRpb25zOiBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGFmdGVyT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XG5cbiAgc291cmNlczogU291cmNlW10gPSBbXTtcblxuICBAQ29udGVudENoaWxkKFNvdXJjZUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHNldCBzb3VyY2Uoc291cmNlQ29tcG9uZW50OiBTb3VyY2VDb21wb25lbnQpIHtcbiAgICB0aGlzLnNvdXJjZXMgPSBbc291cmNlQ29tcG9uZW50Lmluc3RhbmNlXTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgLy8gT3BlbmxheWVyIGRvZXNuJ3QgaGFuZGxlIHNvdXJjZXMgdXBkYXRlLiBKdXN0IHJlY3JlYXRlIFJhc3RlciBpbnN0YW5jZS5cbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUmFzdGVyKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2JlZm9yZW9wZXJhdGlvbnMnLCAoZXZlbnQ6IFJhc3RlclNvdXJjZUV2ZW50KSA9PiB0aGlzLmJlZm9yZU9wZXJhdGlvbnMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2FmdGVyb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYWZ0ZXJPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19