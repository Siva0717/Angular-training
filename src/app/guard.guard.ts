import { inject, Injectable } from '@angular/core';

import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const isAuthenticated=localStorage.getItem('username')
  

  if (isAuthenticated ==undefined) {
    alert("Please login to Access Home page")
      router.navigate(['/login']);
      return false;
      
  }

  return true;
}