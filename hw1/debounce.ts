function debounce(func: Function, delay: number) {
    let timeout: number;
    return function(this: any) {
        let self = this;
        let args = arguments;
        const now = Date.now();
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(args);
            func.apply(self, args);
        }, delay);
    }
}