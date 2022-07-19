var SourceVectorComponent_1;
import { __decorate, __param } from "tslib";
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
__decorate([
    Input()
], SourceVectorComponent.prototype, "overlaps", void 0);
__decorate([
    Input()
], SourceVectorComponent.prototype, "useSpatialIndex", void 0);
__decorate([
    Input()
], SourceVectorComponent.prototype, "wrapX", void 0);
__decorate([
    Input()
], SourceVectorComponent.prototype, "url", void 0);
__decorate([
    Input()
], SourceVectorComponent.prototype, "format", void 0);
__decorate([
    Input()
], SourceVectorComponent.prototype, "strategy", void 0);
SourceVectorComponent = SourceVectorComponent_1 = __decorate([
    Component({
        selector: 'aol-source-vector',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent_1) }]
    }),
    __param(0, Host())
], SourceVectorComponent);
export { SourceVectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBUXJELElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFzQixTQUFRLGVBQWU7SUFleEQsWUFBb0IsS0FBMkI7UUFDN0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGLENBQUE7O1lBUjRCLG9CQUFvQix1QkFBbEMsSUFBSTs7QUFaakI7SUFEQyxLQUFLLEVBQUU7dURBQ1U7QUFFbEI7SUFEQyxLQUFLLEVBQUU7OERBQ2lCO0FBRXpCO0lBREMsS0FBSyxFQUFFO29EQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7a0RBQ0k7QUFFWjtJQURDLEtBQUssRUFBRTtxREFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTt1REFDa0I7QUFiZixxQkFBcUI7SUFMakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUFxQixDQUFDLEVBQUUsQ0FBQztLQUNoRyxDQUFDO0lBZ0JhLFdBQUEsSUFBSSxFQUFFLENBQUE7R0FmUixxQkFBcUIsQ0F1QmpDO1NBdkJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdmVjdG9yJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVmVjdG9yQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVmVjdG9yQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFZlY3RvcjtcbiAgQElucHV0KClcbiAgb3ZlcmxhcHM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHVzZVNwYXRpYWxJbmRleDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHVybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBmb3JtYXQ6IEZlYXR1cmU7XG4gIEBJbnB1dCgpXG4gIHN0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3Rvcih0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=