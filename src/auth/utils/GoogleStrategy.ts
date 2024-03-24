import {PassportStrategy} from "@nestjs/passport"
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20"
 

export class GoogleStrategy extends PassportStrategy(Strategy){

    constructor(

   // private readonly configService: ConfigService,
    ){

       super({
        // clientID: process.env.clientID,
        // clientSecret: process.env.clientSecret,
        // callbackURL: process.env.callbackURL,
            scope: ['email', 'profile'],
          });
    }



  
    async validate(accessToken: string,refreshToken: string, profile: Profile, done: VerifyCallback) {
        const { name, emails, photos } = profile;
        const user = {
          email: emails[0].value,
          firstName: name.givenName,
          lastName: name.familyName,
          picture: photos[0].value,
          accessToken,
          refreshToken,
        };
        done(null, user);
      }



}