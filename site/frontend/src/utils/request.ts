


export const reqToServer = async (url: string, param: string = '', body: any = null) => {

    if (body) {

        const req = await fetch('http://localhost:3333/form/' + url + '/' + param, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });


        if (!req.ok) {
            return req.status;
        }

        const res = await req.json();
        return res;

    }


    const req = await fetch('http://localhost:3333/form/' + url + '/' + param);


    if (!req.ok) {
        return req.status;
    }

    const res = await req.json();
    return res;
}