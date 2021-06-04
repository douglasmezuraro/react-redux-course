import { useEffect, useState } from "react";

export const useFetch = (method, url) => {
    const [response, setResponse] = useState({ data: null });

    useEffect(() =>
        fetch(url, { method })
            .then(response => response.json())
            .then(json => setResponse({ data: json })),
        [url, method]);

    return response;
};
