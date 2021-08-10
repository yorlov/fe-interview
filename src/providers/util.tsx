import {Page} from "@github-mirrors/model/common";

export const delayed = (delay: number = 2000, value?: any): Promise<any> => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(value), delay));
};

export function pageOf<T>(items: T[], start: number, limit: number = 25): Promise<Page<T>> {
    const values = items.slice(start, Math.min(start + limit + 1, items.length));

    const page = {
        limit,
        values: values,
        nextPageStart: start + values.length,
        isLastPage: values.length <= limit
    };

    return delayed(2000, page);
}

export const items = (count: number): number[] => {
    return Array.from(Array(count).keys());
};