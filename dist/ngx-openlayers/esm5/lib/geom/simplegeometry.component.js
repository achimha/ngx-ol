import { __decorate } from "tslib";
import { Input } from '@angular/core';
var SimpleGeometryComponent = /** @class */ (function () {
    function SimpleGeometryComponent(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    SimpleGeometryComponent.prototype.ngOnInit = function () {
        this.host.instance.setGeometry(this.instance);
    };
    __decorate([
        Input()
    ], SimpleGeometryComponent.prototype, "srid", void 0);
    return SimpleGeometryComponent;
}());
export { SimpleGeometryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvZ2VvbS9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLOUM7SUFNRSxpQ0FBc0IsR0FBaUIsRUFBWSxJQUFzQjtRQUFuRCxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQVksU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFKbEUsa0JBQWEsR0FBRyxpQkFBaUIsQ0FBQztJQUltQyxDQUFDO0lBRTdFLDBDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFOUTtRQUFSLEtBQUssRUFBRTt5REFBYztJQU94Qiw4QkFBQztDQUFBLEFBWEQsSUFXQztTQVhxQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgU2ltcGxlR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9TaW1wbGVHZW9tZXRyeSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBpbnN0YW5jZTogU2ltcGxlR2VvbWV0cnk7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3NpbXBsZS1nZW9tZXRyeSc7XG5cbiAgQElucHV0KCkgc3JpZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtYXA6IE1hcENvbXBvbmVudCwgcHJvdGVjdGVkIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEdlb21ldHJ5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=