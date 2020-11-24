import userRepository from './userRepository';
import authRepository from './authRepository';
import infoRepository from './infoRepository'
const repositories = {
    'users': userRepository,
    'auth': authRepository,
    'info': infoRepository
}
export default {
    get: name => repositories[name]
};