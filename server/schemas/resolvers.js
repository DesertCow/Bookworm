const { Profile } = require('../models');

const resolvers = {
  Query: {
    // books: async () => {
    //   return Book.find();
    // },

    // book: async (parent, { bookId }) => {
    //   return Book.findOne({ _id: bookId });
    // },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      return Auth;
    },
    addUser: async (partent, { username, email, password }) => {
      return Auth;
    },
    // saveBook: async (partent, { [authors], description, title, bookid, image, link }) => {
    //   return User;
    // },
    removeBook: async (partent, { bookId }) => {
      return User;
    },
    // addProfile: async (parent, { name }) => {
    //   return Profile.create({ name });
    // },
    // addSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     {
    //       $addToSet: { skills: skill },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeProfile: async (parent, { profileId }) => {
    //   return Profile.findOneAndDelete({ _id: profileId });
    // },
    // removeSkill: async (parent, { profileId, skill }) => {
    //   return Profile.findOneAndUpdate(
    //     { _id: profileId },
    //     { $pull: { skills: skill } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;