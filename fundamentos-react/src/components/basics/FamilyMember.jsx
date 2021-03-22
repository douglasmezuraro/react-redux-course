import React from "react";

const FamilyMember = props => {
    const { id, name, lastName } = props;

    return (
        <div key={id}>
            <p>{name} {lastName}</p>
        </div>
    );
};

export default FamilyMember;
