import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
  public isLandingPage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
}
