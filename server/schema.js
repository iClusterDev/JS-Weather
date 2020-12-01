const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');

// Hardcoded data
const data = [
  { id: '1', temperature: '32', description: 'sunny', location: 'rome' },
  { id: '2', temperature: '33', description: 'sunny', location: 'londra' },
  { id: '3', temperature: '34', description: 'sunny', location: 'berlin' },
];

// Weather Type
const WeatherType = new GraphQLObjectType({
  name: 'Weather',
  fields: () => ({
    location: { type: GraphQLString },
    temperature: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    weather: {
      type: WeatherType,
      args: {
        latitude: { type: new GraphQLNonNull(GraphQLFloat) },
        longitude: { type: new GraphQLNonNull(GraphQLFloat) },
      },
      resolve(parentValue, args) {
        for (let i = 0; i < data.length; i++) {
          return data[0];
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
