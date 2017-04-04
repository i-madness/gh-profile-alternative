import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'overview',
    templateUrl: './overview.component.html',
})
export class OverviewContainer implements OnInit {
    username: String;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.parent.params.subscribe(params => {
            this.username = params["username"];
        })
    }

}