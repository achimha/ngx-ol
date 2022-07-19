import { __decorate } from "tslib";
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
__decorate([
    Input()
], LayerComponent.prototype, "opacity", void 0);
__decorate([
    Input()
], LayerComponent.prototype, "visible", void 0);
__decorate([
    Input()
], LayerComponent.prototype, "extent", void 0);
__decorate([
    Input()
], LayerComponent.prototype, "zIndex", void 0);
__decorate([
    Input()
], LayerComponent.prototype, "minResolution", void 0);
__decorate([
    Input()
], LayerComponent.prototype, "maxResolution", void 0);
__decorate([
    Input()
], LayerComponent.prototype, "prerender", void 0);
__decorate([
    Input()
], LayerComponent.prototype, "postrender", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0MsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1uRixNQUFNLE9BQWdCLGNBQWM7SUFzQmxDLFlBQXNCLElBQXdDO1FBQXhDLFNBQUksR0FBSixJQUFJLENBQW9DO1FBcEJ2RCxrQkFBYSxHQUFHLE9BQU8sQ0FBQztJQW9Ca0MsQ0FBQztJQUVsRSxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLFVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7Z0JBQzVDLElBQUksR0FBRyxLQUFLLFdBQVcsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDMUQ7Z0JBQ0QsSUFBSSxHQUFHLEtBQUssWUFBWSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUMzRDthQUNGO1NBQ0Y7UUFDRCxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDRjtBQXREQztJQURDLEtBQUssRUFBRTsrQ0FDUTtBQUVoQjtJQURDLEtBQUssRUFBRTsrQ0FDUztBQUVqQjtJQURDLEtBQUssRUFBRTs4Q0FDTztBQUVmO0lBREMsS0FBSyxFQUFFOzhDQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7cURBQ2M7QUFFdEI7SUFEQyxLQUFLLEVBQUU7cURBQ2M7QUFHdEI7SUFEQyxLQUFLLEVBQUU7aURBQ3dCO0FBRWhDO0lBREMsS0FBSyxFQUFFO2tEQUN5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJ29sL2V2ZW50cyc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaW5zdGFuY2U6IGFueTtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnbGF5ZXInO1xuXG4gIEBJbnB1dCgpXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KClcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZXh0ZW50OiBFeHRlbnQ7XG4gIEBJbnB1dCgpXG4gIHpJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwcmVyZW5kZXI6IChldnQ6IEV2ZW50KSA9PiB2b2lkO1xuICBASW5wdXQoKVxuICBwb3N0cmVuZGVyOiAoZXZ0OiBFdmVudCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaG9zdDogTWFwQ29tcG9uZW50IHwgTGF5ZXJHcm91cENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wcmVyZW5kZXIgIT09IG51bGwgJiYgdGhpcy5wcmVyZW5kZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncHJlcmVuZGVyJywgdGhpcy5wcmVyZW5kZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3N0cmVuZGVyICE9PSBudWxsICYmIHRoaXMucG9zdHJlbmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgdGhpcy5wb3N0cmVuZGVyKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLmdldExheWVycygpLnB1c2godGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuZ2V0TGF5ZXJzKCkucmVtb3ZlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICAgIGlmIChrZXkgPT09ICdwcmVyZW5kZXInKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51bigncHJlcmVuZGVyJywgY2hhbmdlc1trZXldLnByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ3ByZXJlbmRlcicsIGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09ICdwb3N0cmVuZGVyJykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudW4oJ3Bvc3RyZW5kZXInLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdHJlbmRlcicsIGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1sYXllciwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgfVxufVxuIl19