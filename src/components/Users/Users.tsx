import React, {ChangeEvent} from 'react';
import {userType} from "../../Redux/reducer-users";
import {User} from "./User/User";
import {Button, CircularProgress} from "@material-ui/core";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import style from "./Users.module.css"

type usersPropsType = {
    users: Array<userType>,
    setCurrentPage: (value: number) => void,
    follow: (id: string) => void,
    unFollow: (id: string) => void
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onAddUsers: () => void,
    isLoading: boolean
}


export const Users: React.FC<usersPropsType> = ({
                                                    users,
                                                    currentPage,
                                                    pageSize,
                                                    totalUsersCount,
                                                    follow,
                                                    unFollow,
                                                    onAddUsers,
                                                    setCurrentPage,
                                                    isLoading,
                                                    ...restProps
                                                }) => {

    function onPaginationchange(event: ChangeEvent<unknown>,currentPage: number) {
        setCurrentPage(currentPage)
    }

    let countPages: number = Math.ceil(totalUsersCount / pageSize);
    return (
        < div>
            <div className={style.pagination}>
                <Stack spacing={10}>
                    <Pagination count={countPages}
                                page={currentPage}
                                variant="outlined"
                                onChange={onPaginationchange}/>
                </Stack>
                {isLoading === true ? <CircularProgress color="inherit"/> : null}
            </div>
            < div>
                {
                    users.map((el, i) =>
                        <User key={i}
                              follow={follow}
                              unFollow={unFollow}
                              user={el}
                        />
                    )
                }
            </div>
            <p></p>
            <div>
                <Button variant="contained" onClick={onAddUsers}
                        style={{width: '100%', background: 'green', color: 'white'}}>
                    SET USERS
                </Button>
            </div>
        </div>
    );
};

export default Users;