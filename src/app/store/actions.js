export const CHANGE_DATE_TIME = 'change_date_time';

export function changeDateTime(dateTime) {
    return {
        type: CHANGE_DATE_TIME,
        dateTime
    };
}