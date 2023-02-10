import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailSendService {
    private readonly mail;
    constructor(mail: MailerService);
    signUpMail(user_email: string): Promise<boolean>;
}
