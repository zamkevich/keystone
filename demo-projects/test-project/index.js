const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { StaticApp } = require('@keystonejs/app-static');

const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { Content } = require('@keystonejs/field-content');
const { CloudinaryImage } = require('@keystonejs/fields');

const keystone = new Keystone({
  adapter: new MongooseAdapter({
    mongoUri: 'mongodb://localhost/keystone',
  }),
});

const fileAdapter = new CloudinaryAdapter({
  cloudName: 'zamkevich',
  apiKey: '913881843479587',
  apiSecret: 'lXW61x_tS4HFTBvCfM8dy9wpihQ',
  folder: 'test',
});

keystone.createList('Test', {
  fields: {
    extra: {
      type: Content,
      blocks: [
        //Content.blocks.image,
        [CloudinaryImage.blocks.image, { adapter: fileAdapter }],
      ],
      label: 'Test label',
      adminDoc: 'Test adminDoc',
    },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new StaticApp({ path: '/', src: 'public' }),
    // Setup the optional Admin UI
    new AdminUIApp({
      name: 'Keystone To-Do List',
      enableDefaultRoute: true,
    }),
  ],
};
