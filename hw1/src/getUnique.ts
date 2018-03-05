export default function getUnique(...args: Array<any>): Array<any> {
    return args.reduce((acc: Array<any>, current: any) => {
        if (acc.indexOf(current) === -1) {
            acc.push(current);
        }
        return acc;
    }, [])
}
