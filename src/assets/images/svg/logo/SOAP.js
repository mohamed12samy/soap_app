import * as React from 'react';

export default function SOAP(props) {
    return (
        <svg width={props.width ? props.width : '10.688vw'/*"146" */} height={props.height ? props.height : "6.88vh"/*"43" */} viewBox="0 0 146 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.4766 24.6875C30.4766 26.1406 30.2891 27.4219 29.9141 28.5312C29.5547 29.6406 29.0391 30.6016 28.3672 31.4141C27.7109 32.2266 26.9297 32.9062 26.0234 33.4531C25.1172 34 24.125 34.4375 23.0469 34.7656C21.9844 35.0938 20.8516 35.3281 19.6484 35.4688C18.4609 35.6094 17.25 35.6797 16.0156 35.6797C14.3906 35.6797 12.8906 35.5547 11.5156 35.3047C10.1406 35.0703 8.84375 34.6953 7.625 34.1797C6.42188 33.6484 5.25781 32.9688 4.13281 32.1406C3.02344 31.3125 1.91406 30.3047 0.804688 29.1172L5.58594 24.2656C6.02344 25.3438 6.625 26.3438 7.39062 27.2656C8.15625 28.1719 8.99219 28.9531 9.89844 29.6094C10.8203 30.2656 11.7734 30.7812 12.7578 31.1562C13.7422 31.5312 14.6719 31.7188 15.5469 31.7188C16.5781 31.7188 17.5469 31.6484 18.4531 31.5078C19.3594 31.3516 20.1484 31.1016 20.8203 30.7578C21.4922 30.4141 22.0156 29.9609 22.3906 29.3984C22.7812 28.8203 22.9766 28.1016 22.9766 27.2422C22.9766 26.5859 22.8281 26.0234 22.5312 25.5547C22.2344 25.0859 21.8438 24.6875 21.3594 24.3594C20.8906 24.0156 20.3516 23.7266 19.7422 23.4922C19.1328 23.2578 18.5078 23.0625 17.8672 22.9062C17.2422 22.7344 16.625 22.5859 16.0156 22.4609C15.4062 22.3203 14.8672 22.1797 14.3984 22.0391C13.4766 21.7734 12.5156 21.4922 11.5156 21.1953C10.5156 20.8828 9.53125 20.5312 8.5625 20.1406C7.59375 19.75 6.67188 19.3047 5.79688 18.8047C4.9375 18.2891 4.17969 17.6875 3.52344 17C2.86719 16.2969 2.34375 15.4922 1.95312 14.5859C1.5625 13.6641 1.36719 12.6094 1.36719 11.4219C1.36719 10 1.53906 8.74219 1.88281 7.64844C2.24219 6.53906 2.74219 5.57813 3.38281 4.76562C4.02344 3.95312 4.78125 3.27344 5.65625 2.72656C6.53125 2.16406 7.49219 1.71875 8.53906 1.39062C9.58594 1.04687 10.6953 0.804688 11.8672 0.664062C13.0547 0.507812 14.2656 0.429688 15.5 0.429688C17.1875 0.429688 18.7188 0.585938 20.0938 0.898438C21.4844 1.21094 22.7656 1.65625 23.9375 2.23438C25.1094 2.8125 26.1797 3.50781 27.1484 4.32031C28.1328 5.11719 29.0547 6.00781 29.9141 6.99219L25.1328 11.8438C24.7578 10.7188 24.2344 9.70313 23.5625 8.79688C22.9062 7.89062 22.1719 7.11719 21.3594 6.47656C20.5469 5.82031 19.6953 5.32031 18.8047 4.97656C17.9141 4.61719 17.0547 4.4375 16.2266 4.4375C15.1484 4.4375 14.1562 4.51562 13.25 4.67188C12.3438 4.8125 11.5625 5.05469 10.9062 5.39844C10.2656 5.72656 9.76562 6.17969 9.40625 6.75781C9.04688 7.32031 8.86719 8.02344 8.86719 8.86719C8.86719 9.53906 9 10.1094 9.26562 10.5781C9.53125 11.0469 9.88281 11.4453 10.3203 11.7734C10.7734 12.1016 11.2812 12.375 11.8438 12.5938C12.4062 12.7969 12.9844 12.9766 13.5781 13.1328C14.1875 13.2891 14.7812 13.4297 15.3594 13.5547C15.9531 13.6641 16.4922 13.7891 16.9766 13.9297C17.9141 14.1953 18.8984 14.4766 19.9297 14.7734C20.9609 15.0703 21.9766 15.4219 22.9766 15.8281C23.9766 16.2188 24.9297 16.6719 25.8359 17.1875C26.7422 17.7031 27.5391 18.3203 28.2266 19.0391C28.9141 19.7422 29.4609 20.5625 29.8672 21.5C30.2734 22.4219 30.4766 23.4844 30.4766 24.6875ZM71.5156 18.0781C71.5156 20.7969 71.0469 23.25 70.1094 25.4375C69.1719 27.6094 67.875 29.4531 66.2188 30.9688C64.5625 32.4844 62.6016 33.6484 60.3359 34.4609C58.0703 35.2734 55.6172 35.6797 52.9766 35.6797C50.3359 35.6797 47.8828 35.2734 45.6172 34.4609C43.3516 33.6484 41.3906 32.4844 39.7344 30.9688C38.0781 29.4531 36.7812 27.6094 35.8438 25.4375C34.9062 23.25 34.4375 20.7969 34.4375 18.0781C34.4375 15.3125 34.8984 12.8438 35.8203 10.6719C36.7578 8.48438 38.0469 6.64062 39.6875 5.14062C41.3438 3.625 43.3047 2.46875 45.5703 1.67188C47.8359 0.859375 50.3047 0.453125 52.9766 0.453125C55.6484 0.453125 58.1172 0.859375 60.3828 1.67188C62.6484 2.46875 64.6016 3.625 66.2422 5.14062C67.8984 6.64062 69.1875 8.48438 70.1094 10.6719C71.0469 12.8438 71.5156 15.3125 71.5156 18.0781ZM62.0469 18.0781C62.0469 17.0469 62 15.9922 61.9062 14.9141C61.8125 13.8359 61.6406 12.7891 61.3906 11.7734C61.1406 10.7578 60.7969 9.80469 60.3594 8.91406C59.9375 8.02344 59.3906 7.25 58.7188 6.59375C58.0469 5.92187 57.2344 5.39844 56.2812 5.02344C55.3438 4.63281 54.2422 4.4375 52.9766 4.4375C51.6953 4.4375 50.5781 4.63281 49.625 5.02344C48.6719 5.39844 47.8594 5.91406 47.1875 6.57031C46.5156 7.22656 45.9688 8 45.5469 8.89062C45.125 9.78125 44.7891 10.7344 44.5391 11.75C44.3047 12.75 44.1406 13.7969 44.0469 14.8906C43.9531 15.9688 43.9062 17.0312 43.9062 18.0781C43.9062 19.1094 43.9531 20.1641 44.0469 21.2422C44.1406 22.3203 44.3125 23.3672 44.5625 24.3828C44.8125 25.3828 45.1484 26.3281 45.5703 27.2188C46.0078 28.1094 46.5625 28.8906 47.2344 29.5625C47.9062 30.2188 48.7109 30.7422 49.6484 31.1328C50.6016 31.5234 51.7109 31.7188 52.9766 31.7188C54.2109 31.7188 55.2891 31.5234 56.2109 31.1328C57.1328 30.7266 57.9297 30.1875 58.6016 29.5156C59.2734 28.8281 59.8281 28.0391 60.2656 27.1484C60.7188 26.2422 61.0703 25.2891 61.3203 24.2891C61.5859 23.2734 61.7734 22.2344 61.8828 21.1719C61.9922 20.1094 62.0469 19.0781 62.0469 18.0781ZM109.438 18.8516V19.2969C109.406 20.6094 109.266 21.9688 109.016 23.375C108.781 24.7812 108.445 26.1875 108.008 27.5938C107.57 29 107.047 30.3906 106.438 31.7656C105.828 33.1406 105.141 34.4531 104.375 35.7031C103.625 36.9688 102.812 38.1484 101.938 39.2422C101.062 40.3516 100.141 41.3281 99.1719 42.1719L95.6797 40.1562C96.2266 39.2344 96.7188 38.2266 97.1562 37.1328C97.6094 36.0547 98.0156 34.9219 98.375 33.7344C98.7344 32.5469 99.0391 31.3281 99.2891 30.0781C99.5547 28.8281 99.7734 27.5859 99.9453 26.3516C100.117 25.1172 100.242 23.9062 100.32 22.7188C100.414 21.5156 100.461 20.375 100.461 19.2969C100.461 18.4531 100.453 17.5 100.438 16.4375C100.438 15.3594 100.375 14.2656 100.25 13.1562C100.141 12.0469 99.9531 10.9688 99.6875 9.92188C99.4219 8.85938 99.0234 7.91406 98.4922 7.08594C97.9766 6.25781 97.3047 5.59375 96.4766 5.09375C95.6641 4.59375 94.6484 4.34375 93.4297 4.34375C92.3516 4.34375 91.4219 4.53125 90.6406 4.90625C89.875 5.26562 89.2188 5.75781 88.6719 6.38281C88.1406 6.99219 87.7109 7.70312 87.3828 8.51562C87.0703 9.32813 86.8203 10.1875 86.6328 11.0938C86.4609 11.9844 86.3438 12.8906 86.2812 13.8125C86.2344 14.7188 86.2109 15.5781 86.2109 16.3906V22.9297H96.3125V26.7969H86.2109V35H76.9062V17.8438C76.9062 15.3906 77.2969 13.1094 78.0781 11C78.8594 8.89062 79.9609 7.0625 81.3828 5.51562C82.8203 3.95312 84.5391 2.73437 86.5391 1.85938C88.5547 0.96875 90.7969 0.523438 93.2656 0.523438C94.9375 0.523438 96.5 0.765625 97.9531 1.25C99.4219 1.71875 100.758 2.375 101.961 3.21875C103.164 4.04687 104.234 5.03906 105.172 6.19531C106.125 7.33594 106.914 8.58594 107.539 9.94531C108.18 11.3047 108.664 12.7422 108.992 14.2578C109.32 15.7734 109.469 17.3047 109.438 18.8516ZM124.812 35H115.508V1.25H133.742C135.32 1.25 136.828 1.46094 138.266 1.88281C139.719 2.30469 141 2.94531 142.109 3.80469C143.219 4.64844 144.102 5.71875 144.758 7.01562C145.43 8.29688 145.766 9.80469 145.766 11.5391C145.766 12.6328 145.609 13.6641 145.297 14.6328C144.984 15.5859 144.547 16.4609 143.984 17.2578C143.438 18.0547 142.789 18.7734 142.039 19.4141C141.289 20.0547 140.469 20.5938 139.578 21.0312C138.688 21.4688 137.742 21.8047 136.742 22.0391C135.758 22.2734 134.758 22.3906 133.742 22.3906H124.812V35ZM136.344 11.5391C136.344 9.36719 135.789 7.66406 134.68 6.42969C133.586 5.17969 131.93 4.55469 129.711 4.55469H124.812V19.2031H129.711C130.898 19.2031 131.906 19.0156 132.734 18.6406C133.578 18.25 134.266 17.7109 134.797 17.0234C135.328 16.3359 135.719 15.5312 135.969 14.6094C136.219 13.6719 136.344 12.6484 136.344 11.5391Z" fill="#247189" />
            <path d="M30.4766 24.6875C30.4766 26.1406 30.2891 27.4219 29.9141 28.5312C29.5547 29.6406 29.0391 30.6016 28.3672 31.4141C27.7109 32.2266 26.9297 32.9062 26.0234 33.4531C25.1172 34 24.125 34.4375 23.0469 34.7656C21.9844 35.0938 20.8516 35.3281 19.6484 35.4688C18.4609 35.6094 17.25 35.6797 16.0156 35.6797C14.3906 35.6797 12.8906 35.5547 11.5156 35.3047C10.1406 35.0703 8.84375 34.6953 7.625 34.1797C6.42188 33.6484 5.25781 32.9688 4.13281 32.1406C3.02344 31.3125 1.91406 30.3047 0.804688 29.1172L5.58594 24.2656C6.02344 25.3438 6.625 26.3438 7.39062 27.2656C8.15625 28.1719 8.99219 28.9531 9.89844 29.6094C10.8203 30.2656 11.7734 30.7812 12.7578 31.1562C13.7422 31.5312 14.6719 31.7188 15.5469 31.7188C16.5781 31.7188 17.5469 31.6484 18.4531 31.5078C19.3594 31.3516 20.1484 31.1016 20.8203 30.7578C21.4922 30.4141 22.0156 29.9609 22.3906 29.3984C22.7812 28.8203 22.9766 28.1016 22.9766 27.2422C22.9766 26.5859 22.8281 26.0234 22.5312 25.5547C22.2344 25.0859 21.8438 24.6875 21.3594 24.3594C20.8906 24.0156 20.3516 23.7266 19.7422 23.4922C19.1328 23.2578 18.5078 23.0625 17.8672 22.9062C17.2422 22.7344 16.625 22.5859 16.0156 22.4609C15.4062 22.3203 14.8672 22.1797 14.3984 22.0391C13.4766 21.7734 12.5156 21.4922 11.5156 21.1953C10.5156 20.8828 9.53125 20.5312 8.5625 20.1406C7.59375 19.75 6.67188 19.3047 5.79688 18.8047C4.9375 18.2891 4.17969 17.6875 3.52344 17C2.86719 16.2969 2.34375 15.4922 1.95312 14.5859C1.5625 13.6641 1.36719 12.6094 1.36719 11.4219C1.36719 10 1.53906 8.74219 1.88281 7.64844C2.24219 6.53906 2.74219 5.57813 3.38281 4.76562C4.02344 3.95312 4.78125 3.27344 5.65625 2.72656C6.53125 2.16406 7.49219 1.71875 8.53906 1.39062C9.58594 1.04687 10.6953 0.804688 11.8672 0.664062C13.0547 0.507812 14.2656 0.429688 15.5 0.429688C17.1875 0.429688 18.7188 0.585938 20.0938 0.898438C21.4844 1.21094 22.7656 1.65625 23.9375 2.23438C25.1094 2.8125 26.1797 3.50781 27.1484 4.32031C28.1328 5.11719 29.0547 6.00781 29.9141 6.99219L25.1328 11.8438C24.7578 10.7188 24.2344 9.70313 23.5625 8.79688C22.9062 7.89062 22.1719 7.11719 21.3594 6.47656C20.5469 5.82031 19.6953 5.32031 18.8047 4.97656C17.9141 4.61719 17.0547 4.4375 16.2266 4.4375C15.1484 4.4375 14.1562 4.51562 13.25 4.67188C12.3438 4.8125 11.5625 5.05469 10.9062 5.39844C10.2656 5.72656 9.76562 6.17969 9.40625 6.75781C9.04688 7.32031 8.86719 8.02344 8.86719 8.86719C8.86719 9.53906 9 10.1094 9.26562 10.5781C9.53125 11.0469 9.88281 11.4453 10.3203 11.7734C10.7734 12.1016 11.2812 12.375 11.8438 12.5938C12.4062 12.7969 12.9844 12.9766 13.5781 13.1328C14.1875 13.2891 14.7812 13.4297 15.3594 13.5547C15.9531 13.6641 16.4922 13.7891 16.9766 13.9297C17.9141 14.1953 18.8984 14.4766 19.9297 14.7734C20.9609 15.0703 21.9766 15.4219 22.9766 15.8281C23.9766 16.2188 24.9297 16.6719 25.8359 17.1875C26.7422 17.7031 27.5391 18.3203 28.2266 19.0391C28.9141 19.7422 29.4609 20.5625 29.8672 21.5C30.2734 22.4219 30.4766 23.4844 30.4766 24.6875ZM71.5156 18.0781C71.5156 20.7969 71.0469 23.25 70.1094 25.4375C69.1719 27.6094 67.875 29.4531 66.2188 30.9688C64.5625 32.4844 62.6016 33.6484 60.3359 34.4609C58.0703 35.2734 55.6172 35.6797 52.9766 35.6797C50.3359 35.6797 47.8828 35.2734 45.6172 34.4609C43.3516 33.6484 41.3906 32.4844 39.7344 30.9688C38.0781 29.4531 36.7812 27.6094 35.8438 25.4375C34.9062 23.25 34.4375 20.7969 34.4375 18.0781C34.4375 15.3125 34.8984 12.8438 35.8203 10.6719C36.7578 8.48438 38.0469 6.64062 39.6875 5.14062C41.3438 3.625 43.3047 2.46875 45.5703 1.67188C47.8359 0.859375 50.3047 0.453125 52.9766 0.453125C55.6484 0.453125 58.1172 0.859375 60.3828 1.67188C62.6484 2.46875 64.6016 3.625 66.2422 5.14062C67.8984 6.64062 69.1875 8.48438 70.1094 10.6719C71.0469 12.8438 71.5156 15.3125 71.5156 18.0781ZM62.0469 18.0781C62.0469 17.0469 62 15.9922 61.9062 14.9141C61.8125 13.8359 61.6406 12.7891 61.3906 11.7734C61.1406 10.7578 60.7969 9.80469 60.3594 8.91406C59.9375 8.02344 59.3906 7.25 58.7188 6.59375C58.0469 5.92187 57.2344 5.39844 56.2812 5.02344C55.3438 4.63281 54.2422 4.4375 52.9766 4.4375C51.6953 4.4375 50.5781 4.63281 49.625 5.02344C48.6719 5.39844 47.8594 5.91406 47.1875 6.57031C46.5156 7.22656 45.9688 8 45.5469 8.89062C45.125 9.78125 44.7891 10.7344 44.5391 11.75C44.3047 12.75 44.1406 13.7969 44.0469 14.8906C43.9531 15.9688 43.9062 17.0312 43.9062 18.0781C43.9062 19.1094 43.9531 20.1641 44.0469 21.2422C44.1406 22.3203 44.3125 23.3672 44.5625 24.3828C44.8125 25.3828 45.1484 26.3281 45.5703 27.2188C46.0078 28.1094 46.5625 28.8906 47.2344 29.5625C47.9062 30.2188 48.7109 30.7422 49.6484 31.1328C50.6016 31.5234 51.7109 31.7188 52.9766 31.7188C54.2109 31.7188 55.2891 31.5234 56.2109 31.1328C57.1328 30.7266 57.9297 30.1875 58.6016 29.5156C59.2734 28.8281 59.8281 28.0391 60.2656 27.1484C60.7188 26.2422 61.0703 25.2891 61.3203 24.2891C61.5859 23.2734 61.7734 22.2344 61.8828 21.1719C61.9922 20.1094 62.0469 19.0781 62.0469 18.0781ZM109.438 18.8516V19.2969C109.406 20.6094 109.266 21.9688 109.016 23.375C108.781 24.7812 108.445 26.1875 108.008 27.5938C107.57 29 107.047 30.3906 106.438 31.7656C105.828 33.1406 105.141 34.4531 104.375 35.7031C103.625 36.9688 102.812 38.1484 101.938 39.2422C101.062 40.3516 100.141 41.3281 99.1719 42.1719L95.6797 40.1562C96.2266 39.2344 96.7188 38.2266 97.1562 37.1328C97.6094 36.0547 98.0156 34.9219 98.375 33.7344C98.7344 32.5469 99.0391 31.3281 99.2891 30.0781C99.5547 28.8281 99.7734 27.5859 99.9453 26.3516C100.117 25.1172 100.242 23.9062 100.32 22.7188C100.414 21.5156 100.461 20.375 100.461 19.2969C100.461 18.4531 100.453 17.5 100.438 16.4375C100.438 15.3594 100.375 14.2656 100.25 13.1562C100.141 12.0469 99.9531 10.9688 99.6875 9.92188C99.4219 8.85938 99.0234 7.91406 98.4922 7.08594C97.9766 6.25781 97.3047 5.59375 96.4766 5.09375C95.6641 4.59375 94.6484 4.34375 93.4297 4.34375C92.3516 4.34375 91.4219 4.53125 90.6406 4.90625C89.875 5.26562 89.2188 5.75781 88.6719 6.38281C88.1406 6.99219 87.7109 7.70312 87.3828 8.51562C87.0703 9.32813 86.8203 10.1875 86.6328 11.0938C86.4609 11.9844 86.3438 12.8906 86.2812 13.8125C86.2344 14.7188 86.2109 15.5781 86.2109 16.3906V22.9297H96.3125V26.7969H86.2109V35H76.9062V17.8438C76.9062 15.3906 77.2969 13.1094 78.0781 11C78.8594 8.89062 79.9609 7.0625 81.3828 5.51562C82.8203 3.95312 84.5391 2.73437 86.5391 1.85938C88.5547 0.96875 90.7969 0.523438 93.2656 0.523438C94.9375 0.523438 96.5 0.765625 97.9531 1.25C99.4219 1.71875 100.758 2.375 101.961 3.21875C103.164 4.04687 104.234 5.03906 105.172 6.19531C106.125 7.33594 106.914 8.58594 107.539 9.94531C108.18 11.3047 108.664 12.7422 108.992 14.2578C109.32 15.7734 109.469 17.3047 109.438 18.8516ZM124.812 35H115.508V1.25H133.742C135.32 1.25 136.828 1.46094 138.266 1.88281C139.719 2.30469 141 2.94531 142.109 3.80469C143.219 4.64844 144.102 5.71875 144.758 7.01562C145.43 8.29688 145.766 9.80469 145.766 11.5391C145.766 12.6328 145.609 13.6641 145.297 14.6328C144.984 15.5859 144.547 16.4609 143.984 17.2578C143.438 18.0547 142.789 18.7734 142.039 19.4141C141.289 20.0547 140.469 20.5938 139.578 21.0312C138.688 21.4688 137.742 21.8047 136.742 22.0391C135.758 22.2734 134.758 22.3906 133.742 22.3906H124.812V35ZM136.344 11.5391C136.344 9.36719 135.789 7.66406 134.68 6.42969C133.586 5.17969 131.93 4.55469 129.711 4.55469H124.812V19.2031H129.711C130.898 19.2031 131.906 19.0156 132.734 18.6406C133.578 18.25 134.266 17.7109 134.797 17.0234C135.328 16.3359 135.719 15.5312 135.969 14.6094C136.219 13.6719 136.344 12.6484 136.344 11.5391Z" fill="url(#paint0_linear)" />
            <defs>
                <linearGradient id="paint0_linear" x1="73" y1="-6" x2="73" y2="48" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0833333" stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="white" />
                </linearGradient>
            </defs>
        </svg>
    );
}
