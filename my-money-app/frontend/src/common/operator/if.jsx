const If = ({ children, condition }) => {
    if (condition) {
        return children;
    };

    return false;
}

export default If;
