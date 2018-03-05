function debounceWrap(func: Function, delay: number) {
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

function debounce(delay: number) {
    return function (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
        const originalMethod = descriptor.value;
        descriptor.value = debounceWrap(originalMethod, delay);
        return descriptor;
    }
}

class someCLass {
    @debounce(1000)
    meth(arg: string) {
        console.log(arg);
    }
}