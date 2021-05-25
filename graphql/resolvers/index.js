const postResolvers = require('./Posts')
const usersResolvers = require('./Users')

module.exports = {
    Query: {
        ...postResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation
    }
}