import { inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router } from "@angular/router";
import { filter, map } from "rxjs";

export function injectUrl(mapFn = (v: string) => v) {
    const router = inject(Router);

    return toSignal(router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => event.urlAfterRedirects),
        map(mapFn),
      ), { initialValue: router.url });
}