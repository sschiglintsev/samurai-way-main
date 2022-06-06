import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../Redux/redux-store";
import {initialAuthStateType, setAuthMe, setAuthMeTC} from "../../Redux/reducer-auth";
import Header from "./Header";

type HeaderContainerAPIType = {
    auth:initialAuthStateType,
    setAuthMeTC:()=>void
}

class HeaderContainerAPI extends React.Component<HeaderContainerAPIType> {

    componentDidMount(): void {
        this.props.setAuthMeTC()
    }

    render() {
        return (
            <>
                <Header
                    login={this.props.auth.login}
                    id={this.props.auth.id}
                    email={this.props.auth.email}
                    isAuth={this.props.auth.isAuth}

                />
            </>
        );
    }
}

type mapStateToPropsType = {
    auth: initialAuthStateType,
}

const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        auth: state.Auth,
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    setAuthMe,setAuthMeTC,
})(HeaderContainerAPI)


