export const timeout = (ms: number) => {
    return new Promise<void>(resolve => setTimeout(resolve, ms));
};

export const get = (url: string): Promise<unknown> =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                return reject(`${response.status}: ${response.statusText}`);
            }

            const result = (await response.json());
            return resolve(result);
        } catch (error) {
            return reject(error);
        }
    });
