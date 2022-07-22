import { Component, Input } from '@angular/core';
import { defaults } from 'ol/control';
import { MapComponent } from '../map.component';
export class DefaultControlComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach((c) => this.map.instance.addControl(c));
    }
    ngOnDestroy() {
        // console.log('removing aol-control-defaults');
        this.instance.forEach((c) => this.map.instance.removeControl(c));
    }
}
DefaultControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-control-defaults',
                template: ''
            },] }
];
DefaultControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
DefaultControlComponent.propDecorators = {
    attribution: [{ type: Input }],
    attributionOptions: [{ type: Input }],
    rotate: [{ type: Input }],
    rotateOptions: [{ type: Input }],
    zoom: [{ type: Input }],
    zoomOptions: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGltaGEvUHJvamVjdHMvbmd4LW9sL3Byb2plY3RzL25neC1vbC9zcmMvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBVyxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFNL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhELE1BQU0sT0FBTyx1QkFBdUI7SUFlbEMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztJQUFHLENBQUM7SUFFekMsUUFBUTtRQUNOLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFdBQVc7UUFDVCxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLEVBQUU7YUFDYjs7O1lBTFEsWUFBWTs7OzBCQVFsQixLQUFLO2lDQUVMLEtBQUs7cUJBRUwsS0FBSzs0QkFFTCxLQUFLO21CQUVMLEtBQUs7MEJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sLCBkZWZhdWx0cyB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ29sJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgQXR0cmlidXRpb25PcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9BdHRyaWJ1dGlvbic7XG5pbXBvcnQgeyBPcHRpb25zIGFzIFJvdGF0ZU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1JvdGF0ZSc7XG5pbXBvcnQgeyBPcHRpb25zIGFzIFpvb21PcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9ab29tJztcblxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWRlZmF1bHRzJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IENvbGxlY3Rpb248Q29udHJvbD47XG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBhdHRyaWJ1dGlvbk9wdGlvbnM6IEF0dHJpYnV0aW9uT3B0aW9ucztcbiAgQElucHV0KClcbiAgcm90YXRlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICByb3RhdGVPcHRpb25zOiBSb3RhdGVPcHRpb25zO1xuICBASW5wdXQoKVxuICB6b29tOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB6b29tT3B0aW9uczogWm9vbU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5kZWZhdWx0cyBpbml0OiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gZGVmYXVsdHModGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKChjKSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKGMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1kZWZhdWx0cycpO1xuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaCgoYykgPT4gdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbChjKSk7XG4gIH1cbn1cbiJdfQ==