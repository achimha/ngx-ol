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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXJncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW9CLFNBQVEsY0FBYztJQUdyRCxZQUNFLEdBQWlCLEVBR2pCLEtBQTJCO1FBRTNCLEtBQUssQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVE7UUFDTiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7O1lBYlEsWUFBWTtZQUdULG1CQUFtQix1QkFGMUIsUUFBUSxZQUNSLFFBQVE7O0FBTkEsbUJBQW1CO0lBSi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0lBTUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FORixtQkFBbUIsQ0FpQi9CO1NBakJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtbGF5ZXItZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIExheWVyR3JvdXBDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGluc3RhbmNlOiBHcm91cDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IE1hcENvbXBvbmVudCxcbiAgICBAU2tpcFNlbGYoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50XG4gICkge1xuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgY3JlYXRpbmcgb2wubGF5ZXIuR3JvdXAgaW5zdGFuY2Ugd2l0aDpgLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEdyb3VwKHRoaXMpO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==