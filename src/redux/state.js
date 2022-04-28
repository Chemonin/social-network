import partners from '../assets/images/partners'
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
              "принять участие, обратитесь по адресу",
          "likesCount": 2,
          "title": "Вебинар для всех, кто хочет помочь другому, 2-10-2021",
          "date": "Опубликовано 27 Сентябрь 2021 г."
        },
        {
          "id": 1,
          "teaser": "Если вы — новый волонтер Диаконии, или только думаете, " +
              "не помочь ли нам и хотите больше о нас узнать, приглашаем на вебинар, " +
              "который состоится 2-10-2021, в 20:00 по Берлину, в zoom. Если вы хотите " +
              "принять участие, обратитесь по адресу",
          "likesCount": 2,
          "title": "Вебинар для всех, кто хочет помочь другому, 2-10-2021",
          "date": "Опубликовано 27 Сентябрь 2021 г."
        },
        {
          "id": 1,
          "teaser": "Если вы — новый волонтер Диаконии, или только думаете, " +
              "не помочь ли нам и хотите больше о нас узнать, приглашаем на вебинар, " +
              "который состоится 2-10-2021, в 20:00 по Берлину, в zoom. Если вы хотите " +
              "принять участие, обратитесь по адресу",
          "likesCount": 2,
          "title": "Вебинар для всех, кто хочет помочь другому, 2-10-2021",
          "date": "Опубликовано 27 Сентябрь 2021 г."
        },
      ],
      children: [
        {
          "name": "Степан П.",
          "age": "3 года",
          "location": "Курск, Россия",
          "donation_amount": "600 000 евро",
          "diagnose": "нейробластома, рецидив",
          "photo": "https://www.orthodiakonia.de/wp-content/uploads/2022/01/StepanP.jpg"
        },
        {
          "name": "Владимир П.",
          "age": "7 лет",
          "location": "Курск, Россия",
          "donation_amount": "3000 евро",
          "diagnose": "нейробластома, рецидив",
          "photo": "https://www.orthodiakonia.de/wp-content/uploads/2022/01/VladimirP.jpg"
        },
        {
          "name": "Алисия П.",
          "age": "9 лет",
          "location": "Курск, Россия",
          "donation_amount": "1500 евро",
          "diagnose": "нейробластома, рецидив",
          "photo": "https://www.orthodiakonia.de/wp-content/uploads/2022/01/AliciaP-1.jpg"
        },
        {
          "name": "Марфа К.",
          "age": "4 года",
          "location": "Курск, Россия",
          "donation_amount": "3000 евро",
          "diagnose": "нейробластома, рецидив",
          "photo": "https://www.orthodiakonia.de/wp-content/uploads/2022/01/MarthaK-1.jpg"
        }
      ],
      feature: [
        {
          "title": "Feature card title",
          "subtitle": "Card Subtitle",
          "text": "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          "title": "Feature card title",
          "subtitle": "Card Subtitle",
          "text": "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          "title": "Feature card title",
          "subtitle": "Card Subtitle",
          "text": "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
          "title": "Feature card title",
          "subtitle": "Card Subtitle",
          "text": "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
      ],
      partners: [
        {
          "link": "#",
          "logo": partners.blagoserdie
        },
        {
          "link": "#",
          "logo": partners.berlin24
        },
        {
          "link": "#",
          "logo": partners.edition_hagie
        },
        {
          "link": "#",
          "logo": partners.Boleem
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