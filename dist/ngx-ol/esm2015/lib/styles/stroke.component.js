import * as tslib_1 from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Stroke } from 'ol/style';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
let StyleStrokeComponent = class StyleStrokeComponent {
    constructor(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
        // console.log('creating aol-style-stroke with: ', this);
    }
    ngOnInit() {
        // console.log('creating ol.style.Stroke instance with: ', this);
        this.instance = new Stroke(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setStroke(this.instance);
                // console.log('setting ol.style instance\'s stroke:', this.host);
                break;
            case 'style-text':
                this.host.instance.setStroke(this.instance);
                break;
            case 'style-circle':
                this.host.stroke = this.instance;
                // console.log('setting ol.style.circle instance\'s stroke:', this.host);
                break;
            default:
                throw new Error('unknown host type: ' + this.host);
            // break;
        }
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.color) {
            this.instance.setColor(changes.color.currentValue);
        }
        if (changes.lineCap) {
            this.instance.setLineCap(changes.lineCap.currentValue);
        }
        if (changes.lineDash) {
            this.instance.setLineDash(changes.lineDash.currentValue);
        }
        if (changes.lineJoin) {
            this.instance.setLineJoin(changes.lineJoin.currentValue);
        }
        if (changes.miterLimit) {
            this.instance.setMiterLimit(changes.miterLimit.currentValue);
        }
        if (changes.width) {
            this.instance.setWidth(changes.width.currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
    }
};
StyleStrokeComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] },
    { type: StyleCircleComponent, decorators: [{ type: Optional }] },
    { type: StyleTextComponent, decorators: [{ type: Optional }] }
];
tslib_1.__decorate([
    Input()
], StyleStrokeComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input()
], StyleStrokeComponent.prototype, "lineCap", void 0);
tslib_1.__decorate([
    Input()
], StyleStrokeComponent.prototype, "lineDash", void 0);
tslib_1.__decorate([
    Input()
], StyleStrokeComponent.prototype, "lineJoin", void 0);
tslib_1.__decorate([
    Input()
], StyleStrokeComponent.prototype, "miterLimit", void 0);
tslib_1.__decorate([
    Input()
], StyleStrokeComponent.prototype, "width", void 0);
StyleStrokeComponent = tslib_1.__decorate([
    Component({
        selector: 'aol-style-stroke',
        template: ` <div class="aol-style-stroke"></div> `
    }),
    tslib_1.__param(0, Optional()),
    tslib_1.__param(1, Optional()),
    tslib_1.__param(2, Optional())
], StyleStrokeComponent);
export { StyleStrokeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Ryb2tlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvc3Ryb2tlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVF0RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQWtCL0IsWUFDYyxTQUF5QixFQUN6QixlQUFxQyxFQUNyQyxhQUFpQztRQUU3QyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUN2QjtRQUNELHlEQUF5RDtJQUMzRCxDQUFDO0lBRUQsUUFBUTtRQUNOLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDL0IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLGtFQUFrRTtnQkFDbEUsTUFBTTtZQUNSLEtBQUssWUFBWTtnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxjQUFjO2dCQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNqQyx5RUFBeUU7Z0JBQ3pFLE1BQU07WUFDUjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxTQUFTO1NBQ1Y7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsMEZBQTBGO0lBQzVGLENBQUM7Q0FDRixDQUFBOztZQS9EMEIsY0FBYyx1QkFBcEMsUUFBUTtZQUNvQixvQkFBb0IsdUJBQWhELFFBQVE7WUFDa0Isa0JBQWtCLHVCQUE1QyxRQUFROztBQWZYO0lBREMsS0FBSyxFQUFFO21EQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTtxREFDMkI7QUFFbkM7SUFEQyxLQUFLLEVBQUU7c0RBQ1c7QUFFbkI7SUFEQyxLQUFLLEVBQUU7c0RBQzZCO0FBRXJDO0lBREMsS0FBSyxFQUFFO3dEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFO21EQUNNO0FBaEJILG9CQUFvQjtJQUpoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRSx3Q0FBd0M7S0FDbkQsQ0FBQztJQW9CRyxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLG1CQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsbUJBQUEsUUFBUSxFQUFFLENBQUE7R0FyQkYsb0JBQW9CLENBa0ZoQztTQWxGWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2NpcmNsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ29sL2NvbG9yJztcbmltcG9ydCB7IENvbG9yTGlrZSB9IGZyb20gJ29sL2NvbG9ybGlrZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS1zdHJva2UnLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLXN0cm9rZVwiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZVN0cm9rZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIGluc3RhbmNlOiBTdHJva2U7XG4gIC8qIHRoZSB0eXBpbmdzIGRvIG5vdCBoYXZlIHRoZSBzZXR0ZXJzICovXG4gIHByaXZhdGUgaG9zdDogLypTdHlsZUNvbXBvbmVudHxTdHlsZUNpcmNsZUNvbXBvbmVudHxTdHlsZVRleHRDb21wb25lbnQqLyBhbnk7XG5cbiAgQElucHV0KClcbiAgY29sb3I6IENvbG9yIHwgQ29sb3JMaWtlO1xuICBASW5wdXQoKVxuICBsaW5lQ2FwOiBDYW52YXNMaW5lQ2FwIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBsaW5lRGFzaDogbnVtYmVyW107XG4gIEBJbnB1dCgpXG4gIGxpbmVKb2luOiBDYW52YXNMaW5lSm9pbiB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgbWl0ZXJMaW1pdDogbnVtYmVyO1xuICBASW5wdXQoKVxuICB3aWR0aDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHN0eWxlSG9zdDogU3R5bGVDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVDaXJjbGVIb3N0OiBTdHlsZUNpcmNsZUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBzdHlsZVRleHRIb3N0OiBTdHlsZVRleHRDb21wb25lbnRcbiAgKSB7XG4gICAgaWYgKCFzdHlsZUhvc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLXN0eWxlLXN0cm9rZSBtdXN0IGJlIGEgZGVzY2VuZGFudCBvZiBhb2wtc3R5bGUnKTtcbiAgICB9XG4gICAgaWYgKCEhc3R5bGVUZXh0SG9zdCkge1xuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVUZXh0SG9zdDtcbiAgICB9IGVsc2UgaWYgKCEhc3R5bGVDaXJjbGVIb3N0KSB7XG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZUNpcmNsZUhvc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlSG9zdDtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZS1zdHJva2Ugd2l0aDogJywgdGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuU3Ryb2tlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3Ryb2tlKHRoaXMpO1xuICAgIHN3aXRjaCAodGhpcy5ob3N0LmNvbXBvbmVudFR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFN0cm9rZSh0aGlzLmluc3RhbmNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUgaW5zdGFuY2VcXCdzIHN0cm9rZTonLCB0aGlzLmhvc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0eWxlLXRleHQnOlxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U3Ryb2tlKHRoaXMuaW5zdGFuY2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0eWxlLWNpcmNsZSc6XG4gICAgICAgIHRoaXMuaG9zdC5zdHJva2UgPSB0aGlzLmluc3RhbmNlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5jaXJjbGUgaW5zdGFuY2VcXCdzIHN0cm9rZTonLCB0aGlzLmhvc3QpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBob3N0IHR5cGU6ICcgKyB0aGlzLmhvc3QpO1xuICAgICAgLy8gYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jb2xvcikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRDb2xvcihjaGFuZ2VzLmNvbG9yLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxpbmVDYXApIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0TGluZUNhcChjaGFuZ2VzLmxpbmVDYXAuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubGluZURhc2gpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0TGluZURhc2goY2hhbmdlcy5saW5lRGFzaC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5saW5lSm9pbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRMaW5lSm9pbihjaGFuZ2VzLmxpbmVKb2luLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm1pdGVyTGltaXQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0TWl0ZXJMaW1pdChjaGFuZ2VzLm1pdGVyTGltaXQuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMud2lkdGgpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0V2lkdGgoY2hhbmdlcy53aWR0aC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLXN0cm9rZSwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==