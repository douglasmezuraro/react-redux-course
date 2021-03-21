import React from "react";
import FamilyMember from "./FamilyMember";

const Family = props => {
    const { lastName } = props;

    return (
        <div>
            <FamilyMember name="João" lastName={lastName} />
            <FamilyMember name="Ana" {...props} />
            <FamilyMember name="Guilherme" lastName="Ferreira" />
        </div>
    );
};

export default Family;
