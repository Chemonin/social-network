const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const store = {
  _state: {
    homePage: {
      posts: [
        {
          "id": 1,
          "teaser": "Если вы — новый волонтер Диаконии, или только думаете, " +
              "не помочь ли нам и хотите больше о нас узнать, приглашаем на вебинар, " +
              "который состоится 2-10-2021, в 20:00 по Берлину, в zoom. Если вы хотите " +
              "принять участие, обратитесь по адресу yuli.nazarov@orthodiakonia.de",
          "likesCount": 2,
          "title": "Вебинар для всех, кто хочет помочь другому, 2-10-2021",
          "date": "Опубликовано 27 Сентябрь 2021 г."
        },
        {
          "id": 1,
          "teaser": "Если вы — новый волонтер Диаконии, или только думаете, " +
              "не помочь ли нам и хотите больше о нас узнать, приглашаем на вебинар, " +
              "который состоится 2-10-2021, в 20:00 по Берлину, в zoom. Если вы хотите " +
              "принять участие, обратитесь по адресу yuli.nazarov@orthodiakonia.de",
          "likesCount": 2,
          "title": "Вебинар для всех, кто хочет помочь другому, 2-10-2021",
          "date": "Опубликовано 27 Сентябрь 2021 г."
        },
        {
          "id": 1,
          "teaser": "Если вы — новый волонтер Диаконии, или только думаете, " +
              "не помочь ли нам и хотите больше о нас узнать, приглашаем на вебинар, " +
              "который состоится 2-10-2021, в 20:00 по Берлину, в zoom. Если вы хотите " +
              "принять участие, обратитесь по адресу yuli.nazarov@orthodiakonia.de",
          "likesCount": 2,
          "title": "Вебинар для всех, кто хочет помочь другому, 2-10-2021",
          "date": "Опубликовано 27 Сентябрь 2021 г."
        },
      ],
      newPostText: 'new text'
    },
    dialogsPage: {
      dialogs: [
        {"id": 1, "name": "Ivan"},
        {"id": 2, "name": "Peter"},
        {"id": 3, "name": "Oleg"},
        {"id": 4, "name": "Valera"},
        {"id": 5, "name": "Dima"},
      ],
      messages: [
        {"id": 1, "text": "Hello, Friend"},
        {"id": 2, "text": "How are you?"},
        {"id": 3, "text": "You looks great"},
        {"id": 4, "text": "Thanks, you too"},
      ],
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        date: "12.12.2000",
        title: "Title",
        teaser: this._state.homePage.newPostText,
      }
      this._state.homePage.posts.push(newPost);
      this._state.homePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.homePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => {
  return { type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
window.store = store;
export default store;