var SourceBingmapsComponent_1;
import { __decorate, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { BingMaps } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
let SourceBingmapsComponent = SourceBingmapsComponent_1 = class SourceBingmapsComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.imagerySet = 'Aerial';
    }
    ngOnInit() {
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceBingmapsComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceBingmapsComponent.prototype, "cacheSize", void 0);
__decorate([
    Input()
], SourceBingmapsComponent.prototype, "hidpi", void 0);
__decorate([
    Input()
], SourceBingmapsComponent.prototype, "culture", void 0);
__decorate([
    Input()
], SourceBingmapsComponent.prototype, "key", void 0);
__decorate([
    Input()
], SourceBingmapsComponent.prototype, "imagerySet", void 0);
__decorate([
    Input()
], SourceBingmapsComponent.prototype, "maxZoom", void 0);
__decorate([
    Input()
], SourceBingmapsComponent.prototype, "reprojectionErrorThreshold", void 0);
__decorate([
    Input()
], SourceBingmapsComponent.prototype, "tileLoadFunction", void 0);
__decorate([
    Input()
], SourceBingmapsComponent.prototype, "wrapX", void 0);
SourceBingmapsComponent = SourceBingmapsComponent_1 = __decorate([
    Component({
        selector: 'aol-source-bingmaps',
        template: ` <div class="aol-source-bingmaps"></div> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent_1) }]
    }),
    __param(0, Host())
], SourceBingmapsComponent);
export { SourceBingmapsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZ21hcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9iaW5nbWFwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUW5FLElBQWEsdUJBQXVCLCtCQUFwQyxNQUFhLHVCQUF3QixTQUFRLGVBQWU7SUFzQjFELFlBQW9CLEtBQXlCO1FBQzNDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVhmLGVBQVUsR0FBOEUsUUFBUSxDQUFDO0lBWWpHLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRixDQUFBOztZQVI0QixrQkFBa0IsdUJBQWhDLElBQUk7O0FBbEJqQjtJQURDLEtBQUssRUFBRTswREFDVTtBQUVsQjtJQURDLEtBQUssRUFBRTtzREFDTztBQUVmO0lBREMsS0FBSyxFQUFFO3dEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFO29EQUNJO0FBRVo7SUFEQyxLQUFLLEVBQUU7MkRBQ3lGO0FBRWpHO0lBREMsS0FBSyxFQUFFO3dEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFOzJFQUMyQjtBQUVuQztJQURDLEtBQUssRUFBRTtpRUFDdUI7QUFFL0I7SUFEQyxLQUFLLEVBQUU7c0RBQ087QUFwQkosdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLDJDQUEyQztRQUNyRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBdUIsQ0FBQyxFQUFFLENBQUM7S0FDbEcsQ0FBQztJQXVCYSxXQUFBLElBQUksRUFBRSxDQUFBO0dBdEJSLHVCQUF1QixDQThCbkM7U0E5QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCaW5nTWFwcyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtYmluZ21hcHMnLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXNvdXJjZS1iaW5nbWFwc1wiPjwvZGl2PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlQmluZ21hcHNDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VCaW5nbWFwc0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBCaW5nTWFwcztcblxuICBASW5wdXQoKVxuICBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgaGlkcGk6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGN1bHR1cmU6IHN0cmluZztcbiAgQElucHV0KClcbiAga2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGltYWdlcnlTZXQ6ICdSb2FkJyB8ICdBZXJpYWwnIHwgJ0FlcmlhbFdpdGhMYWJlbHMnIHwgJ2NvbGxpbnNCYXJ0JyB8ICdvcmRuYW5jZVN1cnZleScgPSAnQWVyaWFsJztcbiAgQElucHV0KClcbiAgbWF4Wm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQmluZ01hcHModGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19