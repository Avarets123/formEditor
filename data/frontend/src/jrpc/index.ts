import { JSONRPCClient } from "json-rpc-2.0";


export const client:JSONRPCClient = new JSONRPCClient((data) =>
    fetch("http://localhost:3003/api/form/create", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.status === 200) {
            return response
                .json()
                .then((jsonRPCResponse) => client.receive(jsonRPCResponse))
        } else if (data.id !== undefined) {
            return Promise.reject(new Error(response.statusText));
        }
    })
);




