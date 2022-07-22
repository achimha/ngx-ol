import { Component, Host, Input, forwardRef, ContentChild } from '@angular/core';
import { VectorTile } from 'ol/source';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
export class SourceVectorTileComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    /* need the children to construct the OL3 object */
    ngAfterContentInit() {
        this.format = this.formatComponent.instance;
        this.tileGrid = this.tileGridComponent.instance;
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        this.host.instance.setSource(this.instance);
    }
}
SourceVectorTileComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-source-vectortile',
                template: ` <ng-content></ng-content> `,
                providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }]
            },] }
];
SourceVectorTileComponent.ctorParameters = () => [
    { type: LayerVectorTileComponent, decorators: [{ type: Host }] }
];
SourceVectorTileComponent.propDecorators = {
    cacheSize: [{ type: Input }],
    overlaps: [{ type: Input }],
    projection: [{ type: Input }],
    tilePixelRatio: [{ type: Input }],
    tileUrlFunction: [{ type: Input }],
    url: [{ type: Input }],
    urls: [{ type: Input }],
    wrapX: [{ type: Input }],
    formatComponent: [{ type: ContentChild, args: [FormatComponent, { static: false },] }],
    tileGridComponent: [{ type: ContentChild, args: [TileGridComponent, { static: false },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGltaGEvUHJvamVjdHMvbmd4LW9sL3Byb2plY3RzL25neC1vbC9zcmMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy92ZWN0b3J0aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUd2QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBU3JELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxlQUFlO0lBMEI1RCxZQUFvQixLQUErQjtRQUNqRCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsbURBQW1EO0lBQ25ELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztRQUNoRCxxRUFBcUU7UUFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUMsRUFBRSxDQUFDO2FBQ3BHOzs7WUFYUSx3QkFBd0IsdUJBc0NsQixJQUFJOzs7d0JBeEJoQixLQUFLO3VCQUVMLEtBQUs7eUJBRUwsS0FBSzs2QkFFTCxLQUFLOzhCQUVMLEtBQUs7a0JBRUwsS0FBSzttQkFFTCxLQUFLO29CQUVMLEtBQUs7OEJBR0wsWUFBWSxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0NBRy9DLFlBQVksU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZlY3RvclRpbGUgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcbmltcG9ydCB7IExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdENvbXBvbmVudCB9IGZyb20gJy4uL2Zvcm1hdHMvZm9ybWF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL3RpbGVncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IFVybEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdmVjdG9ydGlsZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHB1YmxpYyBpbnN0YW5jZTogVmVjdG9yVGlsZTtcbiAgQElucHV0KClcbiAgY2FjaGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG92ZXJsYXBzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgdGlsZVBpeGVsUmF0aW86IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlsZVVybEZ1bmN0aW9uOiBVcmxGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHVybHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcblxuICBAQ29udGVudENoaWxkKEZvcm1hdENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIGZvcm1hdENvbXBvbmVudDogRm9ybWF0Q29tcG9uZW50O1xuICBmb3JtYXQ6IEZlYXR1cmU7XG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KVxuICB0aWxlR3JpZENvbXBvbmVudDogVGlsZUdyaWRDb21wb25lbnQ7XG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvclRpbGVDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICAvKiBuZWVkIHRoZSBjaGlsZHJlbiB0byBjb25zdHJ1Y3QgdGhlIE9MMyBvYmplY3QgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5mb3JtYXRDb21wb25lbnQuaW5zdGFuY2U7XG4gICAgdGhpcy50aWxlR3JpZCA9IHRoaXMudGlsZUdyaWRDb21wb25lbnQuaW5zdGFuY2U7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnNvdXJjZS5WZWN0b3JUaWxlIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3JUaWxlKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==