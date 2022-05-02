import React from 'react';
import {userType} from "../../Redux/reducer-users";
import {User} from "./User/User";
import {Button} from "@material-ui/core";
import axios from "axios";

type usersPropsType = {
    users: Array<userType>,
    setUsers: (users: Array<userType>) => void,
    follow: (id: string) => void,
    unFollow: (id: string) => void
}

export class Users extends React.Component<usersPropsType> {
    constructor(props: usersPropsType) {
        super(props)
    }

    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    onAddUsers() {
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.users.map(el =>
                        <User key={el.id + el.name}
                              follow={this.props.follow}
                              unFollow={this.props.unFollow}
                              user={el}
                        />
                    )}
                </div>
                <p></p>
                <div>
                    <Button variant="contained" onClick={this.onAddUsers}
                            style={{width: '100%', background: 'green', color: 'white'}}>
                        SET USERS
                    </Button>
                </div>
            </div>
        );
    }
}