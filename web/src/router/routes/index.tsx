import { AuthRoute } from './auth-route';
import { HomeRoute } from './public-facing-route';

export default [...AuthRoute, ...HomeRoute];
