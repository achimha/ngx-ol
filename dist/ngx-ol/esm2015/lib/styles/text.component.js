import * as tslib_1 from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Text } from 'ol/style';
import { StyleComponent } from './style.component';
let StyleTextComponent = class StyleTextComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'style-text';
        if (!host) {
            throw new Error('aol-style-text must be a descendant of aol-style');
        }
        // console.log('creating aol-style-text with: ', this);
    }
    ngOnInit() {
        // console.log('creating ol.style.Text instance with: ', this);
        this.instance = new Text(this);
        this.host.instance.setText(this.instance);
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.font) {
            this.instance.setFont(changes.font.currentValue);
        }
        if (changes.offsetX) {
            this.instance.setOffsetX(changes.offsetX.currentValue);
        }
        if (changes.offsetY) {
            this.instance.setOffsetY(changes.offsetY.currentValue);
        }
        if (changes.scale) {
            this.instance.setScale(changes.scale.currentValue);
        }
        if (changes.rotation) {
            this.instance.setRotation(changes.rotation.currentValue);
        }
        if (changes.text) {
            this.instance.setText(changes.text.currentValue);
        }
        if (changes.textAlign) {
            this.instance.setTextAlign(changes.textAlign.currentValue);
        }
        if (changes.textBaseLine) {
            this.instance.setTextBaseline(changes.textBaseLine.currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-text, setting new properties: ', changes);
    }
};
StyleTextComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] }
];
tslib_1.__decorate([
    Input()
], StyleTextComponent.prototype, "font", void 0);
tslib_1.__decorate([
    Input()
], StyleTextComponent.prototype, "offsetX", void 0);
tslib_1.__decorate([
    Input()
], StyleTextComponent.prototype, "offsetY", void 0);
tslib_1.__decorate([
    Input()
], StyleTextComponent.prototype, "scale", void 0);
tslib_1.__decorate([
    Input()
], StyleTextComponent.prototype, "rotateWithView", void 0);
tslib_1.__decorate([
    Input()
], StyleTextComponent.prototype, "rotation", void 0);
tslib_1.__decorate([
    Input()
], StyleTextComponent.prototype, "text", void 0);
tslib_1.__decorate([
    Input()
], StyleTextComponent.prototype, "textAlign", void 0);
tslib_1.__decorate([
    Input()
], StyleTextComponent.prototype, "textBaseLine", void 0);
StyleTextComponent = tslib_1.__decorate([
    Component({
        selector: 'aol-style-text',
        template: ` <div class="aol-style-text"></div> `
    }),
    tslib_1.__param(0, Optional())
], StyleTextComponent);
export { StyleTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBdUI3QixZQUFnQyxJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQXJCN0Msa0JBQWEsR0FBRyxZQUFZLENBQUM7UUFzQmxDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDckU7UUFDRCx1REFBdUQ7SUFDekQsQ0FBQztJQUVELFFBQVE7UUFDTiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsd0ZBQXdGO0lBQzFGLENBQUM7Q0FDRixDQUFBOztZQTVDdUMsY0FBYyx1QkFBdkMsUUFBUTs7QUFsQnJCO0lBREMsS0FBSyxFQUFFO2dEQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTttREFDb0I7QUFFNUI7SUFEQyxLQUFLLEVBQUU7bURBQ29CO0FBRTVCO0lBREMsS0FBSyxFQUFFO2lEQUNrQjtBQUUxQjtJQURDLEtBQUssRUFBRTswREFDNEI7QUFFcEM7SUFEQyxLQUFLLEVBQUU7b0RBQ3FCO0FBRTdCO0lBREMsS0FBSyxFQUFFO2dEQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTtxREFDc0I7QUFFOUI7SUFEQyxLQUFLLEVBQUU7d0RBQ3lCO0FBckJ0QixrQkFBa0I7SUFKOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsc0NBQXNDO0tBQ2pELENBQUM7SUF3QmEsbUJBQUEsUUFBUSxFQUFFLENBQUE7R0F2Qlosa0JBQWtCLENBbUU5QjtTQW5FWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLXRleHQnLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLXRleHRcIj48L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgaW5zdGFuY2U6IFRleHQ7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlLXRleHQnO1xuXG4gIEBJbnB1dCgpXG4gIGZvbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgb2Zmc2V0WDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBvZmZzZXRZOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHNjYWxlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHJvdGF0ZVdpdGhWaWV3OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICByb3RhdGlvbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHRleHRBbGlnbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICB0ZXh0QmFzZUxpbmU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIGhvc3Q6IFN0eWxlQ29tcG9uZW50KSB7XG4gICAgaWYgKCFob3N0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1zdHlsZS10ZXh0IG11c3QgYmUgYSBkZXNjZW5kYW50IG9mIGFvbC1zdHlsZScpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlLXRleHQgd2l0aDogJywgdGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuVGV4dCBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRleHQodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFRleHQodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmZvbnQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Rm9udChjaGFuZ2VzLmZvbnQuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub2Zmc2V0WCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPZmZzZXRYKGNoYW5nZXMub2Zmc2V0WC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5vZmZzZXRZKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9mZnNldFkoY2hhbmdlcy5vZmZzZXRZLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNjYWxlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFNjYWxlKGNoYW5nZXMuc2NhbGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMucm90YXRpb24pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Um90YXRpb24oY2hhbmdlcy5yb3RhdGlvbi5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy50ZXh0KSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFRleHQoY2hhbmdlcy50ZXh0LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnRleHRBbGlnbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0QWxpZ24oY2hhbmdlcy50ZXh0QWxpZ24uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudGV4dEJhc2VMaW5lKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFRleHRCYXNlbGluZShjaGFuZ2VzLnRleHRCYXNlTGluZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLXRleHQsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIGNoYW5nZXMpO1xuICB9XG59XG4iXX0=