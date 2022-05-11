import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {} //implementa a interface http interceptor, manipular a requisiçao antes de ir para o servidor

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenService.possuiToken()){
      const token = this.tokenService.retornaToken()
      const headers = new HttpHeaders().append('access-token', token)
      request = request.clone({ headers })
    }
    return next.handle(request); //para continuar a requisiçao
  }
}
