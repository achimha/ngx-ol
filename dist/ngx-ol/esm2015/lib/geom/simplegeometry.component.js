import { Input, Directive } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
export class SimpleGeometryComponent {
    constructor(map, host) {
        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
    }
    ngOnInit() {
        this.host.instance.setGeometry(this.instance);
    }
}
SimpleGeometryComponent.decorators = [
    { type: Directive }
];
SimpleGeometryComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
SimpleGeometryComponent.propDecorators = {
    srid: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2hpbWhhL1Byb2plY3RzL25neC1vbC9wcm9qZWN0cy9uZ3gtb2wvc3JjLyIsInNvdXJjZXMiOlsibGliL2dlb20vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUloRCxNQUFNLE9BQWdCLHVCQUF1QjtJQU0zQyxZQUFzQixHQUFpQixFQUFZLElBQXNCO1FBQW5ELFFBQUcsR0FBSCxHQUFHLENBQWM7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUpsRSxrQkFBYSxHQUFHLGlCQUFpQixDQUFDO0lBSW1DLENBQUM7SUFFN0UsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBWEYsU0FBUzs7O1lBSEQsWUFBWTtZQURaLGdCQUFnQjs7O21CQVN0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uSW5pdCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgU2ltcGxlR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9TaW1wbGVHZW9tZXRyeSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGluc3RhbmNlOiBTaW1wbGVHZW9tZXRyeTtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnc2ltcGxlLWdlb21ldHJ5JztcblxuICBASW5wdXQoKSBzcmlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1hcDogTWFwQ29tcG9uZW50LCBwcm90ZWN0ZWQgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0R2VvbWV0cnkodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==