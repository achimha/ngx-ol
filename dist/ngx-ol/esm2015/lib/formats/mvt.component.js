import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
export class FormatMVTComponent extends FormatComponent {
    constructor() {
        super();
        this.instance = new MVT(this);
    }
}
FormatMVTComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-format-mvt',
                template: '',
                providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }]
            },] }
];
FormatMVTComponent.ctorParameters = () => [];
FormatMVTComponent.propDecorators = {
    featureClass: [{ type: Input }],
    geometryName: [{ type: Input }],
    layerName: [{ type: Input }],
    layers: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoaW1oYS9Qcm9qZWN0cy9uZ3gtb2wvcHJvamVjdHMvbmd4LW9sL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9mb3JtYXRzL212dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBUWhDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlO0lBWXJEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDO2FBQzdGOzs7OzJCQUlFLEtBQUs7MkJBRUwsS0FBSzt3QkFFTCxLQUFLO3FCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtYXRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1hdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTVZUIH0gZnJvbSAnb2wvZm9ybWF0JztcbmltcG9ydCB7IEZlYXR1cmVDbGFzcyB9IGZyb20gJ29sL0ZlYXR1cmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtZm9ybWF0LW12dCcsXG4gIHRlbXBsYXRlOiAnJyxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBGb3JtYXRDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1hdE1WVENvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdE1WVENvbXBvbmVudCBleHRlbmRzIEZvcm1hdENvbXBvbmVudCB7XG4gIGluc3RhbmNlOiBNVlQ7XG5cbiAgQElucHV0KClcbiAgZmVhdHVyZUNsYXNzOiBGZWF0dXJlQ2xhc3M7XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXllck5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGF5ZXJzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTVZUKHRoaXMpO1xuICB9XG59XG4iXX0=