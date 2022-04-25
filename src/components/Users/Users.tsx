import React from 'react';
import {usersType, userType} from "../../Redux/reducer-users";
import {User} from "./User/User";
import {Button} from "@material-ui/core";

type usersPropsType = {
    users: Array<userType>,
    setUsers: () => void,
    follow: (id: string) => void,
    unFollow: (id: string) => void
}

export const Users = (props: usersPropsType) => {

    const listUsers = props.users.map(el =>
        <User key={el.id+el.fullName}
            follow={props.follow}
              unFollow={props.unFollow}
              user={el}
        />
    )

    const onSetUsers = () => {
        props.setUsers()
    }

    return (
        <div>
            <div>
                {listUsers}
            </div>
            <p></p>
            <div >
                <Button variant="contained" onClick={onSetUsers} style={{width:'100%', background:'green', color:'white'}}>
                    SET USERS
                </Button>
            </div>
        </div>
    );
};