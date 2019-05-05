import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import checker from './checker';
import logger from './logger';

export default applyMiddleware(
    checker,
    logger,
    thunk
);