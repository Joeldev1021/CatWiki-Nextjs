
export const generateRandomNumber = (numberRandom: number[], length: number) => {
    const n: number[] = [];
    for (let i = 0; i < 4; i++) {
        const res = Math.floor(Math.random() * length);
        if (!n.includes(res)) {
            n.push(res);
        }
    }
    return n;
};
