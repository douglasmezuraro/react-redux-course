import React from "react";

const FamilyMember = props => {
    const { name, lastName } = props;

    return (
        <div>
            {name} {lastName}
        </div>
    );
};

export default FamilyMember;
