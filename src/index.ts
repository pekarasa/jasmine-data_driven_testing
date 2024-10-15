
type TestDeclarationFunction = (expectation: string, assertion?: jasmine.ImplementationCallback, timeout?: number) => void;

export function all<T1>(dataRows: [T1][], description: string, testMethod: (t1: T1) => PromiseLike<any> | void): void;
export function all<T1, T2>(dataRows: [T1, T2][], description: string, testMethod: (t1: T1, t2: T2) => PromiseLike<any> | void): void;
export function all<T1, T2, T3>(dataRows: [T1, T2, T3][], description: string, testMethod: (t1: T1, t2: T2, t3: T3) => PromiseLike<any> | void): void;
export function all<T1, T2, T3, T4>(dataRows: [T1, T2, T3, T4][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4) => PromiseLike<any> | void): void;
export function all<T1, T2, T3, T4, T5>(dataRows: [T1, T2, T3, T4, T5][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => PromiseLike<any> | void): void;
export function all<T1, T2, T3, T4, T5, T6>(dataRows: [T1, T2, T3, T4, T5, T6][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => PromiseLike<any> | void): void;
export function all<T1, T2, T3, T4, T5, T6, T7>(dataRows: [T1, T2, T3, T4, T5, T6, T7][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => PromiseLike<any> | void): void;
export function all<T1, T2, T3, T4, T5, T6, T7, T8>(dataRows: [T1, T2, T3, T4, T5, T6, T7, T8][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => PromiseLike<any> | void): void;
export function all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(dataRows: [T1, T2, T3, T4, T5, T6, T7, T8, T9][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9) => PromiseLike<any> | void): void;
export function all(dataRows: Array<Array<any>>, description: string, testMethod: (...args: any[]) => PromiseLike<any> | void): void {
    allImpl(dataRows, description, testMethod, it);
}

export function fall<T1>(dataRows: [T1][], description: string, testMethod: (t1: T1) => PromiseLike<any> | void): void;
export function fall<T1, T2>(dataRows: [T1, T2][], description: string, testMethod: (t1: T1, t2: T2) => PromiseLike<any> | void): void;
export function fall<T1, T2, T3>(dataRows: [T1, T2, T3][], description: string, testMethod: (t1: T1, t2: T2, t3: T3) => PromiseLike<any> | void): void;
export function fall<T1, T2, T3, T4>(dataRows: [T1, T2, T3, T4][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4) => PromiseLike<any> | void): void;
export function fall<T1, T2, T3, T4, T5>(dataRows: [T1, T2, T3, T4, T5][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => PromiseLike<any> | void): void;
export function fall<T1, T2, T3, T4, T5, T6>(dataRows: [T1, T2, T3, T4, T5, T6][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => PromiseLike<any> | void): void;
export function fall<T1, T2, T3, T4, T5, T6, T7>(dataRows: [T1, T2, T3, T4, T5, T6, T7][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => PromiseLike<any> | void): void;
export function fall<T1, T2, T3, T4, T5, T6, T7, T8>(dataRows: [T1, T2, T3, T4, T5, T6, T7, T8][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => PromiseLike<any> | void): void;
export function fall<T1, T2, T3, T4, T5, T6, T7, T8, T9>(dataRows: [T1, T2, T3, T4, T5, T6, T7, T8, T9][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9) => PromiseLike<any> | void): void;
export function fall(dataRows: Array<Array<any>>, description: string, testMethod: (...args: any[]) => PromiseLike<any> | void): void {
    allImpl(dataRows, description, testMethod, fit);
}

export function xall<T1>(dataRows: [T1][], description: string, testMethod: (t1: T1) => PromiseLike<any> | void): void;
export function xall<T1, T2>(dataRows: [T1, T2][], description: string, testMethod: (t1: T1, t2: T2) => PromiseLike<any> | void): void;
export function xall<T1, T2, T3>(dataRows: [T1, T2, T3][], description: string, testMethod: (t1: T1, t2: T2, t3: T3) => PromiseLike<any> | void): void;
export function xall<T1, T2, T3, T4>(dataRows: [T1, T2, T3, T4][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4) => PromiseLike<any> | void): void;
export function xall<T1, T2, T3, T4, T5>(dataRows: [T1, T2, T3, T4, T5][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => PromiseLike<any> | void): void;
export function xall<T1, T2, T3, T4, T5, T6>(dataRows: [T1, T2, T3, T4, T5, T6][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => PromiseLike<any> | void): void;
export function xall<T1, T2, T3, T4, T5, T6, T7>(dataRows: [T1, T2, T3, T4, T5, T6, T7][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => PromiseLike<any> | void): void;
export function xall<T1, T2, T3, T4, T5, T6, T7, T8>(dataRows: [T1, T2, T3, T4, T5, T6, T7, T8][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => PromiseLike<any> | void): void;
export function xall<T1, T2, T3, T4, T5, T6, T7, T8, T9>(dataRows: [T1, T2, T3, T4, T5, T6, T7, T8, T9][], description: string, testMethod: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8, t9: T9) => PromiseLike<any> | void): void;
export function xall(dataRows: Array<Array<any>>, description: string, testMethod: (...args: any[]) => PromiseLike<any> | void): void {
    allImpl(dataRows, description, testMethod, xit);
}

function allImpl(dataRows: Array<Array<any>>, description: string, testMethod: (...args: any[]) => PromiseLike<any> | void, testDeclarationFunction: TestDeclarationFunction): void {
    dataRows.forEach((dataRow, index) => {
        testDeclarationFunction(`${description} Nr. ${index + 1} (${dataRow.map(x => JSON.stringify(x)).join(", ")})`, () => testMethod(...dataRow));
    });
}
