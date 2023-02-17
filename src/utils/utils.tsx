import {notification} from "antd";

// function for showing errors
export const openNotificationWithIcon = (text: string) => {
    notification["error"]({
        message: text,
    });
};
// function for showing errors