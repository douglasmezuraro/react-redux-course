const WithArgument = props => {
    const { first, second, third } = props;

    return (
        <div>
            <p>
                <strong>Primeiro argumento:</strong> {first}
            </p>
            <p>
                <strong>Segundo argumento:</strong> {second}
            </p>
            <p>
                <strong>Terceiro argumento:</strong> {third}
            </p>
        </div>
    );
};

export default WithArgument;
