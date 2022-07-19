import { __decorate, __param } from "tslib";
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
__decorate([
    Input()
], StyleStrokeComponent.prototype, "color", void 0);
__decorate([
    Input()
], StyleStrokeComponent.prototype, "lineCap", void 0);
__decorate([
    Input()
], StyleStrokeComponent.prototype, "lineDash", void 0);
__decorate([
    Input()
], StyleStrokeComponent.prototype, "lineJoin", void 0);
__decorate([
    Input()
], StyleStrokeComponent.prototype, "miterLimit", void 0);
__decorate([
    Input()
], StyleStrokeComponent.prototype, "width", void 0);
StyleStrokeComponent = __decorate([
    Component({
        selector: 'aol-style-stroke',
        template: ` <div class="aol-style-stroke"></div> `
    }),
    __param(0, Optional()),
    __param(1, Optional()),
    __param(2, Optional())
], StyleStrokeComponent);
export { StyleStrokeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Ryb2tlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvc3Ryb2tlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVF0RCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQWtCL0IsWUFDYyxTQUF5QixFQUN6QixlQUFxQyxFQUNyQyxhQUFpQztRQUU3QyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1NBQzNCO2FBQU0sSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztTQUN2QjtRQUNELHlEQUF5RDtJQUMzRCxDQUFDO0lBRUQsUUFBUTtRQUNOLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDL0IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLGtFQUFrRTtnQkFDbEUsTUFBTTtZQUNSLEtBQUssWUFBWTtnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxjQUFjO2dCQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNqQyx5RUFBeUU7Z0JBQ3pFLE1BQU07WUFDUjtnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxTQUFTO1NBQ1Y7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsMEZBQTBGO0lBQzVGLENBQUM7Q0FDRixDQUFBOztZQS9EMEIsY0FBYyx1QkFBcEMsUUFBUTtZQUNvQixvQkFBb0IsdUJBQWhELFFBQVE7WUFDa0Isa0JBQWtCLHVCQUE1QyxRQUFROztBQWZYO0lBREMsS0FBSyxFQUFFO21EQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTtxREFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTtzREFDVztBQUVuQjtJQURDLEtBQUssRUFBRTtzREFDUztBQUVqQjtJQURDLEtBQUssRUFBRTt3REFDVztBQUVuQjtJQURDLEtBQUssRUFBRTttREFDTTtBQWhCSCxvQkFBb0I7SUFKaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsd0NBQXdDO0tBQ25ELENBQUM7SUFvQkcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixXQUFBLFFBQVEsRUFBRSxDQUFBO0dBckJGLG9CQUFvQixDQWtGaEM7U0FsRlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJva2UgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXJjbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlVGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdvbC9jb2xvcic7XG5pbXBvcnQgeyBDb2xvckxpa2UgfSBmcm9tICdvbC9jb2xvcmxpa2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtc3Ryb2tlJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS1zdHJva2VcIj48L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVTdHJva2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBpbnN0YW5jZTogU3Ryb2tlO1xuICAvKiB0aGUgdHlwaW5ncyBkbyBub3QgaGF2ZSB0aGUgc2V0dGVycyAqL1xuICBwcml2YXRlIGhvc3Q6IC8qU3R5bGVDb21wb25lbnR8U3R5bGVDaXJjbGVDb21wb25lbnR8U3R5bGVUZXh0Q29tcG9uZW50Ki8gYW55O1xuXG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBDb2xvciB8IENvbG9yTGlrZTtcbiAgQElucHV0KClcbiAgbGluZUNhcDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsaW5lRGFzaDogbnVtYmVyW107XG4gIEBJbnB1dCgpXG4gIGxpbmVKb2luOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1pdGVyTGltaXQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgd2lkdGg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBzdHlsZUhvc3Q6IFN0eWxlQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIHN0eWxlQ2lyY2xlSG9zdDogU3R5bGVDaXJjbGVDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVUZXh0SG9zdDogU3R5bGVUZXh0Q29tcG9uZW50XG4gICkge1xuICAgIGlmICghc3R5bGVIb3N0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1zdHlsZS1zdHJva2UgbXVzdCBiZSBhIGRlc2NlbmRhbnQgb2YgYW9sLXN0eWxlJyk7XG4gICAgfVxuICAgIGlmICghIXN0eWxlVGV4dEhvc3QpIHtcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlVGV4dEhvc3Q7XG4gICAgfSBlbHNlIGlmICghIXN0eWxlQ2lyY2xlSG9zdCkge1xuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVDaXJjbGVIb3N0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZUhvc3Q7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUtc3Ryb2tlIHdpdGg6ICcsIHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLlN0cm9rZSBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0cm9rZSh0aGlzKTtcbiAgICBzd2l0Y2ggKHRoaXMuaG9zdC5jb21wb25lbnRUeXBlKSB7XG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTdHJva2UodGhpcy5pbnN0YW5jZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9sLnN0eWxlIGluc3RhbmNlXFwncyBzdHJva2U6JywgdGhpcy5ob3N0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHlsZS10ZXh0JzpcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFN0cm9rZSh0aGlzLmluc3RhbmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHlsZS1jaXJjbGUnOlxuICAgICAgICB0aGlzLmhvc3Quc3Ryb2tlID0gdGhpcy5pbnN0YW5jZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUuY2lyY2xlIGluc3RhbmNlXFwncyBzdHJva2U6JywgdGhpcy5ob3N0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gaG9zdCB0eXBlOiAnICsgdGhpcy5ob3N0KTtcbiAgICAgIC8vIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY29sb3IpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Q29sb3IoY2hhbmdlcy5jb2xvci5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5saW5lQ2FwKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldExpbmVDYXAoY2hhbmdlcy5saW5lQ2FwLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxpbmVEYXNoKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldExpbmVEYXNoKGNoYW5nZXMubGluZURhc2guY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubGluZUpvaW4pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0TGluZUpvaW4oY2hhbmdlcy5saW5lSm9pbi5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5taXRlckxpbWl0KSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldE1pdGVyTGltaXQoY2hhbmdlcy5taXRlckxpbWl0LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLndpZHRoKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFdpZHRoKGNoYW5nZXMud2lkdGguY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS1zdHJva2UsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIGNoYW5nZXMpO1xuICB9XG59XG4iXX0=