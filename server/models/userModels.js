import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  gender: String,
  name: {
    title: String,
    first: String,
    last: String
  },
  location: {
    street: String,
    city: String,
    state: String,
    postcode: String,
    coordinates: {
      latitude: String,
      longitude: String
    },
    timezone: {
      offset: String,
      description: String
    }
  },
  email: String,
  login: {
    uuid: String,
    username: String,
    password: String,
    salt: String,
    md5: String,
    sha1: String,
    sha256: String
  },
  dob: {
    date: String,
    age: Number
  },
  registered: {
    date: String,
    age: Number
  },
  phone: String,
  cell: String,
  userPersonalInfo: {
    name: String,
    value: String
  },
  picture: {
    large: String,
    medium: String,
    thumbnail: String
  },
  nat: String
});

const PostUser = mongoose.model('PostUser', userSchema);

export default PostUser;