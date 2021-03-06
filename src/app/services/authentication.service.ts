import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  public isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  constructor() {}
}
