const WithArgument = props => {
    const { a, b, c } = props;
    return (
        <div>
            <p>
                <strong>Argumento a:</strong> {a}.
            </p>
            <p>
                <strong>Argumento b:</strong> {b}.
            </p>
            <p>
                <strong>Argumento c:</strong> {c}.
            </p>
        </div>
    );
};

export default WithArgument;
