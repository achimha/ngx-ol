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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2NsdXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssR0FHTixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsT0FBTyxFQUFVLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU8zRDtJQUE0QywwQ0FBZTtJQWN6RCxnQ0FBb0IsS0FBMkI7ZUFDN0Msa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzsrQkFoQlUsc0JBQXNCO0lBa0JqQyxtREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw0Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7O2dCQWYwQixvQkFBb0IsdUJBQWxDLElBQUk7O0lBVmpCO1FBREMsS0FBSyxFQUFFOzREQUNTO0lBRWpCO1FBREMsS0FBSyxFQUFFO29FQUN1QztJQUUvQztRQURDLEtBQUssRUFBRTt5REFDUTtJQUdoQjtRQURDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQzt5RUFDUztJQVhsQyxzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFFLENBQUM7U0FDakcsQ0FBQztRQWVhLFdBQUEsSUFBSSxFQUFFLENBQUE7T0FkUixzQkFBc0IsQ0E4QmxDO0lBQUQsNkJBQUM7Q0FBQSxBQTlCRCxDQUE0QyxlQUFlLEdBOEIxRDtTQTlCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdvbC9nZW9tJztcbmltcG9ydCB7IENsdXN0ZXIsIFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XG5cbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi92ZWN0b3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1jbHVzdGVyJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlQ2x1c3RlckNvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNsdXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBpbnN0YW5jZTogQ2x1c3RlcjtcblxuICBASW5wdXQoKVxuICBkaXN0YW5jZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBnZW9tZXRyeUZ1bmN0aW9uPzogKGZlYXR1cmU6IEZlYXR1cmUpID0+IFBvaW50O1xuICBASW5wdXQoKVxuICB3cmFwWD86IGJvb2xlYW47XG5cbiAgQENvbnRlbnRDaGlsZChTb3VyY2VWZWN0b3JDb21wb25lbnQpXG4gIHNvdXJjZVZlY3RvckNvbXBvbmVudDogU291cmNlVmVjdG9yQ29tcG9uZW50O1xuICBzb3VyY2U6IFZlY3RvcjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMuc291cmNlVmVjdG9yQ29tcG9uZW50Lmluc3RhbmNlO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDbHVzdGVyKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGlzdGFuY2UnKSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXREaXN0YW5jZSh0aGlzLmRpc3RhbmNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==