var FormatMVTComponent_1;
import * as tslib_1 from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
let FormatMVTComponent = FormatMVTComponent_1 = class FormatMVTComponent extends FormatComponent {
    constructor() {
        super();
        this.instance = new MVT(this);
    }
};
tslib_1.__decorate([
    Input()
], FormatMVTComponent.prototype, "featureClass", void 0);
tslib_1.__decorate([
    Input()
], FormatMVTComponent.prototype, "geometryName", void 0);
tslib_1.__decorate([
    Input()
], FormatMVTComponent.prototype, "layerName", void 0);
tslib_1.__decorate([
    Input()
], FormatMVTComponent.prototype, "layers", void 0);
FormatMVTComponent = FormatMVTComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'aol-format-mvt',
        template: '',
        providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent_1) }]
    })
], FormatMVTComponent);
export { FormatMVTComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtYXRzL212dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFRaEMsSUFBYSxrQkFBa0IsMEJBQS9CLE1BQWEsa0JBQW1CLFNBQVEsZUFBZTtJQVlyRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTtBQVpDO0lBREMsS0FBSyxFQUFFO3dEQUNtQjtBQUUzQjtJQURDLEtBQUssRUFBRTt3REFDYTtBQUVyQjtJQURDLEtBQUssRUFBRTtxREFDVTtBQUVsQjtJQURDLEtBQUssRUFBRTtrREFDUztBQVZOLGtCQUFrQjtJQUw5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQWtCLENBQUMsRUFBRSxDQUFDO0tBQzdGLENBQUM7R0FDVyxrQkFBa0IsQ0FnQjlCO1NBaEJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1hdENvbXBvbmVudCB9IGZyb20gJy4vZm9ybWF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNVlQgfSBmcm9tICdvbC9mb3JtYXQnO1xuaW1wb3J0IHsgRmVhdHVyZUNsYXNzIH0gZnJvbSAnb2wvRmVhdHVyZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1mb3JtYXQtbXZ0JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEZvcm1hdENvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybWF0TVZUQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0TVZUQ29tcG9uZW50IGV4dGVuZHMgRm9ybWF0Q29tcG9uZW50IHtcbiAgaW5zdGFuY2U6IE1WVDtcblxuICBASW5wdXQoKVxuICBmZWF0dXJlQ2xhc3M6IEZlYXR1cmVDbGFzcztcbiAgQElucHV0KClcbiAgZ2VvbWV0cnlOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxheWVyTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXllcnM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNVlQodGhpcyk7XG4gIH1cbn1cbiJdfQ==