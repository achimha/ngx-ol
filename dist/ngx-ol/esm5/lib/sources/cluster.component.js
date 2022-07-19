import { __decorate, __extends, __param } from "tslib";
import { Component, ContentChild, forwardRef, Host, Input, } from '@angular/core';
import { Cluster } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';
var SourceClusterComponent = /** @class */ (function (_super) {
    __extends(SourceClusterComponent, _super);
    function SourceClusterComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceClusterComponent_1 = SourceClusterComponent;
    SourceClusterComponent.prototype.ngAfterContentInit = function () {
        this.source = this.sourceVectorComponent.instance;
        this.instance = new Cluster(this);
        this.host.instance.setSource(this.instance);
    };
    SourceClusterComponent.prototype.ngOnChanges = function (changes) {
        if (this.instance && changes.hasOwnProperty('distance')) {
            this.instance.setDistance(this.distance);
        }
    };
    var SourceClusterComponent_1;
    SourceClusterComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceClusterComponent.prototype, "distance", void 0);
    __decorate([
        Input()
    ], SourceClusterComponent.prototype, "geometryFunction", void 0);
    __decorate([
        Input()
    ], SourceClusterComponent.prototype, "wrapX", void 0);
    __decorate([
        ContentChild(SourceVectorComponent)
    ], SourceClusterComponent.prototype, "sourceVectorComponent", void 0);
    SourceClusterComponent = SourceClusterComponent_1 = __decorate([
        Component({
            selector: 'aol-source-cluster',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceClusterComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceClusterComponent);
    return SourceClusterComponent;
}(SourceComponent));
export { SourceClusterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9jbHVzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE9BQU8sRUFBVSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPM0Q7SUFBNEMsMENBQWU7SUFjekQsZ0NBQW9CLEtBQTJCO2VBQzdDLGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7K0JBaEJVLHNCQUFzQjtJQWtCakMsbURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7OztnQkFmMEIsb0JBQW9CLHVCQUFsQyxJQUFJOztJQVZqQjtRQURDLEtBQUssRUFBRTs0REFDUztJQUVqQjtRQURDLEtBQUssRUFBRTtvRUFDdUM7SUFFL0M7UUFEQyxLQUFLLEVBQUU7eURBQ1E7SUFHaEI7UUFEQyxZQUFZLENBQUMscUJBQXFCLENBQUM7eUVBQ1M7SUFYbEMsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXNCLEVBQXRCLENBQXNCLENBQUMsRUFBRSxDQUFDO1NBQ2pHLENBQUM7UUFlYSxXQUFBLElBQUksRUFBRSxDQUFBO09BZFIsc0JBQXNCLENBOEJsQztJQUFELDZCQUFDO0NBQUEsQUE5QkQsQ0FBNEMsZUFBZSxHQThCMUQ7U0E5Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnb2wvZ2VvbSc7XG5pbXBvcnQgeyBDbHVzdGVyLCBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuXG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZVZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vdmVjdG9yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtY2x1c3RlcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUNsdXN0ZXJDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VDbHVzdGVyQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IENsdXN0ZXI7XG5cbiAgQElucHV0KClcbiAgZGlzdGFuY2U6IG51bWJlcjtcbiAgQElucHV0KClcbiAgZ2VvbWV0cnlGdW5jdGlvbj86IChmZWF0dXJlOiBGZWF0dXJlKSA9PiBQb2ludDtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBDb250ZW50Q2hpbGQoU291cmNlVmVjdG9yQ29tcG9uZW50KVxuICBzb3VyY2VWZWN0b3JDb21wb25lbnQ6IFNvdXJjZVZlY3RvckNvbXBvbmVudDtcbiAgc291cmNlOiBWZWN0b3I7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLnNvdXJjZVZlY3RvckNvbXBvbmVudC5pbnN0YW5jZTtcblxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2x1c3Rlcih0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Rpc3RhbmNlJykpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGlzdGFuY2UodGhpcy5kaXN0YW5jZSk7XG4gICAgfVxuICB9XG59XG4iXX0=