import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.authenticated) {
            this.router.navigateByUrl('/admin/auth');
        }
        else {
            return true;
        }
    }
}