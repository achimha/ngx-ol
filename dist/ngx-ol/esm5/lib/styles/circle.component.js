import { __decorate, __param } from "tslib";
import { Component, Input, Host } from '@angular/core';
import { Circle } from 'ol/style';
import { StyleComponent } from './style.component';
var StyleCircleComponent = /** @class */ (function () {
    function StyleCircleComponent(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    StyleCircleComponent.prototype.update = function () {
        if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
        }
        this.host.update();
    };
    StyleCircleComponent.prototype.ngAfterContentInit = function () {
        // console.log('creating ol.style.Circle instance with: ', this);
        this.instance = new Circle(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    };
    StyleCircleComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes.radius) {
            this.instance.setRadius(changes.radius.currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    };
    StyleCircleComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-style-circle');
        this.host.instance.setImage(null);
    };
    StyleCircleComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "fill", void 0);
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "radius", void 0);
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "snapToPixel", void 0);
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "stroke", void 0);
    __decorate([
        Input()
    ], StyleCircleComponent.prototype, "atlasManager", void 0);
    StyleCircleComponent = __decorate([
        Component({
            selector: 'aol-style-circle',
            template: " <ng-content></ng-content> "
        }),
        __param(0, Host())
    ], StyleCircleComponent);
    return StyleCircleComponent;
}());
export { StyleCircleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUF5RCxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQWdCLE1BQU0sRUFBZ0IsTUFBTSxVQUFVLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5EO0lBZUUsOEJBQTRCLElBQW9CO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBZHpDLGtCQUFhLEdBQUcsY0FBYyxDQUFDO0lBY2EsQ0FBQztJQUVwRDs7OztPQUlHO0lBQ0gscUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkIsNkRBQTZEO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlEQUFrQixHQUFsQjtRQUNFLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsNkdBQTZHO0lBQy9HLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkFuQ2lDLGNBQWMsdUJBQW5DLElBQUk7O0lBVmpCO1FBREMsS0FBSyxFQUFFO3NEQUNHO0lBRVg7UUFEQyxLQUFLLEVBQUU7d0RBQ087SUFFZjtRQURDLEtBQUssRUFBRTs2REFDYTtJQUVyQjtRQURDLEtBQUssRUFBRTt3REFDTztJQUVmO1FBREMsS0FBSyxFQUFFOzhEQUNtQjtJQWJoQixvQkFBb0I7UUFKaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFnQmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQWZSLG9CQUFvQixDQW1EaEM7SUFBRCwyQkFBQztDQUFBLEFBbkRELElBbURDO1NBbkRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3QsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdGxhc01hbmFnZXIsIENpcmNsZSwgRmlsbCwgU3Ryb2tlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1jaXJjbGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlQ2lyY2xlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZS1jaXJjbGUnO1xuICBwdWJsaWMgaW5zdGFuY2U6IENpcmNsZTtcblxuICBASW5wdXQoKVxuICBmaWxsOiBGaWxsO1xuICBASW5wdXQoKVxuICByYWRpdXM6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHN0cm9rZTogU3Ryb2tlO1xuICBASW5wdXQoKVxuICBhdGxhc01hbmFnZXI6IEF0bGFzTWFuYWdlcjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XG5cbiAgLyoqXG4gICAqIFdPUkstQVJPVU5EOiBzaW5jZSB0aGUgcmUtcmVuZGVyaW5nIGlzIG5vdCB0cmlnZ2VyZWQgb24gc3R5bGUgY2hhbmdlXG4gICAqIHdlIHRyaWdnZXIgYSByYWRpdXMgY2hhbmdlLlxuICAgKiBzZWUgb3BlbmxheWVycyAjNjIzMyBhbmQgIzU3NzVcbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoISF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5DaXJjbGUgaW5zdGFuY2VcXCdzIHJhZGl1cycpO1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSYWRpdXModGhpcy5yYWRpdXMpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkNpcmNsZSBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IENpcmNsZSh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKGNoYW5nZXMucmFkaXVzLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS1jaXJjbGUsIHNldHRpbmcgbmV3IHJhZGl1czogJywgY2hhbmdlc1sncmFkaXVzJ10uY3VycmVudFZhbHVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtc3R5bGUtY2lyY2xlJyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKG51bGwpO1xuICB9XG59XG4iXX0=