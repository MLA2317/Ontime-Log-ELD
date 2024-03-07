import { BindingScope, bind, injectable } from "@loopback/core";
import { repository } from "@loopback/repository";
import { OntimeLogContactModelRepository } from "../repositories";
import axios from "axios";
import { OntimeLogContactModel } from "../models";

@injectable({scope: BindingScope.TRANSIENT})
//@bind({scope: BindingScope.SINGLETON})
export class OntimeLogContactService{
    constructor(
        @repository(OntimeLogContactModelRepository) private ontimeLogReposritory: OntimeLogContactModelRepository,
    ) {}

    async sendContact(contact: OntimeLogContactModel){
        await this.ontimeLogReposritory.create(contact);
        await this.sendTelegramContact(contact);
    }

    private async sendTelegramContact(contact: OntimeLogContactModel){
    const {name, email, company_name, amount, phone_number, message: userMessage} = contact;
    const telegramContact = `
        <b>Ontime Log Contact Receiver:</b>
        <b>Name:</b> ${name}
        <b>Email:</b> ${email}
        <b>Company Name:</b> ${company_name}
        <b>Amount of truck:</b> ${amount}
        <b>Phone Number:</b> ${phone_number}
        <b>Message:</b> ${userMessage || 'No message provided.'}
    `;
    console.log(telegramContact)

    try {
        const response = await axios.post(
            `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
            {
            chat_id: process.env.CHAT_ID,
            text: telegramContact,
            parse_mode: 'HTML',
            }
        );
        console.log(response.data)
        } catch (error) {
        throw error
        }
    }
}