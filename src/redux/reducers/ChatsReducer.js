import * as types from "../types";

const initialState = {
  inbox: [],
};

const MAX_INBOXS = 3;

export default function Chat(state = initialState, action = {}) {
  switch (action.type) {
    case types.OPEN_CHAT:
      var index = state.inbox.findIndex(
        (c) => c.guest._id === action.payload.guest._id
      );
      if (index === -1) {
        if (state.inbox.length < MAX_INBOXS) {
          return {
            ...state,
            inbox: [...state.inbox, action.payload],
          };
        } else {
          return {
            ...state,
            inbox: [...state.inbox.slice(1), action.payload],
          };
        }
      } else {
        return state;
      }
    case types.UPDATE_CHAT:
      return {
        ...state,
        inbox: state.inbox.map((inb) =>
          inb._id === action.payload._id
            ? {
                ...inb,
                messages: [
                  ...inb.messages,
                  action.payload.messages[action.payload.messages.length - 1],
                ],
              }
            : { ...inb }
        ),
      };
    case types.CLOSE_CHAT:
      var index = state.inbox.findIndex(
        (c) => c.guest._id === action.payload.guest._id
      );
      return {
        ...state,

        inbox: [
          ...state.inbox.slice(0, index),
          ...state.inbox.slice(index + 1),
        ],
      };

    default:
      return state;
  }
}
