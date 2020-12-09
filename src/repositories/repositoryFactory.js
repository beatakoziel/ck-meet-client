import userRepository from './userRepository';
import authRepository from './authRepository';
import infoRepository from './infoRepository'
import meetingsRepository from './meetingsRepository'
import relationshipRepository from './relationshipRepository'
const repositories = {
    'users': userRepository,
    'auth': authRepository,
    'info': infoRepository,
    'meetings' : meetingsRepository,
    'relationship' : relationshipRepository
}
export default {
    get: name => repositories[name]
};