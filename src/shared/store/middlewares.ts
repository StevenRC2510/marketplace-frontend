import { applyMiddleware } from 'redux';
import { History } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MicroserviceApi } from '../api/';

const microserviceUrl = 'https://api-rest-marketplace.herokuapp.com/api/v1';

export const AppMiddlewares = (history: History) =>
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        api: new MicroserviceApi(microserviceUrl),
      }),
      routerMiddleware(history)
    )
  );
