// Conditional classnames without the hassle of ternaries and template literals
const classNames = (classes: Record<string, boolean>) => {
    const mapClasses = Object.keys(classes).map((key) =>
        classes[key] === true ? key : '',
    );
    return mapClasses.join(' ').trim();
};

export default classNames;
