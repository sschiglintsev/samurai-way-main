import {v1} from "uuid";

export let state = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Первый пост', likeCount: 5},
            {id: v1(), message: 'Второй пост', likeCount: 10},
            {id: v1(), message: 'Третий пост', likeCount: 1}
        ]
    },
    messagesPage: {
        dialogs: [
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Vika'},
            {id: v1(), name: 'David'}
        ],
        messages: [
            {id: v1(), message: 'Hi mam'},
            {id: v1(), message: 'Hi bro'},
            {id: v1(), message: 'Hi dady'}
        ]
    }
}



