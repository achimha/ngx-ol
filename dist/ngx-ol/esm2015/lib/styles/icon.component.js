import { __decorate, __param } from "tslib";
import { Component, Input, Host } from '@angular/core';
import { Icon } from 'ol/style';
// TODO https://github.com/openlayers/openlayers/issues/12694
// import IconAnchorUnits from 'ol/style/IconAnchorUnits';
// import IconOrigin from 'ol/style/IconOrigin';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFaEMsNkRBQTZEO0FBQzdELDBEQUEwRDtBQUMxRCxnREFBZ0Q7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBc0M3QixZQUE0QixJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtJQUFHLENBQUM7SUFFcEQsUUFBUTtRQUNOLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLGdFQUFnRTtJQUNsRSxDQUFDO0NBQ0YsQ0FBQTs7WUE1Qm1DLGNBQWMsdUJBQW5DLElBQUk7O0FBbENqQjtJQURDLEtBQUssRUFBRTtrREFDaUI7QUFFekI7SUFEQyxLQUFLLEVBQUU7d0RBQ2E7QUFFckI7SUFEQyxLQUFLLEVBQUU7d0RBQ2E7QUFFckI7SUFEQyxLQUFLLEVBQUU7d0RBQ2E7QUFFckI7SUFEQyxLQUFLLEVBQUU7aURBQ2dDO0FBRXhDO0lBREMsS0FBSyxFQUFFO3VEQUNZO0FBRXBCO0lBREMsS0FBSyxFQUFFOytDQUNrQztBQUUxQztJQURDLEtBQUssRUFBRTtrREFDaUI7QUFFekI7SUFEQyxLQUFLLEVBQUU7d0RBQ2E7QUFFckI7SUFEQyxLQUFLLEVBQUU7bURBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7aURBQ007QUFFZDtJQURDLEtBQUssRUFBRTt1REFDYTtBQUVyQjtJQURDLEtBQUssRUFBRTswREFDZ0I7QUFFeEI7SUFEQyxLQUFLLEVBQUU7b0RBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7Z0RBQ2U7QUFFdkI7SUFEQyxLQUFLLEVBQUU7bURBQ2tCO0FBRTFCO0lBREMsS0FBSyxFQUFFOytDQUNJO0FBcENELGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRSxzQ0FBc0M7S0FDakQsQ0FBQztJQXVDYSxXQUFBLElBQUksRUFBRSxDQUFBO0dBdENSLGtCQUFrQixDQWtFOUI7U0FsRVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdvbC9zdHlsZSc7XG5cbi8vIFRPRE8gaHR0cHM6Ly9naXRodWIuY29tL29wZW5sYXllcnMvb3BlbmxheWVycy9pc3N1ZXMvMTI2OTRcbi8vIGltcG9ydCBJY29uQW5jaG9yVW5pdHMgZnJvbSAnb2wvc3R5bGUvSWNvbkFuY2hvclVuaXRzJztcbi8vIGltcG9ydCBJY29uT3JpZ2luIGZyb20gJ29sL3N0eWxlL0ljb25PcmlnaW4nO1xuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1pY29uJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS1pY29uXCI+PC9kaXY+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIGluc3RhbmNlOiBJY29uO1xuXG4gIEBJbnB1dCgpXG4gIGFuY2hvcjogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgYW5jaG9yWFVuaXRzOiBzdHJpbmc7IC8vIFRPRE8gSWNvbkFuY2hvclVuaXRzO1xuICBASW5wdXQoKVxuICBhbmNob3JZVW5pdHM6IHN0cmluZzsgLy8gVE9ETyBJY29uQW5jaG9yVW5pdHM7XG4gIEBJbnB1dCgpXG4gIGFuY2hvck9yaWdpbjogc3RyaW5nOyAvLyBJY29uT3JpZ2luO1xuICBASW5wdXQoKVxuICBjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7IC8vIEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIGltZzogSFRNTENhbnZhc0VsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50O1xuICBASW5wdXQoKVxuICBvZmZzZXQ6IFtudW1iZXIsIG51bWJlcl07XG4gIEBJbnB1dCgpXG4gIG9mZnNldE9yaWdpbjogc3RyaW5nOyAvLyBJY29uT3JpZ2luO1xuICBASW5wdXQoKVxuICBvcGFjaXR5OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNjYWxlOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNuYXBUb1BpeGVsOiBib29sZWFuO1xuICBASW5wdXQoKVxuICByb3RhdGVXaXRoVmlldzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcm90YXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgc2l6ZTogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgaW1nU2l6ZTogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgc3JjOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIGhvc3Q6IFN0eWxlQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5JY29uIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgSWNvbih0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm9wYWNpdHkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0T3BhY2l0eShjaGFuZ2VzLm9wYWNpdHkuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMucm90YXRpb24pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Um90YXRpb24oY2hhbmdlcy5yb3RhdGlvbi5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zY2FsZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRTY2FsZShjaGFuZ2VzLnNjYWxlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNyYykge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJY29uKHRoaXMpO1xuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLWljb246ICcsIGNoYW5nZXMpO1xuICB9XG59XG4iXX0=