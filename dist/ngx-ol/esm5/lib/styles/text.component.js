import * as tslib_1 from "tslib";
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
            template: " <div class=\"aol-style-text\"></div> "
        }),
        tslib_1.__param(0, Optional())
    ], StyleTextComponent);
    return StyleTextComponent;
}());
export { StyleTextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTW5EO0lBdUJFLDRCQUFnQyxJQUFvQjtRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQXJCN0Msa0JBQWEsR0FBRyxZQUFZLENBQUM7UUFzQmxDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDckU7UUFDRCx1REFBdUQ7SUFDekQsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsd0ZBQXdGO0lBQzFGLENBQUM7O2dCQTNDcUMsY0FBYyx1QkFBdkMsUUFBUTs7SUFsQnJCO1FBREMsS0FBSyxFQUFFO29EQUNpQjtJQUV6QjtRQURDLEtBQUssRUFBRTt1REFDb0I7SUFFNUI7UUFEQyxLQUFLLEVBQUU7dURBQ29CO0lBRTVCO1FBREMsS0FBSyxFQUFFO3FEQUNrQjtJQUUxQjtRQURDLEtBQUssRUFBRTs4REFDNEI7SUFFcEM7UUFEQyxLQUFLLEVBQUU7d0RBQ3FCO0lBRTdCO1FBREMsS0FBSyxFQUFFO29EQUNpQjtJQUV6QjtRQURDLEtBQUssRUFBRTt5REFDc0I7SUFFOUI7UUFEQyxLQUFLLEVBQUU7NERBQ3lCO0lBckJ0QixrQkFBa0I7UUFKOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsd0NBQXNDO1NBQ2pELENBQUM7UUF3QmEsbUJBQUEsUUFBUSxFQUFFLENBQUE7T0F2Qlosa0JBQWtCLENBbUU5QjtJQUFELHlCQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0FuRVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS10ZXh0JyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS10ZXh0XCI+PC9kaXY+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIGluc3RhbmNlOiBUZXh0O1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZS10ZXh0JztcblxuICBASW5wdXQoKVxuICBmb250OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIG9mZnNldFg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgb2Zmc2V0WTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBzY2FsZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICByb3RhdGVXaXRoVmlldzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgcm90YXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICB0ZXh0QWxpZ246IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgdGV4dEJhc2VMaW5lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBob3N0OiBTdHlsZUNvbXBvbmVudCkge1xuICAgIGlmICghaG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUtdGV4dCBtdXN0IGJlIGEgZGVzY2VuZGFudCBvZiBhb2wtc3R5bGUnKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZS10ZXh0IHdpdGg6ICcsIHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLlRleHQgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUZXh0KHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRUZXh0KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5mb250KSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldEZvbnQoY2hhbmdlcy5mb250LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm9mZnNldFgpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0T2Zmc2V0WChjaGFuZ2VzLm9mZnNldFguY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub2Zmc2V0WSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPZmZzZXRZKGNoYW5nZXMub2Zmc2V0WS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zY2FsZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRTY2FsZShjaGFuZ2VzLnNjYWxlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnJvdGF0aW9uKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJvdGF0aW9uKGNoYW5nZXMucm90YXRpb24uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudGV4dCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0KGNoYW5nZXMudGV4dC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy50ZXh0QWxpZ24pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VGV4dEFsaWduKGNoYW5nZXMudGV4dEFsaWduLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnRleHRCYXNlTGluZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0QmFzZWxpbmUoY2hhbmdlcy50ZXh0QmFzZUxpbmUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS10ZXh0LCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBjaGFuZ2VzKTtcbiAgfVxufVxuIl19