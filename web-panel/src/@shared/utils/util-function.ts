//base filter query utils
export const concatFilterQuery = (options: any): string => {
    if (options)
        return Object.keys(options)
            .map((x) => {
                return options[x] && `${x}=${options[x]}`;
            })
            .join("&");

    return "";
};
