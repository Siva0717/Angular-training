import { inject, Injectable } from '@angular/core';

import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const isAuthenticated=localStorage.getItem('username')
  

  if (isAuthenticated ==undefined) {
      router.navigate(['/login']);
      return false;
  }

  return true;
}