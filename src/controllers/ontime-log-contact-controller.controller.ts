import { Response, RestBindings, param, post, requestBody, del, get, response} from '@loopback/rest';
import { OntimeLogContactService } from '../service';
import { OntimeLogContactModel } from '../models';
import { inject, service } from '@loopback/core';
import { Filter, repository } from '@loopback/repository';
import { OntimeLogContactModelRepository } from '../repositories';



export class OntimeLogContactControllerController {
  constructor(
    @repository(OntimeLogContactModelRepository) public ontimeLogRepository: OntimeLogContactModelRepository,
    @service(OntimeLogContactService) public ontimeLogService: OntimeLogContactService,
  ) {}

  @post('/send-messages')
  async createMessage(
    @requestBody() contact: OntimeLogContactModel,
    //@inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<void> {
    await this.ontimeLogService.sendContact(contact);

    //response.status(200).send({ message: 'Message sent successfully' });
  }
}
