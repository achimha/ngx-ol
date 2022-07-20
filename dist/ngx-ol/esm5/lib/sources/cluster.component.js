import * as tslib_1 from "tslib";
import { Component, ContentChild, forwardRef, Host, Input, } from '@angular/core';
import { Cluster } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';
var SourceClusterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceClusterComponent, _super);
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
    tslib_1.__decorate([
        Input()
    ], SourceClusterComponent.prototype, "distance", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceClusterComponent.prototype, "geometryFunction", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceClusterComponent.prototype, "wrapX", void 0);
    tslib_1.__decorate([
        ContentChild(SourceVectorComponent, { static: false })
    ], SourceClusterComponent.prototype, "sourceVectorComponent", void 0);
    SourceClusterComponent = SourceClusterComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'aol-source-cluster',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceClusterComponent_1; }) }]
        }),
        tslib_1.__param(0, Host())
    ], SourceClusterComponent);
    return SourceClusterComponent;
}(SourceComponent));
export { SourceClusterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9jbHVzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEdBR04sTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE9BQU8sRUFBVSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPM0Q7SUFBNEMsa0RBQWU7SUFjekQsZ0NBQW9CLEtBQTJCO2VBQzdDLGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7K0JBaEJVLHNCQUFzQjtJQWtCakMsbURBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7OztnQkFmMEIsb0JBQW9CLHVCQUFsQyxJQUFJOztJQVZqQjtRQURDLEtBQUssRUFBRTs0REFDUztJQUVqQjtRQURDLEtBQUssRUFBRTtvRUFDdUM7SUFFL0M7UUFEQyxLQUFLLEVBQUU7eURBQ1E7SUFHaEI7UUFEQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7eUVBQ1Y7SUFYbEMsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXNCLEVBQXRCLENBQXNCLENBQUMsRUFBRSxDQUFDO1NBQ2pHLENBQUM7UUFlYSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQWRSLHNCQUFzQixDQThCbEM7SUFBRCw2QkFBQztDQUFBLEFBOUJELENBQTRDLGVBQWUsR0E4QjFEO1NBOUJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ29sL2dlb20nO1xuaW1wb3J0IHsgQ2x1c3RlciwgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcblxuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3ZlY3Rvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWNsdXN0ZXInLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VDbHVzdGVyQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlQ2x1c3RlckNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIGluc3RhbmNlOiBDbHVzdGVyO1xuXG4gIEBJbnB1dCgpXG4gIGRpc3RhbmNlOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5RnVuY3Rpb24/OiAoZmVhdHVyZTogRmVhdHVyZSkgPT4gUG9pbnQ7XG4gIEBJbnB1dCgpXG4gIHdyYXBYPzogYm9vbGVhbjtcblxuICBAQ29udGVudENoaWxkKFNvdXJjZVZlY3RvckNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHNvdXJjZVZlY3RvckNvbXBvbmVudDogU291cmNlVmVjdG9yQ29tcG9uZW50O1xuICBzb3VyY2U6IFZlY3RvcjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMuc291cmNlVmVjdG9yQ29tcG9uZW50Lmluc3RhbmNlO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDbHVzdGVyKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGlzdGFuY2UnKSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXREaXN0YW5jZSh0aGlzLmRpc3RhbmNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==