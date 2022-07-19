import { __decorate, __param } from "tslib";
import { Component, SkipSelf, Optional } from '@angular/core';
import { Group } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';
let LayerGroupComponent = class LayerGroupComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        // console.log(`creating ol.layer.Group instance with:`, this);
        this.instance = new Group(this);
        super.ngOnInit();
    }
};
LayerGroupComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: SkipSelf }, { type: Optional }] }
];
LayerGroupComponent = __decorate([
    Component({
        selector: 'aol-layer-group',
        template: ` <ng-content></ng-content> `
    }),
    __param(1, SkipSelf()),
    __param(1, Optional())
], LayerGroupComponent);
export { LayerGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xheWVyZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGNBQWM7SUFHckQsWUFDRSxHQUFpQixFQUdqQixLQUEyQjtRQUUzQixLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRO1FBQ04sK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBOztZQWJRLFlBQVk7WUFHVCxtQkFBbUIsdUJBRjFCLFFBQVEsWUFDUixRQUFROztBQU5BLG1CQUFtQjtJQUovQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztJQU1HLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixXQUFBLFFBQVEsRUFBRSxDQUFBO0dBTkYsbUJBQW1CLENBaUIvQjtTQWpCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWxheWVyLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBMYXllckdyb3VwQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpbnN0YW5jZTogR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBNYXBDb21wb25lbnQsXG4gICAgQFNraXBTZWxmKClcbiAgICBAT3B0aW9uYWwoKVxuICAgIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudFxuICApIHtcbiAgICBzdXBlcihncm91cCB8fCBtYXApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coYGNyZWF0aW5nIG9sLmxheWVyLkdyb3VwIGluc3RhbmNlIHdpdGg6YCwgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHcm91cCh0aGlzKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG59XG4iXX0=