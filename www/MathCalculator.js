import exec from 'cordova/exec';

export function add(arg0, success, error) {
    exec(success, error, 'MathCalculator', 'add', [arg0]);
}