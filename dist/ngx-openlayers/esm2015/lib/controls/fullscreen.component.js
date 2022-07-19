import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';
let ControlFullScreenComponent = class ControlFullScreenComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    ngOnInit() {
        this.instance = new FullScreen(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    }
};
ControlFullScreenComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], ControlFullScreenComponent.prototype, "className", void 0);
__decorate([
    Input()
], ControlFullScreenComponent.prototype, "label", void 0);
__decorate([
    Input()
], ControlFullScreenComponent.prototype, "labelActive", void 0);
__decorate([
    Input()
], ControlFullScreenComponent.prototype, "tipLabel", void 0);
__decorate([
    Input()
], ControlFullScreenComponent.prototype, "keys", void 0);
ControlFullScreenComponent = __decorate([
    Component({
        selector: 'aol-control-fullscreen',
        template: ` <ng-content></ng-content> `
    })
], ControlFullScreenComponent);
export { ControlFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9mdWxsc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhELElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBY3JDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDbkMsb0RBQW9EO0lBQ3RELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXO1FBQ1Qsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGLENBQUE7O1lBYjBCLFlBQVk7O0FBVnJDO0lBREMsS0FBSyxFQUFFOzZEQUNVO0FBRWxCO0lBREMsS0FBSyxFQUFFO3lEQUNNO0FBRWQ7SUFEQyxLQUFLLEVBQUU7K0RBQ1k7QUFFcEI7SUFEQyxLQUFLLEVBQUU7NERBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7d0RBQ007QUFaSCwwQkFBMEI7SUFKdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7R0FDVywwQkFBMEIsQ0EyQnRDO1NBM0JZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGdWxsU2NyZWVuIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtZnVsbHNjcmVlbicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbEZ1bGxTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBGdWxsU2NyZWVuO1xuXG4gIEBJbnB1dCgpXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYWJlbEFjdGl2ZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aXBMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBrZXlzOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC1mdWxsc2NyZWVuJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZ1bGxTY3JlZW4odGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1mdWxsc2NyZWVuJyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19