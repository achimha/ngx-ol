import { __decorate, __extends, __param } from "tslib";
import { Component, SkipSelf, Optional } from '@angular/core';
import { Group } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';
var LayerGroupComponent = /** @class */ (function (_super) {
    __extends(LayerGroupComponent, _super);
    function LayerGroupComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerGroupComponent.prototype.ngOnInit = function () {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerGroupComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: SkipSelf }, { type: Optional }] }
    ]; };
    LayerGroupComponent = __decorate([
        Component({
            selector: 'aol-layer-group',
            template: " <ng-content></ng-content> "
        }),
        __param(1, SkipSelf()),
        __param(1, Optional())
    ], LayerGroupComponent);
    return LayerGroupComponent;
}(LayerComponent));
export { LayerGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXJncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhEO0lBQXlDLHVDQUFjO0lBR3JELDZCQUNFLEdBQWlCLEVBR2pCLEtBQTJCO2VBRTNCLGtCQUFNLEtBQUssSUFBSSxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFaTSxZQUFZO2dCQUdULG1CQUFtQix1QkFGMUIsUUFBUSxZQUNSLFFBQVE7O0lBTkEsbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBTUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7T0FORixtQkFBbUIsQ0FpQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpCRCxDQUF5QyxjQUFjLEdBaUJ0RDtTQWpCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBMYXllckdyb3VwQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpbnN0YW5jZTogR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBNYXBDb21wb25lbnQsXG4gICAgQFNraXBTZWxmKClcbiAgICBAT3B0aW9uYWwoKVxuICAgIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudFxuICApIHtcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coYGNyZWF0aW5nIG9sLmxheWVyLkdyb3VwIGluc3RhbmNlIHdpdGg6YCwgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHcm91cCh0aGlzKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG59XG4iXX0=