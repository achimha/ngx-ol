import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
export class LayerComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    ngOnInit() {
        if (this.prerender !== null && this.prerender !== undefined) {
            this.instance.on('prerender', this.prerender);
        }
        if (this.postrender !== null && this.postrender !== undefined) {
            this.instance.on('postrender', this.postrender);
        }
        this.host.instance.getLayers().push(this.instance);
    }
    ngOnDestroy() {
        this.host.instance.getLayers().remove(this.instance);
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
                if (key === 'prerender') {
                    this.instance.un('prerender', changes[key].previousValue);
                    this.instance.on('prerender', changes[key].currentValue);
                }
                if (key === 'postrender') {
                    this.instance.un('postrender', changes[key].previousValue);
                    this.instance.on('postrender', changes[key].currentValue);
                }
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
}
tslib_1.__decorate([
    Input()
], LayerComponent.prototype, "opacity", void 0);
tslib_1.__decorate([
    Input()
], LayerComponent.prototype, "visible", void 0);
tslib_1.__decorate([
    Input()
], LayerComponent.prototype, "extent", void 0);
tslib_1.__decorate([
    Input()
], LayerComponent.prototype, "zIndex", void 0);
tslib_1.__decorate([
    Input()
], LayerComponent.prototype, "minResolution", void 0);
tslib_1.__decorate([
    Input()
], LayerComponent.prototype, "maxResolution", void 0);
tslib_1.__decorate([
    Input()
], LayerComponent.prototype, "prerender", void 0);
tslib_1.__decorate([
    Input()
], LayerComponent.prototype, "postrender", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0MsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1uRixNQUFNLE9BQWdCLGNBQWM7SUFzQmxDLFlBQXNCLElBQXdDO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQW9DO1FBcEJ2RCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztJQW9Ca0MsQ0FBQztJQUVsRSxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLFVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQzVDLElBQUksR0FBRyxLQUFLLFdBQVcsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQ0QsSUFBSSxHQUFHLEtBQUssWUFBWSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUMzRDthQUNGO1NBQ0Y7UUFDRCxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQXREQztJQURDLEtBQUssRUFBRTsrQ0FDUTtBQUVoQjtJQURDLEtBQUssRUFBRTsrQ0FDUztBQUVqQjtJQURDLEtBQUssRUFBRTs4Q0FDTztBQUVmO0lBREMsS0FBSyxFQUFFOzhDQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7cURBQ2M7QUFFdEI7SUFEQyxLQUFLLEVBQUU7cURBQ2M7QUFHdEI7SUFEQyxLQUFLLEVBQUU7aURBQ3dCO0FBRWhDO0lBREMsS0FBSyxFQUFFO2tEQUN5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnb2wvZXZlbnRzL0V2ZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpbnN0YW5jZTogYW55O1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdsYXllcic7XG5cbiAgQElucHV0KClcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB2aXNpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBleHRlbnQ6IEV4dGVudDtcbiAgQElucHV0KClcbiAgekluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHByZXJlbmRlcjogKGV2dDogRXZlbnQpID0+IHZvaWQ7XG4gIEBJbnB1dCgpXG4gIHBvc3RyZW5kZXI6IChldnQ6IEV2ZW50KSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBNYXBDb21wb25lbnQgfCBMYXllckdyb3VwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnByZXJlbmRlciAhPT0gbnVsbCAmJiB0aGlzLnByZXJlbmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVyZW5kZXInLCB0aGlzLnByZXJlbmRlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc3RyZW5kZXIgIT09IG51bGwgJiYgdGhpcy5wb3N0cmVuZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bvc3RyZW5kZXInLCB0aGlzLnBvc3RyZW5kZXIpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuZ2V0TGF5ZXJzKCkucHVzaCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5nZXRMYXllcnMoKS5yZW1vdmUodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3ByZXJlbmRlcicpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLnVuKCdwcmVyZW5kZXInLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigncHJlcmVuZGVyJywgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PT0gJ3Bvc3RyZW5kZXInKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51bigncG9zdHJlbmRlcicsIGNoYW5nZXNba2V5XS5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLWxheWVyLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG59XG4iXX0=