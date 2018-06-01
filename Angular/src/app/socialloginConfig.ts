import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angular5-social-login";

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("93265941175-95jhhhon6rc0upbl3ta24lj9bcsbvks9.apps.googleusercontent.com")
    }]);
    
    return config;
}