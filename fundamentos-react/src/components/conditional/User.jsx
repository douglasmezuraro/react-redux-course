import React from "react";
import Conditional from "./Conditional";

const User = props => {
    const { user } = props;
    return (
        <div>
            <Conditional condition={user && user.name}>
                Seja bem vindo {user.name}!
            </Conditional>
        </div >
    );
};

export default User;
