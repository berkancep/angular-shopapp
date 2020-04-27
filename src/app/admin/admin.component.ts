import { Component } from "@angular/core";
import { AuthService } from '../model/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-main',
    templateUrl: 'admin.component.html'
})

export class AdminComponent {
    constructor(private authService: AuthService,
        private router: Router) { }

    logout() {
        this.authService.clear();
        this.router.navigateByUrl('/shop');
    }
}