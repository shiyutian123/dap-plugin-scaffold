import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ddmp-plans',
    templateUrl: './plans.component.html',
    styleUrls: ['./plans.component.less']
})

export class PlansComponent implements OnInit {
    plugin = {
        ddmp_plugin_start: "definesys-ddmp-plugin-conf",
        conf: {
            name: "计划",
            path: "home/app-ddmp-plans",
            description: "xxx",
            icon: "xxx"
        },
        ddmp_plugin_end: "true"
    };
    constructor() {}
    ngOnInit () {
    }
}
