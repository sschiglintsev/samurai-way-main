import React from 'react';
import {addPostAC} from "../../../Redux/reducer-profile";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";
import {rootReducerType} from "../../../Redux/redux-store";

type dispatchType = {
    addPost: (messagePost:string) =>void
}

const mapStateToProps = (state:rootReducerType) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch:any):dispatchType => {
    return {
        addPost: (messagePost:string) => {
            dispatch(addPostAC(messagePost))
        }
    }
}

export const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)