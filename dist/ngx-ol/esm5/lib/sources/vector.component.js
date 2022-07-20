import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
var SourceVectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceVectorComponent, _super);
    function SourceVectorComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceVectorComponent_1 = SourceVectorComponent;
    SourceVectorComponent.prototype.ngOnInit = function () {
        this.instance = new Vector(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceVectorComponent_1;
    SourceVectorComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
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
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorComponent_1; }) }]
        }),
        tslib_1.__param(0, Host())
    ], SourceVectorComponent);
    return SourceVectorComponent;
}(SourceComponent));
export { SourceVectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3ZlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRckQ7SUFBMkMsaURBQWU7SUFleEQsK0JBQW9CLEtBQTJCO2VBQzdDLGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7OEJBakJVLHFCQUFxQjtJQW1CaEMsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Z0JBUDBCLG9CQUFvQix1QkFBbEMsSUFBSTs7SUFaakI7UUFEQyxLQUFLLEVBQUU7MkRBQ1U7SUFFbEI7UUFEQyxLQUFLLEVBQUU7a0VBQ2lCO0lBRXpCO1FBREMsS0FBSyxFQUFFO3dEQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7c0RBQ0k7SUFFWjtRQURDLEtBQUssRUFBRTt5REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTsyREFDa0I7SUFiZixxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx1QkFBcUIsRUFBckIsQ0FBcUIsQ0FBQyxFQUFFLENBQUM7U0FDaEcsQ0FBQztRQWdCYSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQWZSLHFCQUFxQixDQXVCakM7SUFBRCw0QkFBQztDQUFBLEFBdkJELENBQTJDLGVBQWUsR0F1QnpEO1NBdkJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdmVjdG9yJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVmVjdG9yQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVmVjdG9yQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFZlY3RvcjtcbiAgQElucHV0KClcbiAgb3ZlcmxhcHM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHVzZVNwYXRpYWxJbmRleDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHVybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBmb3JtYXQ6IEZlYXR1cmU7XG4gIEBJbnB1dCgpXG4gIHN0cmF0ZWd5OiBMb2FkaW5nU3RyYXRlZ3k7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3Rvcih0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=