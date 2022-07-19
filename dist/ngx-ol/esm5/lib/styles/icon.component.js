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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFHaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5EO0lBc0NFLDRCQUE0QixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtJQUFHLENBQUM7SUFFcEQscUNBQVEsR0FBUjtRQUNFLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLGdFQUFnRTtJQUNsRSxDQUFDOztnQkEzQmlDLGNBQWMsdUJBQW5DLElBQUk7O0lBbENqQjtRQURDLEtBQUssRUFBRTtzREFDaUI7SUFFekI7UUFEQyxLQUFLLEVBQUU7NERBQ3NCO0lBRTlCO1FBREMsS0FBSyxFQUFFOzREQUNzQjtJQUU5QjtRQURDLEtBQUssRUFBRTs0REFDaUI7SUFFekI7UUFEQyxLQUFLLEVBQUU7cURBQ2dDO0lBRXhDO1FBREMsS0FBSyxFQUFFOzJEQUNnQjtJQUV4QjtRQURDLEtBQUssRUFBRTttREFDSTtJQUVaO1FBREMsS0FBSyxFQUFFO3NEQUNpQjtJQUV6QjtRQURDLEtBQUssRUFBRTs0REFDaUI7SUFFekI7UUFEQyxLQUFLLEVBQUU7dURBQ1E7SUFFaEI7UUFEQyxLQUFLLEVBQUU7cURBQ007SUFFZDtRQURDLEtBQUssRUFBRTsyREFDYTtJQUVyQjtRQURDLEtBQUssRUFBRTs4REFDZ0I7SUFFeEI7UUFEQyxLQUFLLEVBQUU7d0RBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7b0RBQ2U7SUFFdkI7UUFEQyxLQUFLLEVBQUU7dURBQ2tCO0lBRTFCO1FBREMsS0FBSyxFQUFFO21EQUNJO0lBcENELGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSx3Q0FBc0M7U0FDakQsQ0FBQztRQXVDYSxXQUFBLElBQUksRUFBRSxDQUFBO09BdENSLGtCQUFrQixDQWtFOUI7SUFBRCx5QkFBQztDQUFBLEFBbEVELElBa0VDO1NBbEVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3QsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IEljb25BbmNob3JVbml0cyBmcm9tICdvbC9zdHlsZS9JY29uQW5jaG9yVW5pdHMnO1xuaW1wb3J0IEljb25PcmlnaW4gZnJvbSAnb2wvc3R5bGUvSWNvbk9yaWdpbic7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWljb24nLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLWljb25cIj48L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgaW5zdGFuY2U6IEljb247XG5cbiAgQElucHV0KClcbiAgYW5jaG9yOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBhbmNob3JYVW5pdHM6IEljb25BbmNob3JVbml0cztcbiAgQElucHV0KClcbiAgYW5jaG9yWVVuaXRzOiBJY29uQW5jaG9yVW5pdHM7XG4gIEBJbnB1dCgpXG4gIGFuY2hvck9yaWdpbjogSWNvbk9yaWdpbjtcbiAgQElucHV0KClcbiAgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBjcm9zc09yaWdpbjogSWNvbk9yaWdpbjtcbiAgQElucHV0KClcbiAgaW1nOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9mZnNldDogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgb2Zmc2V0T3JpZ2luOiBJY29uT3JpZ2luO1xuICBASW5wdXQoKVxuICBvcGFjaXR5OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNjYWxlOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNuYXBUb1BpeGVsOiBib29sZWFuO1xuICBASW5wdXQoKVxuICByb3RhdGVXaXRoVmlldzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcm90YXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgc2l6ZTogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgaW1nU2l6ZTogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgc3JjOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIGhvc3Q6IFN0eWxlQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5JY29uIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSWNvbih0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm9wYWNpdHkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0T3BhY2l0eShjaGFuZ2VzLm9wYWNpdHkuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMucm90YXRpb24pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Um90YXRpb24oY2hhbmdlcy5yb3RhdGlvbi5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zY2FsZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRTY2FsZShjaGFuZ2VzLnNjYWxlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNyYykge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJY29uKHRoaXMpO1xuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLWljb246ICcsIGNoYW5nZXMpO1xuICB9XG59XG4iXX0=