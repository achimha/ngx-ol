import { __decorate, __extends, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { MapComponent } from '../map.component';
import { Vector } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
var LayerVectorComponent = /** @class */ (function (_super) {
    __extends(LayerVectorComponent, _super);
    function LayerVectorComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerVectorComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.Vector instance with:', this);
        this.instance = new Vector(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerVectorComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerVectorComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input()
    ], LayerVectorComponent.prototype, "renderBuffer", void 0);
    __decorate([
        Input()
    ], LayerVectorComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], LayerVectorComponent.prototype, "updateWhileAnimating", void 0);
    __decorate([
        Input()
    ], LayerVectorComponent.prototype, "updateWhileInteracting", void 0);
    LayerVectorComponent = __decorate([
        Component({
            selector: 'aol-layer-vector',
            template: " <ng-content></ng-content> "
        }),
        __param(1, Optional())
    ], LayerVectorComponent);
    return LayerVectorComponent;
}(LayerComponent));
export { LayerVectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxRQUFRLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2xDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU03RDtJQUEwQyx3Q0FBYztJQWV0RCw4QkFBWSxHQUFpQixFQUFjLEtBQTJCO2VBQ3BFLGtCQUFNLEtBQUssSUFBSSxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDRSxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFaZ0IsWUFBWTtnQkFBc0IsbUJBQW1CLHVCQUF0QyxRQUFROztJQVh4QztRQURDLEtBQUssRUFBRTs4REFDYTtJQUdyQjtRQURDLEtBQUssRUFBRTt1REFDK0I7SUFHdkM7UUFEQyxLQUFLLEVBQUU7c0VBQ3NCO0lBRzlCO1FBREMsS0FBSyxFQUFFO3dFQUN3QjtJQWJyQixvQkFBb0I7UUFKaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFnQmdDLFdBQUEsUUFBUSxFQUFFLENBQUE7T0FmL0Isb0JBQW9CLENBNEJoQztJQUFELDJCQUFDO0NBQUEsQUE1QkQsQ0FBMEMsY0FBYyxHQTRCdkQ7U0E1Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQsIE9wdGlvbmFsLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1sYXllci12ZWN0b3InLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIExheWVyVmVjdG9yQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHVibGljIHNvdXJjZTogVmVjdG9yO1xuXG4gIEBJbnB1dCgpXG4gIHJlbmRlckJ1ZmZlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHN0eWxlOiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuXG4gIEBJbnB1dCgpXG4gIHVwZGF0ZVdoaWxlQW5pbWF0aW5nOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHVwZGF0ZVdoaWxlSW50ZXJhY3Rpbmc6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wubGF5ZXIuVmVjdG9yIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxufVxuIl19