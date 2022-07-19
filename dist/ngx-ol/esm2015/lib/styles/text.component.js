import { __decorate, __param } from "tslib";
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
__decorate([
    Input()
], StyleTextComponent.prototype, "font", void 0);
__decorate([
    Input()
], StyleTextComponent.prototype, "offsetX", void 0);
__decorate([
    Input()
], StyleTextComponent.prototype, "offsetY", void 0);
__decorate([
    Input()
], StyleTextComponent.prototype, "scale", void 0);
__decorate([
    Input()
], StyleTextComponent.prototype, "rotateWithView", void 0);
__decorate([
    Input()
], StyleTextComponent.prototype, "rotation", void 0);
__decorate([
    Input()
], StyleTextComponent.prototype, "text", void 0);
__decorate([
    Input()
], StyleTextComponent.prototype, "textAlign", void 0);
__decorate([
    Input()
], StyleTextComponent.prototype, "textBaseLine", void 0);
StyleTextComponent = __decorate([
    Component({
        selector: 'aol-style-text',
        template: ` <div class="aol-style-text"></div> `
    }),
    __param(0, Optional())
], StyleTextComponent);
export { StyleTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5ELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBdUI3QixZQUFnQyxJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQXJCN0Msa0JBQWEsR0FBRyxZQUFZLENBQUM7UUFzQmxDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDckU7UUFDRCx1REFBdUQ7SUFDekQsQ0FBQztJQUVELFFBQVE7UUFDTiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsd0ZBQXdGO0lBQzFGLENBQUM7Q0FDRixDQUFBOztZQTVDdUMsY0FBYyx1QkFBdkMsUUFBUTs7QUFsQnJCO0lBREMsS0FBSyxFQUFFO2dEQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTttREFDb0I7QUFFNUI7SUFEQyxLQUFLLEVBQUU7bURBQ29CO0FBRTVCO0lBREMsS0FBSyxFQUFFO2lEQUNrQjtBQUUxQjtJQURDLEtBQUssRUFBRTswREFDNEI7QUFFcEM7SUFEQyxLQUFLLEVBQUU7b0RBQ3FCO0FBRTdCO0lBREMsS0FBSyxFQUFFO2dEQUNpQjtBQUV6QjtJQURDLEtBQUssRUFBRTtxREFDc0I7QUFFOUI7SUFEQyxLQUFLLEVBQUU7d0RBQ3lCO0FBckJ0QixrQkFBa0I7SUFKOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsc0NBQXNDO0tBQ2pELENBQUM7SUF3QmEsV0FBQSxRQUFRLEVBQUUsQ0FBQTtHQXZCWixrQkFBa0IsQ0FtRTlCO1NBbkVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtdGV4dCcsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtdGV4dFwiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZVRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBpbnN0YW5jZTogVGV4dDtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc3R5bGUtdGV4dCc7XG5cbiAgQElucHV0KClcbiAgZm9udDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBvZmZzZXRYOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIG9mZnNldFk6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgc2NhbGU6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgcm90YXRlV2l0aFZpZXc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHJvdGF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgdGV4dEFsaWduOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHRleHRCYXNlTGluZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHtcbiAgICBpZiAoIWhvc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLXN0eWxlLXRleHQgbXVzdCBiZSBhIGRlc2NlbmRhbnQgb2YgYW9sLXN0eWxlJyk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUtdGV4dCB3aXRoOiAnLCB0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5UZXh0IGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGV4dCh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0VGV4dCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZm9udCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRGb250KGNoYW5nZXMuZm9udC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5vZmZzZXRYKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9mZnNldFgoY2hhbmdlcy5vZmZzZXRYLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm9mZnNldFkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0T2Zmc2V0WShjaGFuZ2VzLm9mZnNldFkuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc2NhbGUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0U2NhbGUoY2hhbmdlcy5zY2FsZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yb3RhdGlvbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSb3RhdGlvbihjaGFuZ2VzLnJvdGF0aW9uLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnRleHQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VGV4dChjaGFuZ2VzLnRleHQuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudGV4dEFsaWduKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFRleHRBbGlnbihjaGFuZ2VzLnRleHRBbGlnbi5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy50ZXh0QmFzZUxpbmUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VGV4dEJhc2VsaW5lKGNoYW5nZXMudGV4dEJhc2VMaW5lLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtdGV4dCwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==