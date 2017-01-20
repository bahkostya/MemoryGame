import { fromJS } from 'immutable';

export default (time = 3600000) => {
    const savedState = fromJS(JSON.parse(localStorage.getItem('memoryGame')));
    const lastGameStartedTime = savedState && savedState.get('startedAt');
    return (Date.now() - lastGameStartedTime > time);
};
