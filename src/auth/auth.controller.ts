import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleGuard } from './utils/Guards';

@Controller()
export class AuthController {

    constructor(private readonly authService : AuthService){}

@Get('login')
@UseGuards(GoogleGuard)
handleConnect(){}


@Get('google/redirect')
@UseGuards(GoogleGuard)
handleRedirect(@Request() req){
return this.authService.handleRedirect(req);
}

}
