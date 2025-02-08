import { tokens } from "../theme";

export const mockDataInvoices = [
    {
        id: "Die with a Smile",
        artist: "Bruno Mars",
        streamCount: "1B",
        userId: 1,
        dateStreamed: "August 16, 2024",
    },
    {
        id: "APT",
        artist: "Rose",
        streamCount: "1B",
        userId: 2,
        dateStreamed: "October 18, 2024",
    },
    {
        id: "Despacito",
        artist: "Luis Fonsi",
        streamCount: "8.6B",
        userId: 3,
        dateStreamed: "January 13, 2017",
    },
    {
        id: "Taki Taki",
        artist: "DJ Snake",
        streamCount: "2.6B",
        userId: 4,
        dateStreamed: "October 10, 2018",
    },
    {
        id: "Shape of You",
        artist: "Ed Sheeran",
        streamCount: "6.4B",
        userId: 5,
        dateStreamed: "January 30, 2017",
    },
];

export const mockBarData = [
    {
        songs: "APT",
        APT: 137,
        "Die with a Smile": 0,
        "Taki Taki": 0,
        "Shape of You": 0,
        "Blinding Lights": 0,
    },
    {
        songs: "Die with a Smile",
        APT: 0,
        "Die with a Smile": 55,
        "Taki Taki": 0,
        "Shape of You": 0,
        "Blinding Lights": 0,
    },
    {
        songs: "Taki Taki",
        APT: 0,
        "Die with a Smile": 0,
        "Taki Taki": 109,
        "Shape of You": 0,
        "Blinding Lights": 0,
    },
    {
        songs: "Shape of You",
        APT: 0,
        "Die with a Smile": 0,
        "Taki Taki": 0,
        "Shape of You": 133,
        "Blinding Lights": 0,
    },
    {
        songs: "Blinding Lights",
        APT: 0,
        "Die with a Smile": 0,
        "Taki Taki": 0,
        "Shape of You": 0,
        "Blinding Lights": 81,
    },
];

export const mockPieData = [
    {
        id: "Subscriptions",
        label: "Subscriptions",
        value: 5000,
        color: "hsl(104, 70%, 50%)",
    },
    {
        id: "Ads",
        label: "Ads",
        value: 3000,
        color: "hsl(162, 70%, 50%)",
    },
    {
        id: "Affiliates",
        label: "Affiliates",
        value: 2000,
        color: "hsl(291, 70%, 50%)",
    },
    {
        id: "Sponsorships",
        label: "Sponsorships",
        value: 1500,
        color: "hsl(229, 70%, 50%)",
    },
    {
        id: "Others",
        label: "Others",
        value: 1000,
        color: "hsl(344, 70%, 50%)",
    },
];

export const mockLineData = [
    {
        id: "total_users",
        color: tokens("dark").greenAccent[500],
        data: [
            { x: "Jan", y: 1200 },
            { x: "Feb", y: 1500 },
            { x: "Mar", y: 1800 },
            { x: "Apr", y: 2100 },
            { x: "May", y: 2500 },
            { x: "Jun", y: 2900 },
            { x: "Jul", y: 3400 },
            { x: "Aug", y: 4000 },
            { x: "Sep", y: 4600 },
            { x: "Oct", y: 5300 },
            { x: "Nov", y: 6100 },
            { x: "Dec", y: 7000 },
        ],
    },
    {
        id: "active_users",
        color: tokens("dark").blueAccent[300],
        data: [
            { x: "Jan", y: 800 },
            { x: "Feb", y: 1000 },
            { x: "Mar", y: 1200 },
            { x: "Apr", y: 1400 },
            { x: "May", y: 1700 },
            { x: "Jun", y: 2000 },
            { x: "Jul", y: 2300 },
            { x: "Aug", y: 2700 },
            { x: "Sep", y: 3100 },
            { x: "Oct", y: 3600 },
            { x: "Nov", y: 4200 },
            { x: "Dec", y: 5000 },
        ],
    },
];