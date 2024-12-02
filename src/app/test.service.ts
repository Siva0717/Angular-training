import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  getGreeting(): string{
    return 'Dependency injected successfully';

  }
  }

