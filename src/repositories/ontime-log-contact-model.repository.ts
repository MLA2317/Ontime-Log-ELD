import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OntimeLogContactDataSource} from '../datasources';
import {OntimeLogContactModel, OntimeLogContactModelRelations} from '../models';

export class OntimeLogContactModelRepository extends DefaultCrudRepository<
  OntimeLogContactModel,
  typeof OntimeLogContactModel.prototype.id,
  OntimeLogContactModelRelations
> {
  constructor(
    @inject('datasources.OntimeLogContact') dataSource: OntimeLogContactDataSource,
  ) {
    super(OntimeLogContactModel, dataSource);
  }
}
