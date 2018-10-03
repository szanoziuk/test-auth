export const findName = (text) => {
    let arr = text.match(/-\w+/g);
    arr = arr[0].match(/\w+/g);
    return arr[0];
}