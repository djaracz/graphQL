const graphql = require('graphql');
const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList } = graphql;
const UserType = require('./UserType');

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    parents: { type: new GraphQLList(UserType) },
    users: {
      // type: new GraphQLList(UserType),
      // resolve(parentValue, args) {
      //   return axios.get('http://localhost:3000/users')
      //     .then(response => response.data.filter(user => user.companyId === parentValue.id));
      // }
    }
  })
});

module.exports = CompanyType;
