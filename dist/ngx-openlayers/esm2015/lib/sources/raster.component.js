var SourceRasterComponent_1;
import { __decorate, __param } from "tslib";
import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Output, } from '@angular/core';
import { Raster } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
let SourceRasterComponent = SourceRasterComponent_1 = class SourceRasterComponent extends SourceComponent {
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
};
SourceRasterComponent.ctorParameters = () => [
    { type: LayerImageComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceRasterComponent.prototype, "operation", void 0);
__decorate([
    Input()
], SourceRasterComponent.prototype, "threads", void 0);
__decorate([
    Input()
], SourceRasterComponent.prototype, "lib", void 0);
__decorate([
    Input()
], SourceRasterComponent.prototype, "operationType", void 0);
__decorate([
    Output()
], SourceRasterComponent.prototype, "beforeOperations", void 0);
__decorate([
    Output()
], SourceRasterComponent.prototype, "afterOperations", void 0);
__decorate([
    ContentChild(SourceComponent)
], SourceRasterComponent.prototype, "source", null);
SourceRasterComponent = SourceRasterComponent_1 = __decorate([
    Component({
        selector: 'aol-source-raster',
        template: ` <ng-content></ng-content> `,
        providers: [
            {
                provide: SourceComponent,
                useExisting: forwardRef(() => SourceRasterComponent_1),
            },
        ]
    }),
    __param(0, Host())
], SourceRasterComponent);
export { SourceRasterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvcmFzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBVSxNQUFNLFdBQVcsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFZckQsSUFBYSxxQkFBcUIsNkJBQWxDLE1BQWEscUJBQXNCLFNBQVEsZUFBZTtJQTRCeEQsWUFBb0IsS0FBMEI7UUFDNUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBaEJmLHFCQUFnQixHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUUxRixvQkFBZSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUV6RixZQUFPLEdBQWEsRUFBRSxDQUFDO0lBYXZCLENBQUM7SUFWRCxJQUFJLE1BQU0sQ0FBQyxlQUFnQztRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQiwwRUFBMEU7WUFDMUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBTUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGLENBQUE7O1lBZDRCLG1CQUFtQix1QkFBakMsSUFBSTs7QUF4QmpCO0lBREMsS0FBSyxFQUFFO3dEQUNjO0FBRXRCO0lBREMsS0FBSyxFQUFFO3NEQUNTO0FBRWpCO0lBREMsS0FBSyxFQUFFO2tEQUNFO0FBRVY7SUFEQyxLQUFLLEVBQUU7NERBQzRCO0FBR3BDO0lBREMsTUFBTSxFQUFFOytEQUNpRjtBQUUxRjtJQURDLE1BQU0sRUFBRTs4REFDZ0Y7QUFLekY7SUFEQyxZQUFZLENBQUMsZUFBZSxDQUFDO21EQU83QjtBQTFCVSxxQkFBcUI7SUFWakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLFNBQVMsRUFBRTtZQUNUO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUFxQixDQUFDO2FBQ3JEO1NBQ0Y7S0FDRixDQUFDO0lBNkJhLFdBQUEsSUFBSSxFQUFFLENBQUE7R0E1QlIscUJBQXFCLENBMENqQztTQTFDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhc3RlciwgU291cmNlIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IE9wZXJhdGlvbiwgUmFzdGVyT3BlcmF0aW9uVHlwZSwgUmFzdGVyU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvUmFzdGVyJztcblxuaW1wb3J0IHsgTGF5ZXJJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcmltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXJhc3RlcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlUmFzdGVyQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VSYXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgaW5zdGFuY2U6IFJhc3RlcjtcblxuICBASW5wdXQoKVxuICBvcGVyYXRpb24/OiBPcGVyYXRpb247XG4gIEBJbnB1dCgpXG4gIHRocmVhZHM/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGxpYj86IGFueTtcbiAgQElucHV0KClcbiAgb3BlcmF0aW9uVHlwZT86IFJhc3Rlck9wZXJhdGlvblR5cGU7XG5cbiAgQE91dHB1dCgpXG4gIGJlZm9yZU9wZXJhdGlvbnM6IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgYWZ0ZXJPcGVyYXRpb25zOiBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4oKTtcblxuICBzb3VyY2VzOiBTb3VyY2VbXSA9IFtdO1xuXG4gIEBDb250ZW50Q2hpbGQoU291cmNlQ29tcG9uZW50KVxuICBzZXQgc291cmNlKHNvdXJjZUNvbXBvbmVudDogU291cmNlQ29tcG9uZW50KSB7XG4gICAgdGhpcy5zb3VyY2VzID0gW3NvdXJjZUNvbXBvbmVudC5pbnN0YW5jZV07XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIC8vIE9wZW5sYXllciBkb2Vzbid0IGhhbmRsZSBzb3VyY2VzIHVwZGF0ZS4gSnVzdCByZWNyZWF0ZSBSYXN0ZXIgaW5zdGFuY2UuXG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllckltYWdlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFJhc3Rlcih0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdiZWZvcmVvcGVyYXRpb25zJywgKGV2ZW50OiBSYXN0ZXJTb3VyY2VFdmVudCkgPT4gdGhpcy5iZWZvcmVPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdhZnRlcm9wZXJhdGlvbnMnLCAoZXZlbnQ6IFJhc3RlclNvdXJjZUV2ZW50KSA9PiB0aGlzLmFmdGVyT3BlcmF0aW9ucy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5fcmVnaXN0ZXIodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==