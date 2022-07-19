var SourceVectorComponent_1;
import { __decorate, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
let SourceVectorComponent = SourceVectorComponent_1 = class SourceVectorComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new Vector(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceVectorComponent.ctorParameters = () => [
    { type: LayerVectorComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceVectorComponent.prototype, "overlaps", void 0);
__decorate([
    Input()
], SourceVectorComponent.prototype, "useSpatialIndex", void 0);
__decorate([
    Input()
], SourceVectorComponent.prototype, "wrapX", void 0);
__decorate([
    Input()
], SourceVectorComponent.prototype, "url", void 0);
__decorate([
    Input()
], SourceVectorComponent.prototype, "format", void 0);
__decorate([
    Input()
], SourceVectorComponent.prototype, "strategy", void 0);
SourceVectorComponent = SourceVectorComponent_1 = __decorate([
    Component({
        selector: 'aol-source-vector',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent_1) }]
    }),
    __param(0, Host())
], SourceVectorComponent);
export { SourceVectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvdmVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRckQsSUFBYSxxQkFBcUIsNkJBQWxDLE1BQWEscUJBQXNCLFNBQVEsZUFBZTtJQWV4RCxZQUFvQixLQUEyQjtRQUM3QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTs7WUFSNEIsb0JBQW9CLHVCQUFsQyxJQUFJOztBQVpqQjtJQURDLEtBQUssRUFBRTt1REFDVTtBQUVsQjtJQURDLEtBQUssRUFBRTs4REFDaUI7QUFFekI7SUFEQyxLQUFLLEVBQUU7b0RBQ087QUFFZjtJQURDLEtBQUssRUFBRTtrREFDSTtBQUVaO0lBREMsS0FBSyxFQUFFO3FEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFO3VEQUNrQjtBQWJmLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXFCLENBQUMsRUFBRSxDQUFDO0tBQ2hHLENBQUM7SUFnQmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtHQWZSLHFCQUFxQixDQXVCakM7U0F2QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nU3RyYXRlZ3kgfSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS12ZWN0b3InLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VWZWN0b3JDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VWZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogVmVjdG9yO1xuICBASW5wdXQoKVxuICBvdmVybGFwczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdXNlU3BhdGlhbEluZGV4OiBib29sZWFuO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGZvcm1hdDogRmVhdHVyZTtcbiAgQElucHV0KClcbiAgc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==