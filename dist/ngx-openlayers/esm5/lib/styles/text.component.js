import { __decorate, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Text } from 'ol/style';
import { StyleComponent } from './style.component';
var StyleTextComponent = /** @class */ (function () {
    function StyleTextComponent(host) {
        this.host = host;
        this.componentType = 'style-text';
        if (!host) {
            throw new Error('aol-style-text must be a descendant of aol-style');
        }
        // console.log('creating aol-style-text with: ', this);
    }
    StyleTextComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.style.Text instance with: ', this);
        this.instance = new Text(this);
        this.host.instance.setText(this.instance);
    };
    StyleTextComponent.prototype.ngOnChanges = function (changes) {
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
    };
    StyleTextComponent.ctorParameters = function () { return [
        { type: StyleComponent, decorators: [{ type: Optional }] }
    ]; };
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
            template: " <div class=\"aol-style-text\"></div> "
        }),
        __param(0, Optional())
    ], StyleTextComponent);
    return StyleTextComponent;
}());
export { StyleTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvdGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQ7SUF1QkUsNEJBQWdDLElBQW9CO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBckI3QyxrQkFBYSxHQUFHLFlBQVksQ0FBQztRQXNCbEMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNyRTtRQUNELHVEQUF1RDtJQUN6RCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwRDtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQix3RkFBd0Y7SUFDMUYsQ0FBQzs7Z0JBM0NxQyxjQUFjLHVCQUF2QyxRQUFROztJQWxCckI7UUFEQyxLQUFLLEVBQUU7b0RBQ2lCO0lBRXpCO1FBREMsS0FBSyxFQUFFO3VEQUNvQjtJQUU1QjtRQURDLEtBQUssRUFBRTt1REFDb0I7SUFFNUI7UUFEQyxLQUFLLEVBQUU7cURBQ2tCO0lBRTFCO1FBREMsS0FBSyxFQUFFOzhEQUM0QjtJQUVwQztRQURDLEtBQUssRUFBRTt3REFDcUI7SUFFN0I7UUFEQyxLQUFLLEVBQUU7b0RBQ2lCO0lBRXpCO1FBREMsS0FBSyxFQUFFO3lEQUNzQjtJQUU5QjtRQURDLEtBQUssRUFBRTs0REFDeUI7SUFyQnRCLGtCQUFrQjtRQUo5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSx3Q0FBc0M7U0FDakQsQ0FBQztRQXdCYSxXQUFBLFFBQVEsRUFBRSxDQUFBO09BdkJaLGtCQUFrQixDQW1FOUI7SUFBRCx5QkFBQztDQUFBLEFBbkVELElBbUVDO1NBbkVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IFN0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtdGV4dCcsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtdGV4dFwiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZVRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBpbnN0YW5jZTogVGV4dDtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc3R5bGUtdGV4dCc7XG5cbiAgQElucHV0KClcbiAgZm9udDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBvZmZzZXRYOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIG9mZnNldFk6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgc2NhbGU6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgcm90YXRlV2l0aFZpZXc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHJvdGF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgdGV4dEFsaWduOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHRleHRCYXNlTGluZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHtcbiAgICBpZiAoIWhvc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLXN0eWxlLXRleHQgbXVzdCBiZSBhIGRlc2NlbmRhbnQgb2YgYW9sLXN0eWxlJyk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUtdGV4dCB3aXRoOiAnLCB0aGlzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5UZXh0IGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGV4dCh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0VGV4dCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZm9udCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRGb250KGNoYW5nZXMuZm9udC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5vZmZzZXRYKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldE9mZnNldFgoY2hhbmdlcy5vZmZzZXRYLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm9mZnNldFkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0T2Zmc2V0WShjaGFuZ2VzLm9mZnNldFkuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc2NhbGUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0U2NhbGUoY2hhbmdlcy5zY2FsZS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yb3RhdGlvbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSb3RhdGlvbihjaGFuZ2VzLnJvdGF0aW9uLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnRleHQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VGV4dChjaGFuZ2VzLnRleHQuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudGV4dEFsaWduKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFRleHRBbGlnbihjaGFuZ2VzLnRleHRBbGlnbi5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy50ZXh0QmFzZUxpbmUpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VGV4dEJhc2VsaW5lKGNoYW5nZXMudGV4dEJhc2VMaW5lLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtdGV4dCwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==