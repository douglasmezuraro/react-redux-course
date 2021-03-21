import React from "react";

const FamilyMember = props => {
    const { name, lastName } = props;

    return (
        <div>
            <p>{name} {lastName}</p>
        </div>
    );
};

export default FamilyMember;
