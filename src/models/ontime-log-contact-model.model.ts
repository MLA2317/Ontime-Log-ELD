import {Entity, model, property} from '@loopback/repository';

@model()
export class OntimeLogContactModel extends Entity {
  @property({type: 'string', id: true, defaultFn: 'uuidv4'}) id: string;
  @property({type: 'string', required: true}) name: string;
  @property({type: 'string', nullable: true, format: 'email'}) email: string;
  @property({type: 'string', nullable: true}) company_name: string;
  @property({type: 'number', nullable: true}) amount?: number;
  @property({type: 'string', required: true}) phone_number: string;
  @property({type: 'string', }) message: string;


  constructor(data?: Partial<OntimeLogContactModel>) {
    super(data);
  }
}

export interface OntimeLogContactModelRelations {
  // describe navigational properties here
}

export type OntimeLogContactModelWithRelations = OntimeLogContactModel & OntimeLogContactModelRelations;
