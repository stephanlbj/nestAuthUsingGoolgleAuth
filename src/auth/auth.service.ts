import { Injectable, Request } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AuthService {

    
async handleRedirect(@Request()  req) {
        if (!req.user) {
          return 'No user from google';
        }
    
        return {
          message: 'User information from google',
          user: req.user.email,
        };
      }

}
