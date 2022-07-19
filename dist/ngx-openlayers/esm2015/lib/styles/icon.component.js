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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUdoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFzQzdCLFlBQTRCLElBQW9CO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQWdCO0lBQUcsQ0FBQztJQUVwRCxRQUFRO1FBQ04sK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsZ0VBQWdFO0lBQ2xFLENBQUM7Q0FDRixDQUFBOztZQTVCbUMsY0FBYyx1QkFBbkMsSUFBSTs7QUFsQ2pCO0lBREMsS0FBSyxFQUFFO2tEQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTt3REFDc0I7QUFFOUI7SUFEQyxLQUFLLEVBQUU7d0RBQ3NCO0FBRTlCO0lBREMsS0FBSyxFQUFFO3dEQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTtpREFDZ0M7QUFFeEM7SUFEQyxLQUFLLEVBQUU7dURBQ2dCO0FBRXhCO0lBREMsS0FBSyxFQUFFOytDQUNJO0FBRVo7SUFEQyxLQUFLLEVBQUU7a0RBQ2lCO0FBRXpCO0lBREMsS0FBSyxFQUFFO3dEQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTttREFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTtpREFDTTtBQUVkO0lBREMsS0FBSyxFQUFFO3VEQUNhO0FBRXJCO0lBREMsS0FBSyxFQUFFOzBEQUNnQjtBQUV4QjtJQURDLEtBQUssRUFBRTtvREFDUztBQUVqQjtJQURDLEtBQUssRUFBRTtnREFDZTtBQUV2QjtJQURDLEtBQUssRUFBRTttREFDa0I7QUFFMUI7SUFEQyxLQUFLLEVBQUU7K0NBQ0k7QUFwQ0Qsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLHNDQUFzQztLQUNqRCxDQUFDO0lBdUNhLFdBQUEsSUFBSSxFQUFFLENBQUE7R0F0Q1Isa0JBQWtCLENBa0U5QjtTQWxFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCBJY29uQW5jaG9yVW5pdHMgZnJvbSAnb2wvc3R5bGUvSWNvbkFuY2hvclVuaXRzJztcbmltcG9ydCBJY29uT3JpZ2luIGZyb20gJ29sL3N0eWxlL0ljb25PcmlnaW4nO1xuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1pY29uJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS1pY29uXCI+PC9kaXY+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIGluc3RhbmNlOiBJY29uO1xuXG4gIEBJbnB1dCgpXG4gIGFuY2hvcjogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgYW5jaG9yWFVuaXRzOiBJY29uQW5jaG9yVW5pdHM7XG4gIEBJbnB1dCgpXG4gIGFuY2hvcllVbml0czogSWNvbkFuY2hvclVuaXRzO1xuICBASW5wdXQoKVxuICBhbmNob3JPcmlnaW46IEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIGltZzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIG9mZnNldE9yaWdpbjogSWNvbk9yaWdpbjtcbiAgQElucHV0KClcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzY2FsZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzbmFwVG9QaXhlbDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcm90YXRlV2l0aFZpZXc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNpemU6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIGltZ1NpemU6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIHNyYzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBob3N0OiBTdHlsZUNvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuSWNvbiBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEljb24odGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5vcGFjaXR5KSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9wYWNpdHkoY2hhbmdlcy5vcGFjaXR5LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnJvdGF0aW9uKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJvdGF0aW9uKGNoYW5nZXMucm90YXRpb24uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc2NhbGUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0U2NhbGUoY2hhbmdlcy5zY2FsZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zcmMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSWNvbih0aGlzKTtcbiAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS1pY29uOiAnLCBjaGFuZ2VzKTtcbiAgfVxufVxuIl19