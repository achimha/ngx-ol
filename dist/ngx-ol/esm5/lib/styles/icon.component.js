import { __decorate, __param } from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWNoaW1oYS9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFaEMsNkRBQTZEO0FBQzdELDBEQUEwRDtBQUMxRCxnREFBZ0Q7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5EO0lBc0NFLDRCQUE0QixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtJQUFHLENBQUM7SUFFcEQscUNBQVEsR0FBUjtRQUNFLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLGdFQUFnRTtJQUNsRSxDQUFDOztnQkEzQmlDLGNBQWMsdUJBQW5DLElBQUk7O0lBbENqQjtRQURDLEtBQUssRUFBRTtzREFDaUI7SUFFekI7UUFEQyxLQUFLLEVBQUU7NERBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7NERBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7NERBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7cURBQ2dDO0lBRXhDO1FBREMsS0FBSyxFQUFFOzJEQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFO21EQUNrQztJQUUxQztRQURDLEtBQUssRUFBRTtzREFDaUI7SUFFekI7UUFEQyxLQUFLLEVBQUU7NERBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7dURBQ1E7SUFFaEI7UUFEQyxLQUFLLEVBQUU7cURBQ007SUFFZDtRQURDLEtBQUssRUFBRTsyREFDYTtJQUVyQjtRQURDLEtBQUssRUFBRTs4REFDZ0I7SUFFeEI7UUFEQyxLQUFLLEVBQUU7d0RBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7b0RBQ2U7SUFFdkI7UUFEQyxLQUFLLEVBQUU7dURBQ2tCO0lBRTFCO1FBREMsS0FBSyxFQUFFO21EQUNJO0lBcENELGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSx3Q0FBc0M7U0FDakQsQ0FBQztRQXVDYSxXQUFBLElBQUksRUFBRSxDQUFBO09BdENSLGtCQUFrQixDQWtFOUI7SUFBRCx5QkFBQztDQUFBLEFBbEVELElBa0VDO1NBbEVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3QsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnb2wvc3R5bGUnO1xuXG4vLyBUT0RPIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVubGF5ZXJzL29wZW5sYXllcnMvaXNzdWVzLzEyNjk0XG4vLyBpbXBvcnQgSWNvbkFuY2hvclVuaXRzIGZyb20gJ29sL3N0eWxlL0ljb25BbmNob3JVbml0cyc7XG4vLyBpbXBvcnQgSWNvbk9yaWdpbiBmcm9tICdvbC9zdHlsZS9JY29uT3JpZ2luJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtaWNvbicsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtaWNvblwiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZUljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBpbnN0YW5jZTogSWNvbjtcblxuICBASW5wdXQoKVxuICBhbmNob3I6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIGFuY2hvclhVbml0czogc3RyaW5nOyAvLyBUT0RPIEljb25BbmNob3JVbml0cztcbiAgQElucHV0KClcbiAgYW5jaG9yWVVuaXRzOiBzdHJpbmc7IC8vIFRPRE8gSWNvbkFuY2hvclVuaXRzO1xuICBASW5wdXQoKVxuICBhbmNob3JPcmlnaW46IHN0cmluZzsgLy8gSWNvbk9yaWdpbjtcbiAgQElucHV0KClcbiAgY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBjcm9zc09yaWdpbjogc3RyaW5nOyAvLyBJY29uT3JpZ2luO1xuICBASW5wdXQoKVxuICBpbWc6IEhUTUxDYW52YXNFbGVtZW50IHwgSFRNTEltYWdlRWxlbWVudDtcbiAgQElucHV0KClcbiAgb2Zmc2V0OiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBvZmZzZXRPcmlnaW46IHN0cmluZzsgLy8gSWNvbk9yaWdpbjtcbiAgQElucHV0KClcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzY2FsZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzbmFwVG9QaXhlbDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcm90YXRlV2l0aFZpZXc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNpemU6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIGltZ1NpemU6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIHNyYzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBob3N0OiBTdHlsZUNvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuSWNvbiBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEljb24odGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5vcGFjaXR5KSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9wYWNpdHkoY2hhbmdlcy5vcGFjaXR5LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnJvdGF0aW9uKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJvdGF0aW9uKGNoYW5nZXMucm90YXRpb24uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc2NhbGUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0U2NhbGUoY2hhbmdlcy5zY2FsZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zcmMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSWNvbih0aGlzKTtcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS1pY29uOiAnLCBjaGFuZ2VzKTtcbiAgfVxufVxuIl19