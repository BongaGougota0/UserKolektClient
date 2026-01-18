import { inject } from "@angular/core";
import { Router } from "@angular/router";

export class GlobalFunctions {

  public static router = inject(Router);

  static navigate(path: string) {
    this.router.navigateByUrl(path);
  }
}

export const navigate = GlobalFunctions.navigate;