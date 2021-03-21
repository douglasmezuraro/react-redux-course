const WithArgument = props => {
    const { a, b} = props;
    return (
        <div>
            <h2> Argumento "a": { a } </h2>
            <h2> Argumento "b": { b } </h2>
        </div>
    );
};

export default WithArgument;