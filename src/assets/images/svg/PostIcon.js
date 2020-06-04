import * as React from "react"

export default function PostsIcon(props) {
    return(
        <svg width="40" height="35" viewBox="0 0 45 35" fill={props.fill} xmlns="http://www.w3.org/2000/svg" {...props}> 
        <path d="M43.125 0H6.875C5.83945 0 5 0.979362 5 2.1875V2.91667H1.875C0.839453 2.91667 0 3.89603 0 5.10417V29.8958C0 32.7148 1.95875 35 4.375 35H41.25C43.3211 35 45 33.0413 45 30.625V2.1875C45 0.979362 44.1605 0 43.125 0ZM4.375 30.625C4.20924 30.625 4.05027 30.5482 3.93306 30.4114C3.81585 30.2747 3.75 30.0892 3.75 29.8958V7.29167H5V29.8958C5 30.0892 4.93415 30.2747 4.81694 30.4114C4.69973 30.5482 4.54076 30.625 4.375 30.625ZM22.8125 29.1667H10.9375C10.4198 29.1667 10 28.6769 10 28.0729V27.3438C10 26.7397 10.4198 26.25 10.9375 26.25H22.8125C23.3302 26.25 23.75 26.7397 23.75 27.3438V28.0729C23.75 28.6769 23.3302 29.1667 22.8125 29.1667ZM39.0625 29.1667H27.1875C26.6698 29.1667 26.25 28.6769 26.25 28.0729V27.3438C26.25 26.7397 26.6698 26.25 27.1875 26.25H39.0625C39.5802 26.25 40 26.7397 40 27.3438V28.0729C40 28.6769 39.5802 29.1667 39.0625 29.1667ZM22.8125 20.4167H10.9375C10.4198 20.4167 10 19.9269 10 19.3229V18.5938C10 17.9897 10.4198 17.5 10.9375 17.5H22.8125C23.3302 17.5 23.75 17.9897 23.75 18.5938V19.3229C23.75 19.9269 23.3302 20.4167 22.8125 20.4167ZM39.0625 20.4167H27.1875C26.6698 20.4167 26.25 19.9269 26.25 19.3229V18.5938C26.25 17.9897 26.6698 17.5 27.1875 17.5H39.0625C39.5802 17.5 40 17.9897 40 18.5938V19.3229C40 19.9269 39.5802 20.4167 39.0625 20.4167ZM39.0625 11.6667H10.9375C10.4198 11.6667 10 11.1769 10 10.5729V6.92708C10 6.32306 10.4198 5.83333 10.9375 5.83333H39.0625C39.5802 5.83333 40 6.32306 40 6.92708V10.5729C40 11.1769 39.5802 11.6667 39.0625 11.6667Z"
         fill= {props.fill? props.fill :"#C8C8C8"}/>
        </svg>
    );
}