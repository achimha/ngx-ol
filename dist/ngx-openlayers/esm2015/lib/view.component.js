import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import View from 'ol/View';
import { MapComponent } from './map.component';
let ViewComponent = class ViewComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'view';
        this.zoomAnimation = false;
        this.changeZoom = new EventEmitter();
        this.changeResolution = new EventEmitter();
        this.changeCenter = new EventEmitter();
    }
    ngOnInit() {
        // console.log('creating ol.View instance with: ', this);
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        this.instance.on('change:zoom', (event) => this.changeZoom.emit(event));
        this.instance.on('change:resolution', (event) => this.changeResolution.emit(event));
        this.instance.on('change:center', (event) => this.changeCenter.emit(event));
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'zoom':
                        /** Work-around: setting the zoom via setProperties does not work. */
                        if (this.zoomAnimation) {
                            this.instance.animate({ zoom: changes[key].currentValue });
                        }
                        else {
                            this.instance.setZoom(changes[key].currentValue);
                        }
                        break;
                    case 'projection':
                        this.instance = new View(this);
                        this.host.instance.setView(this.instance);
                        break;
                    case 'center':
                        /** Work-around: setting the center via setProperties does not work. */
                        this.instance.setCenter(changes[key].currentValue);
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-view, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    ngOnDestroy() {
        // console.log('removing aol-view');
    }
};
ViewComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], ViewComponent.prototype, "constrainRotation", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "enableRotation", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "extent", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "maxResolution", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "minResolution", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "maxZoom", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "minZoom", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "resolution", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "resolutions", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "rotation", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "zoom", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "zoomFactor", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "center", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "projection", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "constrainOnlyCenter", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "smoothExtentConstraint", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "constrainResolution", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "smoothResolutionConstraint", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "showFullExtent", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "multiWorld", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "zoomAnimation", void 0);
__decorate([
    Output()
], ViewComponent.prototype, "changeZoom", void 0);
__decorate([
    Output()
], ViewComponent.prototype, "changeResolution", void 0);
__decorate([
    Output()
], ViewComponent.prototype, "changeCenter", void 0);
ViewComponent = __decorate([
    Component({
        selector: 'aol-view',
        template: ` <ng-content></ng-content> `
    })
], ViewComponent);
export { ViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi92aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxJQUFJLE1BQU0sU0FBUyxDQUFDO0FBQzNCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVMvQyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBdUR4QixZQUFvQixJQUFrQjtRQUFsQixTQUFJLEdBQUosSUFBSSxDQUFjO1FBckQvQixrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQTRDOUIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIsZUFBVSxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBRXhFLHFCQUFnQixHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO1FBRTlFLGlCQUFZLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7SUFFakMsQ0FBQztJQUUxQyxRQUFRO1FBQ04seURBQXlEO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFn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QU0sRUFBRTttREFDaUU7QUFyRC9ELGFBQWE7SUFKekIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0dBQ1csYUFBYSxDQXdHekI7U0F4R1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgVmlldyBmcm9tICdvbC9WaWV3JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RFdmVudCB9IGZyb20gJ29sJztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC12aWV3JyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpbnN0YW5jZTogVmlldztcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAndmlldyc7XG5cbiAgQElucHV0KClcbiAgY29uc3RyYWluUm90YXRpb246IGJvb2xlYW4gfCBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGVuYWJsZVJvdGF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBleHRlbnQ6IEV4dGVudDtcbiAgQElucHV0KClcbiAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWluWm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcbiAgQElucHV0KClcbiAgcm90YXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgem9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB6b29tRmFjdG9yOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGNlbnRlcjogQ29vcmRpbmF0ZTtcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjb25zdHJhaW5Pbmx5Q2VudGVyOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzbW9vdGhFeHRlbnRDb25zdHJhaW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjb25zdHJhaW5SZXNvbHV0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzbW9vdGhSZXNvbHV0aW9uQ29uc3RyYWludDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvd0Z1bGxFeHRlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIG11bHRpV29ybGQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgem9vbUFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2Vab29tOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZVJlc29sdXRpb246IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlQ2VudGVyOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuVmlldyBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZpZXcodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFZpZXcodGhpcy5pbnN0YW5jZSk7XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6em9vbScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMuY2hhbmdlWm9vbS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOnJlc29sdXRpb24nLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLmNoYW5nZVJlc29sdXRpb24uZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpjZW50ZXInLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLmNoYW5nZUNlbnRlci5lbWl0KGV2ZW50KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlICd6b29tJzpcbiAgICAgICAgICAgIC8qKiBXb3JrLWFyb3VuZDogc2V0dGluZyB0aGUgem9vbSB2aWEgc2V0UHJvcGVydGllcyBkb2VzIG5vdCB3b3JrLiAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuem9vbUFuaW1hdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmFuaW1hdGUoeyB6b29tOiBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRab29tKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncHJvamVjdGlvbic6XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZpZXcodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Vmlldyh0aGlzLmluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgICAgICAvKiogV29yay1hcm91bmQ6IHNldHRpbmcgdGhlIGNlbnRlciB2aWEgc2V0UHJvcGVydGllcyBkb2VzIG5vdCB3b3JrLiAqL1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRDZW50ZXIoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXZpZXcsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIHByb3BlcnRpZXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLXZpZXcnKTtcbiAgfVxufVxuIl19