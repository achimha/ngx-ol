var SourceVectorComponent_1;
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
let SourceVectorComponent = SourceVectorComponent_1 = class SourceVectorComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new Vector(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceVectorComponent.ctorParameters = () => [
    { type: LayerVectorComponent, decorators: [{ type: Host }] }
];
tslib_1.__decorate([
    Input()
], SourceVectorComponent.prototype, "overlaps", void 0);
tslib_1.__decorate([
    Input()
], SourceVectorComponent.prototype, "useSpatialIndex", void 0);
tslib_1.__decorate([
    Input()
], SourceVectorComponent.prototype, "wrapX", void 0);
tslib_1.__decorate([
    Input()
], SourceVectorComponent.prototype, "url", void 0);
tslib_1.__decorate([
    Input()
], SourceVectorComponent.prototype, "format", void 0);
tslib_1.__decorate([
    Input()
], SourceVectorComponent.prototype, "strategy", void 0);
SourceVectorComponent = SourceVectorComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'aol-source-vector',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent_1) }]
    }),
    tslib_1.__param(0, Host())
], SourceVectorComponent);
export { SourceVectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBUXJELElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFzQixTQUFRLGVBQWU7SUFleEQsWUFBb0IsS0FBMkI7UUFDN0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGLENBQUE7O1lBUjRCLG9CQUFvQix1QkFBbEMsSUFBSTs7QUFaakI7SUFEQyxLQUFLLEVBQUU7dURBQ1U7QUFFbEI7SUFEQyxLQUFLLEVBQUU7OERBQ2lCO0FBRXpCO0lBREMsS0FBSyxFQUFFO29EQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7a0RBQ0k7QUFFWjtJQURDLEtBQUssRUFBRTtxREFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTt1REFDa0I7QUFiZixxQkFBcUI7SUFMakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUFxQixDQUFDLEVBQUUsQ0FBQztLQUNoRyxDQUFDO0lBZ0JhLG1CQUFBLElBQUksRUFBRSxDQUFBO0dBZlIscUJBQXFCLENBdUJqQztTQXZCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRpbmdTdHJhdGVneSB9IGZyb20gJ29sL3NvdXJjZS9WZWN0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXZlY3RvcicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVZlY3RvckNvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVZlY3RvckNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBWZWN0b3I7XG4gIEBJbnB1dCgpXG4gIG92ZXJsYXBzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB1c2VTcGF0aWFsSW5kZXg6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcbiAgQElucHV0KClcbiAgZm9ybWF0OiBGZWF0dXJlO1xuICBASW5wdXQoKVxuICBzdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5O1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19