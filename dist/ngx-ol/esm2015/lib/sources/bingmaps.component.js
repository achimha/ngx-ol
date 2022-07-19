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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZ21hcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvYmluZ21hcHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVFuRSxJQUFhLHVCQUF1QiwrQkFBcEMsTUFBYSx1QkFBd0IsU0FBUSxlQUFlO0lBc0IxRCxZQUFvQixLQUF5QjtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFYZixlQUFVLEdBQThFLFFBQVEsQ0FBQztJQVlqRyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTs7WUFSNEIsa0JBQWtCLHVCQUFoQyxJQUFJOztBQWxCakI7SUFEQyxLQUFLLEVBQUU7MERBQ1U7QUFFbEI7SUFEQyxLQUFLLEVBQUU7c0RBQ087QUFFZjtJQURDLEtBQUssRUFBRTt3REFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTtvREFDSTtBQUVaO0lBREMsS0FBSyxFQUFFOzJEQUN5RjtBQUVqRztJQURDLEtBQUssRUFBRTt3REFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTsyRUFDMkI7QUFFbkM7SUFEQyxLQUFLLEVBQUU7aUVBQ3VCO0FBRS9CO0lBREMsS0FBSyxFQUFFO3NEQUNPO0FBcEJKLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFFBQVEsRUFBRSwyQ0FBMkM7UUFDckQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXVCLENBQUMsRUFBRSxDQUFDO0tBQ2xHLENBQUM7SUF1QmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtHQXRCUix1QkFBdUIsQ0E4Qm5DO1NBOUJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmluZ01hcHMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWJpbmdtYXBzJyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cImFvbC1zb3VyY2UtYmluZ21hcHNcIj48L2Rpdj4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUJpbmdtYXBzQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlQmluZ21hcHNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogQmluZ01hcHM7XG5cbiAgQElucHV0KClcbiAgY2FjaGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGhpZHBpOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjdWx0dXJlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGtleTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbWFnZXJ5U2V0OiAnUm9hZCcgfCAnQWVyaWFsJyB8ICdBZXJpYWxXaXRoTGFiZWxzJyB8ICdjb2xsaW5zQmFydCcgfCAnb3JkbmFuY2VTdXJ2ZXknID0gJ0FlcmlhbCc7XG4gIEBJbnB1dCgpXG4gIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlsZUxvYWRGdW5jdGlvbjogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEJpbmdNYXBzKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==