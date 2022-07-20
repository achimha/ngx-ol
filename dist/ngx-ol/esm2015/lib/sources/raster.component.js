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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3Jhc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQVUsTUFBTSxXQUFXLENBQUM7QUFHM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWXJELElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFzQixTQUFRLGVBQWU7SUE0QnhELFlBQW9CLEtBQTBCO1FBQzVDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQWhCZixxQkFBZ0IsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFMUYsb0JBQWUsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFFekYsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQWF2QixDQUFDO0lBVkQsSUFBSSxNQUFNLENBQUMsZUFBZ0M7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsMEVBQTBFO1lBQzFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQU1ELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRixDQUFBOztZQWQ0QixtQkFBbUIsdUJBQWpDLElBQUk7O0FBeEJqQjtJQURDLEtBQUssRUFBRTt3REFDYztBQUV0QjtJQURDLEtBQUssRUFBRTtzREFDUztBQUVqQjtJQURDLEtBQUssRUFBRTtrREFDRTtBQUVWO0lBREMsS0FBSyxFQUFFOzREQUMwQjtBQUdsQztJQURDLE1BQU0sRUFBRTsrREFDaUY7QUFFMUY7SUFEQyxNQUFNLEVBQUU7OERBQ2dGO0FBS3pGO0lBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQzttREFPN0I7QUExQlUscUJBQXFCO0lBVmpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBcUIsQ0FBQzthQUNyRDtTQUNGO0tBQ0YsQ0FBQztJQTZCYSxXQUFBLElBQUksRUFBRSxDQUFBO0dBNUJSLHFCQUFxQixDQTBDakM7U0ExQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSYXN0ZXIsIFNvdXJjZSB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBPcGVyYXRpb24sIFJhc3RlclNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1Jhc3Rlcic7XG5cbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1yYXN0ZXInLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVJhc3RlckNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlUmFzdGVyQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIGluc3RhbmNlOiBSYXN0ZXI7XG5cbiAgQElucHV0KClcbiAgb3BlcmF0aW9uPzogT3BlcmF0aW9uO1xuICBASW5wdXQoKVxuICB0aHJlYWRzPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBsaWI/OiBhbnk7XG4gIEBJbnB1dCgpXG4gIG9wZXJhdGlvblR5cGU/OiAncGl4ZWwnIHwgJ2ltYWdlJztcblxuICBAT3V0cHV0KClcbiAgYmVmb3JlT3BlcmF0aW9uczogRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBhZnRlck9wZXJhdGlvbnM6IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFJhc3RlclNvdXJjZUV2ZW50PigpO1xuXG4gIHNvdXJjZXM6IFNvdXJjZVtdID0gW107XG5cbiAgQENvbnRlbnRDaGlsZChTb3VyY2VDb21wb25lbnQpXG4gIHNldCBzb3VyY2Uoc291cmNlQ29tcG9uZW50OiBTb3VyY2VDb21wb25lbnQpIHtcbiAgICB0aGlzLnNvdXJjZXMgPSBbc291cmNlQ29tcG9uZW50Lmluc3RhbmNlXTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgLy8gT3BlbmxheWVyIGRvZXNuJ3QgaGFuZGxlIHNvdXJjZXMgdXBkYXRlLiBKdXN0IHJlY3JlYXRlIFJhc3RlciBpbnN0YW5jZS5cbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVySW1hZ2VDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUmFzdGVyKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2JlZm9yZW9wZXJhdGlvbnMnLCAoZXZlbnQ6IFJhc3RlclNvdXJjZUV2ZW50KSA9PiB0aGlzLmJlZm9yZU9wZXJhdGlvbnMuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2FmdGVyb3BlcmF0aW9ucycsIChldmVudDogUmFzdGVyU291cmNlRXZlbnQpID0+IHRoaXMuYWZ0ZXJPcGVyYXRpb25zLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19