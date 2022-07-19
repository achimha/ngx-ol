import { __decorate, __param } from "tslib";
import { Component, Input, Host } from '@angular/core';
import { Icon } from 'ol/style';
import { StyleComponent } from './style.component';
var StyleIconComponent = /** @class */ (function () {
    function StyleIconComponent(host) {
        this.host = host;
    }
    StyleIconComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new Icon(this);
        this.host.instance.setImage(this.instance);
    };
    StyleIconComponent.prototype.ngOnChanges = function (changes) {
        if (!this.instance) {
            return;
        }
        if (changes.opacity) {
            this.instance.setOpacity(changes.opacity.currentValue);
        }
        if (changes.rotation) {
            this.instance.setRotation(changes.rotation.currentValue);
        }
        if (changes.scale) {
            this.instance.setScale(changes.scale.currentValue);
        }
        if (changes.src) {
            this.instance = new Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    };
    StyleIconComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "anchor", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "anchorXUnits", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "anchorYUnits", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "anchorOrigin", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "color", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "crossOrigin", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "img", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "offset", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "offsetOrigin", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "opacity", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "scale", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "snapToPixel", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "rotateWithView", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "rotation", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "size", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "imgSize", void 0);
    __decorate([
        Input()
    ], StyleIconComponent.prototype, "src", void 0);
    StyleIconComponent = __decorate([
        Component({
            selector: 'aol-style-icon',
            template: " <div class=\"aol-style-icon\"></div> "
        }),
        __param(0, Host())
    ], StyleIconComponent);
    return StyleIconComponent;
}());
export { StyleIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQ7SUFzQ0UsNEJBQTRCLElBQW9CO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQWdCO0lBQUcsQ0FBQztJQUVwRCxxQ0FBUSxHQUFSO1FBQ0UsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsZ0VBQWdFO0lBQ2xFLENBQUM7O2dCQTNCaUMsY0FBYyx1QkFBbkMsSUFBSTs7SUFsQ2pCO1FBREMsS0FBSyxFQUFFO3NEQUNpQjtJQUV6QjtRQURDLEtBQUssRUFBRTs0REFDc0I7SUFFOUI7UUFEQyxLQUFLLEVBQUU7NERBQ3NCO0lBRTlCO1FBREMsS0FBSyxFQUFFOzREQUNpQjtJQUV6QjtRQURDLEtBQUssRUFBRTtxREFDZ0M7SUFFeEM7UUFEQyxLQUFLLEVBQUU7MkRBQ2dCO0lBRXhCO1FBREMsS0FBSyxFQUFFO21EQUNJO0lBRVo7UUFEQyxLQUFLLEVBQUU7c0RBQ2lCO0lBRXpCO1FBREMsS0FBSyxFQUFFOzREQUNpQjtJQUV6QjtRQURDLEtBQUssRUFBRTt1REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTtxREFDTTtJQUVkO1FBREMsS0FBSyxFQUFFOzJEQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFOzhEQUNnQjtJQUV4QjtRQURDLEtBQUssRUFBRTt3REFDUztJQUVqQjtRQURDLEtBQUssRUFBRTtvREFDZTtJQUV2QjtRQURDLEtBQUssRUFBRTt1REFDa0I7SUFFMUI7UUFEQyxLQUFLLEVBQUU7bURBQ0k7SUFwQ0Qsa0JBQWtCO1FBSjlCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLHdDQUFzQztTQUNqRCxDQUFDO1FBdUNhLFdBQUEsSUFBSSxFQUFFLENBQUE7T0F0Q1Isa0JBQWtCLENBa0U5QjtJQUFELHlCQUFDO0NBQUEsQUFsRUQsSUFrRUM7U0FsRVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgSWNvbkFuY2hvclVuaXRzIGZyb20gJ29sL3N0eWxlL0ljb25BbmNob3JVbml0cyc7XG5pbXBvcnQgSWNvbk9yaWdpbiBmcm9tICdvbC9zdHlsZS9JY29uT3JpZ2luJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtaWNvbicsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtaWNvblwiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBpbnN0YW5jZTogSWNvbjtcblxuICBASW5wdXQoKVxuICBhbmNob3I6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIGFuY2hvclhVbml0czogSWNvbkFuY2hvclVuaXRzO1xuICBASW5wdXQoKVxuICBhbmNob3JZVW5pdHM6IEljb25BbmNob3JVbml0cztcbiAgQElucHV0KClcbiAgYW5jaG9yT3JpZ2luOiBJY29uT3JpZ2luO1xuICBASW5wdXQoKVxuICBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIGNyb3NzT3JpZ2luOiBJY29uT3JpZ2luO1xuICBASW5wdXQoKVxuICBpbWc6IHN0cmluZztcbiAgQElucHV0KClcbiAgb2Zmc2V0OiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBvZmZzZXRPcmlnaW46IEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc2NhbGU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJvdGF0ZVdpdGhWaWV3OiBib29sZWFuO1xuICBASW5wdXQoKVxuICByb3RhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzaXplOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBpbWdTaXplOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBzcmM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkljb24gaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJY29uKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub3BhY2l0eSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPcGFjaXR5KGNoYW5nZXMub3BhY2l0eS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yb3RhdGlvbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSb3RhdGlvbihjaGFuZ2VzLnJvdGF0aW9uLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNjYWxlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFNjYWxlKGNoYW5nZXMuc2NhbGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc3JjKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEljb24odGhpcyk7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtaWNvbjogJywgY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==