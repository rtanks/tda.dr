export const transformFormat = (number) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return String(number).replace(/\d/g, (digit) => persianDigits[digit]);
    }
export const transformFormatWithSpread = (value) => {
        const transformed = new Intl.NumberFormat("fa-IR").format(value)
        return transformed;
    }