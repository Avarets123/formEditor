

export const reqToServer = async (url: string, body: any = null, param: string = '') => {

    if (body) {

        const req = await fetch('http://localhost:3003/api/form/' + url + '/' + param, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (req.ok) {
            const res = await req.json();
            const message = 'Форма была успешно создана'
            return [message, res]
        }

        return req.status;
    }


    const req = await fetch('http://localhost:3003/api/form/' + url + '/' + param);

    if (req.ok) {
        const res = await req.json();
        
        return res
    }

    return req.status;


}




