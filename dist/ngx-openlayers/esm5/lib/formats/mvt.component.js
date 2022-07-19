import { __decorate, __extends } from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
var FormatMVTComponent = /** @class */ (function (_super) {
    __extends(FormatMVTComponent, _super);
    function FormatMVTComponent() {
        var _this = _super.call(this) || this;
        _this.instance = new MVT(_this);
        return _this;
    }
    FormatMVTComponent_1 = FormatMVTComponent;
    var FormatMVTComponent_1;
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "featureClass", void 0);
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "geometryName", void 0);
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "layerName", void 0);
    __decorate([
        Input()
    ], FormatMVTComponent.prototype, "layers", void 0);
    FormatMVTComponent = FormatMVTComponent_1 = __decorate([
        Component({
            selector: 'aol-format-mvt',
            template: '',
            providers: [{ provide: FormatComponent, useExisting: forwardRef(function () { return FormatMVTComponent_1; }) }]
        })
    ], FormatMVTComponent);
    return FormatMVTComponent;
}(FormatComponent));
export { FormatMVTComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2Zvcm1hdHMvbXZ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBU2hDO0lBQXdDLHNDQUFlO0lBY3JEO1FBQUEsWUFDRSxpQkFBTyxTQUVSO1FBREMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDaEMsQ0FBQzsyQkFqQlUsa0JBQWtCOztJQUk3QjtRQURDLEtBQUssRUFBRTs0REFHbUc7SUFFM0c7UUFEQyxLQUFLLEVBQUU7NERBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7eURBQ1U7SUFFbEI7UUFEQyxLQUFLLEVBQUU7c0RBQ1M7SUFaTixrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQyxFQUFFLENBQUM7U0FDN0YsQ0FBQztPQUNXLGtCQUFrQixDQWtCOUI7SUFBRCx5QkFBQztDQUFBLEFBbEJELENBQXdDLGVBQWUsR0FrQnREO1NBbEJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1hdENvbXBvbmVudCB9IGZyb20gJy4vZm9ybWF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNVlQgfSBmcm9tICdvbC9mb3JtYXQnO1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tJztcbmltcG9ydCBHZW9tZXRyeVR5cGUgZnJvbSAnb2wvZ2VvbS9HZW9tZXRyeVR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtZm9ybWF0LW12dCcsXG4gIHRlbXBsYXRlOiAnJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBGb3JtYXRDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1hdE1WVENvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdE1WVENvbXBvbmVudCBleHRlbmRzIEZvcm1hdENvbXBvbmVudCB7XG4gIGluc3RhbmNlOiBNVlQ7XG5cbiAgQElucHV0KClcbiAgZmVhdHVyZUNsYXNzOlxuICAgIHwgKChnZW9tOiBHZW9tZXRyeSB8IHsgW2s6IHN0cmluZ106IGFueSB9KSA9PiBhbnkpXG4gICAgfCAoKGdlb206IEdlb21ldHJ5VHlwZSwgYXJnMjogbnVtYmVyW10sIGFyZzM6IG51bWJlcltdIHwgbnVtYmVyW11bXSwgYXJnNDogeyBbazogc3RyaW5nXTogYW55IH0pID0+IGFueSk7XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXllck5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGF5ZXJzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTVZUKHRoaXMpO1xuICB9XG59XG4iXX0=