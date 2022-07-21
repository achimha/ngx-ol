import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
var SourceVectorComponent = /** @class */ (function (_super) {
    __extends(SourceVectorComponent, _super);
    function SourceVectorComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceVectorComponent_1 = SourceVectorComponent;
    SourceVectorComponent.prototype.ngOnInit = function () {
        this.instance = new Vector(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceVectorComponent_1;
    SourceVectorComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
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
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceVectorComponent);
    return SourceVectorComponent;
}(SourceComponent));
export { SourceVectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhY2hpbWhhL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRckQ7SUFBMkMseUNBQWU7SUFleEQsK0JBQW9CLEtBQTJCO2VBQzdDLGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7OEJBakJVLHFCQUFxQjtJQW1CaEMsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Z0JBUDBCLG9CQUFvQix1QkFBbEMsSUFBSTs7SUFaakI7UUFEQyxLQUFLLEVBQUU7MkRBQ1U7SUFFbEI7UUFEQyxLQUFLLEVBQUU7a0VBQ2lCO0lBRXpCO1FBREMsS0FBSyxFQUFFO3dEQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7c0RBQ0k7SUFFWjtRQURDLEtBQUssRUFBRTt5REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTsyREFDa0I7SUFiZixxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx1QkFBcUIsRUFBckIsQ0FBcUIsQ0FBQyxFQUFFLENBQUM7U0FDaEcsQ0FBQztRQWdCYSxXQUFBLElBQUksRUFBRSxDQUFBO09BZlIscUJBQXFCLENBdUJqQztJQUFELDRCQUFDO0NBQUEsQUF2QkQsQ0FBMkMsZUFBZSxHQXVCekQ7U0F2QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkaW5nU3RyYXRlZ3kgfSBmcm9tICdvbC9zb3VyY2UvVmVjdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS12ZWN0b3InLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VWZWN0b3JDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VWZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogVmVjdG9yO1xuICBASW5wdXQoKVxuICBvdmVybGFwczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdXNlU3BhdGlhbEluZGV4OiBib29sZWFuO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGZvcm1hdDogRmVhdHVyZTtcbiAgQElucHV0KClcbiAgc3RyYXRlZ3k6IExvYWRpbmdTdHJhdGVneTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==