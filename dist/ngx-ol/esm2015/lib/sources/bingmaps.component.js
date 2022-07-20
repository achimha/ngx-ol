var SourceBingmapsComponent_1;
import * as tslib_1 from "tslib";
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
tslib_1.__decorate([
    Input()
], SourceBingmapsComponent.prototype, "cacheSize", void 0);
tslib_1.__decorate([
    Input()
], SourceBingmapsComponent.prototype, "hidpi", void 0);
tslib_1.__decorate([
    Input()
], SourceBingmapsComponent.prototype, "culture", void 0);
tslib_1.__decorate([
    Input()
], SourceBingmapsComponent.prototype, "key", void 0);
tslib_1.__decorate([
    Input()
], SourceBingmapsComponent.prototype, "imagerySet", void 0);
tslib_1.__decorate([
    Input()
], SourceBingmapsComponent.prototype, "maxZoom", void 0);
tslib_1.__decorate([
    Input()
], SourceBingmapsComponent.prototype, "reprojectionErrorThreshold", void 0);
tslib_1.__decorate([
    Input()
], SourceBingmapsComponent.prototype, "tileLoadFunction", void 0);
tslib_1.__decorate([
    Input()
], SourceBingmapsComponent.prototype, "wrapX", void 0);
SourceBingmapsComponent = SourceBingmapsComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'aol-source-bingmaps',
        template: ` <div class="aol-source-bingmaps"></div> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent_1) }]
    }),
    tslib_1.__param(0, Host())
], SourceBingmapsComponent);
export { SourceBingmapsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZ21hcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvYmluZ21hcHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVFuRSxJQUFhLHVCQUF1QiwrQkFBcEMsTUFBYSx1QkFBd0IsU0FBUSxlQUFlO0lBc0IxRCxZQUFvQixLQUF5QjtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFYZixlQUFVLEdBQThFLFFBQVEsQ0FBQztJQVlqRyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTs7WUFSNEIsa0JBQWtCLHVCQUFoQyxJQUFJOztBQWxCakI7SUFEQyxLQUFLLEVBQUU7MERBQ1U7QUFFbEI7SUFEQyxLQUFLLEVBQUU7c0RBQ087QUFFZjtJQURDLEtBQUssRUFBRTt3REFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTtvREFDSTtBQUVaO0lBREMsS0FBSyxFQUFFOzJEQUN5RjtBQUVqRztJQURDLEtBQUssRUFBRTt3REFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTsyRUFDMkI7QUFFbkM7SUFEQyxLQUFLLEVBQUU7aUVBQ3VCO0FBRS9CO0lBREMsS0FBSyxFQUFFO3NEQUNPO0FBcEJKLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLFFBQVEsRUFBRSwyQ0FBMkM7UUFDckQsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXVCLENBQUMsRUFBRSxDQUFDO0tBQ2xHLENBQUM7SUF1QmEsbUJBQUEsSUFBSSxFQUFFLENBQUE7R0F0QlIsdUJBQXVCLENBOEJuQztTQTlCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJpbmdNYXBzIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1iaW5nbWFwcycsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtc291cmNlLWJpbmdtYXBzXCI+PC9kaXY+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VCaW5nbWFwc0NvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUJpbmdtYXBzQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IEJpbmdNYXBzO1xuXG4gIEBJbnB1dCgpXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBoaWRwaTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgY3VsdHVyZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBrZXk6IHN0cmluZztcbiAgQElucHV0KClcbiAgaW1hZ2VyeVNldDogJ1JvYWQnIHwgJ0FlcmlhbCcgfCAnQWVyaWFsV2l0aExhYmVscycgfCAnY29sbGluc0JhcnQnIHwgJ29yZG5hbmNlU3VydmV5JyA9ICdBZXJpYWwnO1xuICBASW5wdXQoKVxuICBtYXhab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBCaW5nTWFwcyh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=