import { initialState } from '../State';
import { NotificationActions, Notification } from './notificationType';

const notificationReducer = (
  state = initialState.notifications,
  action: NotificationActions,
): Notification[] => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [action.payload.newNotification, ...state];
    case 'REMOVE_NOTIFICATION':
      return state.filter((notif) => notif.id !== action.payload.id);
    default:
      return state;
  }
};

export default notificationReducer;
