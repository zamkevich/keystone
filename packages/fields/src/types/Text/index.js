import { Text, MongoTextInterface, KnexTextInterface } from './Implementation';
import path from 'path';
import { pkgPath } from '../../pkg-path';

export default {
  type: 'Text',
  implementation: Text,
  views: {
    Controller: path.join(pkgPath, 'types', 'Text', 'views', 'Controller'),
    Field: path.join(pkgPath, 'types', 'Text', 'views', 'Field'),
    Filter: path.join(pkgPath, 'types', 'Text', 'views', 'Filter'),
  },
  adapters: {
    mongoose: MongoTextInterface,
    knex: KnexTextInterface,
  },
};
