function isInArray(arr: Array<any>, ...args: Array<any>): boolean {
    return args.reduce((acc: boolean, current: any) => {
        console.log(arr.indexOf(current), current);
        return acc && (arr.indexOf(current) !== -1 );
    }, true)
}