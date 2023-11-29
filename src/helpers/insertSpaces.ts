// Regex to split up words, since 'VeryHigh' needs a space.
const insertSpaces = (value: string) => {
    if(!value) {
        return '';
    }

    value = value.replace(/([a-z])([A-Z])/g, '$1 $2');
    value = value.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');

    return value;
};

export default insertSpaces;
