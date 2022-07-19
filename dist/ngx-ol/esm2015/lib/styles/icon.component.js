import { __decorate, __param } from "tslib";
import { Component, Input, Host } from '@angular/core';
import { Icon } from 'ol/style';
import { StyleComponent } from './style.component';
let StyleIconComponent = class StyleIconComponent {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new Icon(this);
        this.host.instance.setImage(this.instance);
    }
    ngOnChanges(changes) {
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
    }
};
StyleIconComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Host }] }
];
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
        template: ` <div class="aol-style-icon"></div> `
    }),
    __param(0, Host())
], StyleIconComponent);
export { StyleIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBc0M3QixZQUE0QixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtJQUFHLENBQUM7SUFFcEQsUUFBUTtRQUNOLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLGdFQUFnRTtJQUNsRSxDQUFDO0NBQ0YsQ0FBQTs7WUE1Qm1DLGNBQWMsdUJBQW5DLElBQUk7O0FBbENqQjtJQURDLEtBQUssRUFBRTtrREFDaUI7QUFFekI7SUFEQyxLQUFLLEVBQUU7d0RBQ3NCO0FBRTlCO0lBREMsS0FBSyxFQUFFO3dEQUNzQjtBQUU5QjtJQURDLEtBQUssRUFBRTt3REFDaUI7QUFFekI7SUFEQyxLQUFLLEVBQUU7aURBQ2dDO0FBRXhDO0lBREMsS0FBSyxFQUFFO3VEQUNnQjtBQUV4QjtJQURDLEtBQUssRUFBRTsrQ0FDSTtBQUVaO0lBREMsS0FBSyxFQUFFO2tEQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTt3REFDaUI7QUFFekI7SUFEQyxLQUFLLEVBQUU7bURBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7aURBQ007QUFFZDtJQURDLEtBQUssRUFBRTt1REFDYTtBQUVyQjtJQURDLEtBQUssRUFBRTswREFDZ0I7QUFFeEI7SUFEQyxLQUFLLEVBQUU7b0RBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7Z0RBQ2U7QUFFdkI7SUFEQyxLQUFLLEVBQUU7bURBQ2tCO0FBRTFCO0lBREMsS0FBSyxFQUFFOytDQUNJO0FBcENELGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRSxzQ0FBc0M7S0FDakQsQ0FBQztJQXVDYSxXQUFBLElBQUksRUFBRSxDQUFBO0dBdENSLGtCQUFrQixDQWtFOUI7U0FsRVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgSWNvbkFuY2hvclVuaXRzIGZyb20gJ29sL3N0eWxlL0ljb25BbmNob3JVbml0cyc7XG5pbXBvcnQgSWNvbk9yaWdpbiBmcm9tICdvbC9zdHlsZS9JY29uT3JpZ2luJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtaWNvbicsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtaWNvblwiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBpbnN0YW5jZTogSWNvbjtcblxuICBASW5wdXQoKVxuICBhbmNob3I6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIGFuY2hvclhVbml0czogSWNvbkFuY2hvclVuaXRzO1xuICBASW5wdXQoKVxuICBhbmNob3JZVW5pdHM6IEljb25BbmNob3JVbml0cztcbiAgQElucHV0KClcbiAgYW5jaG9yT3JpZ2luOiBJY29uT3JpZ2luO1xuICBASW5wdXQoKVxuICBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIGNyb3NzT3JpZ2luOiBJY29uT3JpZ2luO1xuICBASW5wdXQoKVxuICBpbWc6IHN0cmluZztcbiAgQElucHV0KClcbiAgb2Zmc2V0OiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBvZmZzZXRPcmlnaW46IEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc2NhbGU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJvdGF0ZVdpdGhWaWV3OiBib29sZWFuO1xuICBASW5wdXQoKVxuICByb3RhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzaXplOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBpbWdTaXplOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBzcmM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkljb24gaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJY29uKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub3BhY2l0eSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPcGFjaXR5KGNoYW5nZXMub3BhY2l0eS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yb3RhdGlvbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSb3RhdGlvbihjaGFuZ2VzLnJvdGF0aW9uLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNjYWxlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFNjYWxlKGNoYW5nZXMuc2NhbGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc3JjKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEljb24odGhpcyk7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtaWNvbjogJywgY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==