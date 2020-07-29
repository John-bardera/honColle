import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiRequestInterceptor } from './api-request-interceptor';
import { ApiResponseInterceptor } from './api-response-interceptor';
import { CacheInterceptor } from './cache-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiRequestInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ApiResponseInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
];
