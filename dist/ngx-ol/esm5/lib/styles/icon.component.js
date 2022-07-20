import * as tslib_1 from "tslib";
import { Component, Input, Host } from '@angular/core';
import { Icon } from 'ol/style';
// TODO https://github.com/openlayers/openlayers/issues/12694
// import IconAnchorUnits from 'ol/style/IconAnchorUnits';
// import IconOrigin from 'ol/style/IconOrigin';
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
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "anchor", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "anchorXUnits", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "anchorYUnits", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "anchorOrigin", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "color", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "crossOrigin", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "img", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "offset", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "offsetOrigin", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "opacity", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "scale", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "snapToPixel", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "rotateWithView", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "rotation", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "size", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "imgSize", void 0);
    tslib_1.__decorate([
        Input()
    ], StyleIconComponent.prototype, "src", void 0);
    StyleIconComponent = tslib_1.__decorate([
        Component({
            selector: 'aol-style-icon',
            template: " <div class=\"aol-style-icon\"></div> "
        }),
        tslib_1.__param(0, Host())
    ], StyleIconComponent);
    return StyleIconComponent;
}());
export { StyleIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFaEMsNkRBQTZEO0FBQzdELDBEQUEwRDtBQUMxRCxnREFBZ0Q7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5EO0lBc0NFLDRCQUE0QixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtJQUFHLENBQUM7SUFFcEQscUNBQVEsR0FBUjtRQUNFLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLGdFQUFnRTtJQUNsRSxDQUFDOztnQkEzQmlDLGNBQWMsdUJBQW5DLElBQUk7O0lBbENqQjtRQURDLEtBQUssRUFBRTtzREFDaUI7SUFFekI7UUFEQyxLQUFLLEVBQUU7NERBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7NERBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7NERBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7cURBQ2dDO0lBRXhDO1FBREMsS0FBSyxFQUFFOzJEQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFO21EQUNrQztJQUUxQztRQURDLEtBQUssRUFBRTtzREFDaUI7SUFFekI7UUFEQyxLQUFLLEVBQUU7NERBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7dURBQ1E7SUFFaEI7UUFEQyxLQUFLLEVBQUU7cURBQ007SUFFZDtRQURDLEtBQUssRUFBRTsyREFDYTtJQUVyQjtRQURDLEtBQUssRUFBRTs4REFDZ0I7SUFFeEI7UUFEQyxLQUFLLEVBQUU7d0RBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7b0RBQ2U7SUFFdkI7UUFEQyxLQUFLLEVBQUU7dURBQ2tCO0lBRTFCO1FBREMsS0FBSyxFQUFFO21EQUNJO0lBcENELGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSx3Q0FBc0M7U0FDakQsQ0FBQztRQXVDYSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQXRDUixrQkFBa0IsQ0FrRTlCO0lBQUQseUJBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQWxFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ29sL3N0eWxlJztcblxuLy8gVE9ETyBodHRwczovL2dpdGh1Yi5jb20vb3BlbmxheWVycy9vcGVubGF5ZXJzL2lzc3Vlcy8xMjY5NFxuLy8gaW1wb3J0IEljb25BbmNob3JVbml0cyBmcm9tICdvbC9zdHlsZS9JY29uQW5jaG9yVW5pdHMnO1xuLy8gaW1wb3J0IEljb25PcmlnaW4gZnJvbSAnb2wvc3R5bGUvSWNvbk9yaWdpbic7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWljb24nLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLWljb25cIj48L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgaW5zdGFuY2U6IEljb247XG5cbiAgQElucHV0KClcbiAgYW5jaG9yOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBhbmNob3JYVW5pdHM6IHN0cmluZzsgLy8gVE9ETyBJY29uQW5jaG9yVW5pdHM7XG4gIEBJbnB1dCgpXG4gIGFuY2hvcllVbml0czogc3RyaW5nOyAvLyBUT0RPIEljb25BbmNob3JVbml0cztcbiAgQElucHV0KClcbiAgYW5jaG9yT3JpZ2luOiBzdHJpbmc7IC8vIEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IHN0cmluZzsgLy8gSWNvbk9yaWdpbjtcbiAgQElucHV0KClcbiAgaW1nOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIEBJbnB1dCgpXG4gIG9mZnNldDogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgb2Zmc2V0T3JpZ2luOiBzdHJpbmc7IC8vIEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc2NhbGU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJvdGF0ZVdpdGhWaWV3OiBib29sZWFuO1xuICBASW5wdXQoKVxuICByb3RhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzaXplOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBpbWdTaXplOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBzcmM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkljb24gaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJY29uKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub3BhY2l0eSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPcGFjaXR5KGNoYW5nZXMub3BhY2l0eS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yb3RhdGlvbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSb3RhdGlvbihjaGFuZ2VzLnJvdGF0aW9uLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNjYWxlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFNjYWxlKGNoYW5nZXMuc2NhbGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc3JjKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEljb24odGhpcyk7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtaWNvbjogJywgY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==