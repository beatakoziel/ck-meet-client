import userRepository from './userRepository';
import authRepository from './authRepository';
import infoRepository from './infoRepository'
import meetingsRepository from './meetingsRepository'
const repositories = {
    'users': userRepository,
    'auth': authRepository,
    'info': infoRepository,
    'meetings' : meetingsRepository
}
export default {
    get: name => repositories[name]
};