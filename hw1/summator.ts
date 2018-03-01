function summator(...args: Array<number|string>) {
    return args.reduce((acc: number, current:number|string) => {
        if(typeof current === 'string') {
            return acc + parseInt(current);
        }
        return acc + current;
    }, 0)
}