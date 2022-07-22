import { Component, Input } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
export class TileGridWMTSComponent extends TileGridComponent {
    ngOnInit() {
        this.instance = new WMTS(this);
    }
}
TileGridWMTSComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-tilegrid-wmts',
                template: ''
            },] }
];
TileGridWMTSComponent.propDecorators = {
    origin: [{ type: Input }],
    origins: [{ type: Input }],
    resolutions: [{ type: Input }],
    matrixIds: [{ type: Input }],
    sizes: [{ type: Input }],
    tileSizes: [{ type: Input }],
    widths: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoaW1oYS9Qcm9qZWN0cy9uZ3gtb2wvcHJvamVjdHMvbmd4LW9sL3NyYy8iLCJzb3VyY2VzIjpbImxpYi90aWxlZ3JpZHdtdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sSUFBSSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUXpELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7SUFrQjFELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLEVBQUU7YUFDYjs7O3FCQUlFLEtBQUs7c0JBRUwsS0FBSzswQkFFTCxLQUFLO3dCQUVMLEtBQUs7b0JBRUwsS0FBSzt3QkFFTCxLQUFLO3FCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBXTVRTIGZyb20gJ29sL3RpbGVncmlkL1dNVFMnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RpbGVncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC10aWxlZ3JpZC13bXRzJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZFdNVFNDb21wb25lbnQgZXh0ZW5kcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBXTVRTO1xuXG4gIEBJbnB1dCgpXG4gIG9yaWdpbj86IENvb3JkaW5hdGU7XG4gIEBJbnB1dCgpXG4gIG9yaWdpbnM/OiBDb29yZGluYXRlW107XG4gIEBJbnB1dCgpXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcbiAgQElucHV0KClcbiAgbWF0cml4SWRzOiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgc2l6ZXM/OiBTaXplW107XG4gIEBJbnB1dCgpXG4gIHRpbGVTaXplcz86IFNpemVbXTtcbiAgQElucHV0KClcbiAgd2lkdGhzPzogbnVtYmVyW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBXTVRTKHRoaXMpO1xuICB9XG59XG4iXX0=