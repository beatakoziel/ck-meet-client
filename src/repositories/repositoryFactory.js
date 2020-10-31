import userRepository from './userRepository';

const repositories = {
    'users': userRepository
}
export default {
    get: name => repositories[name]
};