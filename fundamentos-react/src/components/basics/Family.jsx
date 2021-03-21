import React, { cloneElement } from "react";

const Family = props => {
    return (
        <div>
            {
                props.children.map(child => {
                    return cloneElement(child, { ...props });
                })
            }
        </div>
    );
};

export default Family;
