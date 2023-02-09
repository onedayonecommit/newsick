import { EmailSendService } from './email-send.service';
import { emailDto } from './email.dto';
export declare class EmailSendController {
    private readonly mail;
    constructor(mail: EmailSendService);
    signUpMail(dto: emailDto): Promise<boolean>;
}
