import { Component, Input, Optional } from '@angular/core';
import { Text } from 'ol/style';
import { StyleComponent } from './style.component';
export class StyleTextComponent {
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
}
StyleTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-text',
                template: ` <div class="aol-style-text"></div> `
            },] }
];
StyleTextComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] }
];
StyleTextComponent.propDecorators = {
    font: [{ type: Input }],
    offsetX: [{ type: Input }],
    offsetY: [{ type: Input }],
    scale: [{ type: Input }],
    rotateWithView: [{ type: Input }],
    rotation: [{ type: Input }],
    text: [{ type: Input }],
    textAlign: [{ type: Input }],
    textBaseLine: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGltaGEvUHJvamVjdHMvbmd4LW9sL3Byb2plY3RzL25neC1vbC9zcmMvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQsTUFBTSxPQUFPLGtCQUFrQjtJQXVCN0IsWUFBZ0MsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFyQjdDLGtCQUFhLEdBQUcsWUFBWSxDQUFDO1FBc0JsQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsdURBQXVEO0lBQ3pELENBQUM7SUFFRCxRQUFRO1FBQ04sK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbEU7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLHdGQUF3RjtJQUMxRixDQUFDOzs7WUF0RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxzQ0FBc0M7YUFDakQ7OztZQUxRLGNBQWMsdUJBNkJSLFFBQVE7OzttQkFuQnBCLEtBQUs7c0JBRUwsS0FBSztzQkFFTCxLQUFLO29CQUVMLEtBQUs7NkJBRUwsS0FBSzt1QkFFTCxLQUFLO21CQUVMLEtBQUs7d0JBRUwsS0FBSzsyQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgU3R5bGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zdHlsZS10ZXh0JyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1zdHlsZS10ZXh0XCI+PC9kaXY+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIGluc3RhbmNlOiBUZXh0O1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZS10ZXh0JztcblxuICBASW5wdXQoKVxuICBmb250OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIG9mZnNldFg6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgb2Zmc2V0WTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBzY2FsZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICByb3RhdGVXaXRoVmlldzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgcm90YXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgdGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICB0ZXh0QWxpZ246IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgdGV4dEJhc2VMaW5lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBob3N0OiBTdHlsZUNvbXBvbmVudCkge1xuICAgIGlmICghaG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUtdGV4dCBtdXN0IGJlIGEgZGVzY2VuZGFudCBvZiBhb2wtc3R5bGUnKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIGFvbC1zdHlsZS10ZXh0IHdpdGg6ICcsIHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLlRleHQgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUZXh0KHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRUZXh0KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5mb250KSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldEZvbnQoY2hhbmdlcy5mb250LmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm9mZnNldFgpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0T2Zmc2V0WChjaGFuZ2VzLm9mZnNldFguY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub2Zmc2V0WSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPZmZzZXRZKGNoYW5nZXMub2Zmc2V0WS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5zY2FsZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRTY2FsZShjaGFuZ2VzLnNjYWxlLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnJvdGF0aW9uKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJvdGF0aW9uKGNoYW5nZXMucm90YXRpb24uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMudGV4dCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0KGNoYW5nZXMudGV4dC5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy50ZXh0QWxpZ24pIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0VGV4dEFsaWduKGNoYW5nZXMudGV4dEFsaWduLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnRleHRCYXNlTGluZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRUZXh0QmFzZWxpbmUoY2hhbmdlcy50ZXh0QmFzZUxpbmUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1zdHlsZS10ZXh0LCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBjaGFuZ2VzKTtcbiAgfVxufVxuIl19