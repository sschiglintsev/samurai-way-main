import React from 'react';
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img src={'https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg&ga=GA1.2.139782337.1646394489'}/>
            </div>
            <div className={classes.avatar}>
                avatar + info
            </div>
        </div>
    );
};
