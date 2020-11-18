import userRepository from './userRepository';
import authRepository from './authRepository';

const repositories = {
    'users': userRepository,
    'auth': authRepository
}
export default {
    get: name => repositories[name]
};