// import mellat from "../Assets/images/Bank/mellat.png";
import blueBank from "../Assets/images/Bank/bankBlue.png";
import bankRed from "../Assets/images/Bank/bankRed.png";
import bankYellow from "../Assets/images/Bank/bankYellow.png";
import samanIcon from "../Assets/images/Bank/saman.png";
//? bankList logo
import Ansar from "../Assets/images/bankList/Ansar.png";
import Ayande from "../Assets/images/bankList/Ayande.png";
import EghtesadNovin from "../Assets/images/bankList/EghtesadNovin.png";
import Hekmat_eIraniyan from "../Assets/images/bankList/Hekmat_eIraniyan.png";
import IranZamin from "../Assets/images/bankList/IranZamin.png";
import Karafarin from "../Assets/images/bankList/Karafarin.png";
import Keshavarzi from "../Assets/images/bankList/Keshavarzi.png";
import Meli from "../Assets/images/bankList/Meli.png";
import mellat from "../Assets/images/bankList/mellat.png";
import Saman from "../Assets/images/bankList/Saman.png";
import saderat from "../Assets/images/bankList/saderat.png";
import Shahr from "../Assets/images/bankList/Shahr.png";
import Tejarat from "../Assets/images/bankList/Tejarat.png";
import ToseeSaderat from "../Assets/images/bankList/ToseeSaderat.png";
import ToseeTaavon from "../Assets/images/bankList/ToseeTaavon.png";
import maskan from "../Assets/images/bankList/maskan.png";
import blue from "../Assets/images/bankList/blue.png";
import sepah from "../Assets/images/bankList/sepah.png";
import sarmaye from "../Assets/images/bankList/sarmaye.png";
import gardeshgari from "../Assets/images/bankList/gardeshgari.png";
import refah from "../Assets/images/bankList/refah.png";
import sina from "../Assets/images/bankList/sina.png";
import parsian from "../Assets/images/bankList/parsian.png";
import postBank from "../Assets/images/bankList/postBank.png";
import mehrIranian from "../Assets/images/bankList/mehrIranian.png";
import mehrEqtesad from "../Assets/images/bankList/mehrEqtesad.png";
import day from "../Assets/images/bankList/day.png";
import pasargad from "../Assets/images/bankList/pasargad.png";
import resalat from "../Assets/images/bankList/resalat.png";

//?frouts logo

import apple from "../Assets/images/Fruits/apple.svg";
import apricot from "../Assets/images/Fruits/apricot.svg";
import avocado from "../Assets/images/Fruits/avocado.svg";
import banana from "../Assets/images/Fruits/banana.svg";
import blue_berry from "../Assets/images/Fruits/blue-berry.svg";
import cherry from "../Assets/images/Fruits/cherry.svg";
import dragon_fruit from "../Assets/images/Fruits/dragon-fruit.svg";
import fruits from "../Assets/images/Fruits/fruits.svg";
import goji_berry from "../Assets/images/Fruits/goji-berry.svg";
import grapes_purpel from "../Assets/images/Fruits/grapes-purpel.svg";
import grapes from "../Assets/images/Fruits/grapes.svg";
import green_apple from "../Assets/images/Fruits/green-apple.svg";
import kiwi from "../Assets/images/Fruits/kiwi.svg";
import mango from "../Assets/images/Fruits/mango.svg";
import melon from "../Assets/images/Fruits/melon.svg";
import orange from "../Assets/images/Fruits/orange.svg";
import passion_fruit from "../Assets/images/Fruits/passion-fruit.svg";
import pear from "../Assets/images/Fruits/pear.svg";
import pineapple from "../Assets/images/Fruits/pineapple.svg";
import strawberry from "../Assets/images/Fruits/strawberry.svg";
import watermelon from "../Assets/images/Fruits/watermelon.svg";
//? profile image
import profile from "../Assets/images/profileImage.png";
import reactRouts from "./reactRouts";
export const menuData = [
    {
        title: "داشبورد",
        path: "/dashbord",
        hasSubItem: false,
        RoleAccess: ['admin'],
        id: "dashbord",
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="3"
                    y="3"
                    width="11"
                    height="7"
                    rx="2"
                    stroke="#41669A"
                    strokeWidth="2"
                />
                <rect
                    x="3"
                    y="13"
                    width="11"
                    height="16"
                    rx="2"
                    stroke="#41669A"
                    strokeWidth="2"
                />
                <rect
                    x="18"
                    y="22"
                    width="11"
                    height="7"
                    rx="2"
                    stroke="#41669A"
                    strokeWidth="2"
                />
                <rect
                    x="18"
                    y="3"
                    width="11"
                    height="16"
                    rx="2"
                    stroke="#41669A"
                    strokeWidth="2"
                />
            </svg>
        ),
    },
    {
        id: "actions",
        title: "عملیات",
        hasSubItem: true,
        RoleAccess: ['admin', 'actions'],
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_449_99)">
                    <path
                        d="M31.0839 0.175812H24.5323C23.9047 0.175812 23.5903 0.934512 24.0343 1.37849L26.0698 3.41399L14.1905 15.2933L10.0306 11.1334L8.91576 10.0185C8.53852 9.6413 7.92699 9.6413 7.54975 10.0185L0.458713 17.1092C0.0814706 17.4865 0.0814706 18.098 0.458713 18.4752L1.57358 19.5901C1.95082 19.9673 2.56235 19.9673 2.93959 19.5901L8.23258 14.2971L13.4992 19.5638C13.8765 19.941 14.488 19.941 14.8652 19.5638L15.4321 18.9968C15.4613 18.9737 15.4919 18.9529 15.5189 18.9259L28.5503 5.89451L30.5858 7.93001C31.0298 8.37399 31.7885 8.05962 31.7885 7.43193V0.880419C31.7885 0.491234 31.473 0.175812 31.0839 0.175812Z"
                        fill="#41669A"
                    />
                    <path
                        d="M23.2271 13.4531V30.8224C23.2271 31.3559 23.6594 31.7883 24.193 31.7883H27.2777C27.8112 31.7883 28.2436 31.3559 28.2436 30.8224V8.43652L23.2271 13.4531Z"
                        fill="#41669A"
                    />
                    <path
                        d="M16.7251 19.9554V30.8224C16.7251 31.3559 17.1575 31.7883 17.691 31.7883H20.7757C21.3093 31.7883 21.7416 31.3559 21.7416 30.8224V14.9388L16.7251 19.9554Z"
                        fill="#41669A"
                    />
                    <path
                        d="M14.1823 21.4275C13.5019 21.4275 12.8627 21.1627 12.3814 20.6814L10.2227 18.523V30.8224C10.2227 31.3559 10.655 31.7883 11.1886 31.7883H14.2733C14.8068 31.7883 15.2392 31.3559 15.2392 30.8224V21.196C14.9115 21.346 14.5536 21.4275 14.1823 21.4275Z"
                        fill="#41669A"
                    />
                    <path
                        d="M8.23251 16.5325L4.05755 20.7074C3.95288 20.8121 3.83943 20.9048 3.7207 20.9884V30.8224C3.7207 31.3559 4.15309 31.7883 4.68664 31.7883H7.77132C8.30487 31.7883 8.73726 31.3559 8.73726 30.8224V17.0372L8.23251 16.5325Z"
                        fill="#41669A"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_449_99">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        subItems: [
            { title: "فروش", path: reactRouts.sellpage },
            { title: "دریافتی", path: reactRouts.recives.main },
            { title: "پرداختی", path: reactRouts.payment.main },
            { title: "حساب ها", path: reactRouts.accounts.main },
            { title: "اسناد گذشته", path: reactRouts.documents.main },
            { title: "گزارش صندوق", path: reactRouts.report.main },
            { title: "مشتریان", path: reactRouts.customers.main },
            { title: "صفحه مشتری", path: reactRouts.customer.main },
            { title: "تولید کد تخیف", path: reactRouts.Discount.main },
        ],
    },
    {
        id: "accounting",
        title: "حسابداری",
        RoleAccess: ['admin', 'accounting'],
        hasSubItem: true,
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.6612 17.2898H27.9441C28.7495 17.2898 29.4591 16.7598 29.6877 15.987L31.7394 9.04667C31.9617 8.29465 31.398 7.54016 30.614 7.54016H6.12939L8.6612 17.2898Z"
                    fill="#41669A"
                />
                <path
                    d="M28.13 21.7868H9.69149C9.45019 21.7868 9.23944 21.6239 9.17867 21.3903L5.23519 6.20364C5.08731 5.63461 4.57378 5.23735 3.98579 5.23735H0.705466C0.412875 5.23735 0.175781 5.00025 0.175781 4.70766C0.175781 4.41507 0.412875 4.17798 0.705466 4.17798H3.98579C5.0564 4.17798 5.99178 4.90155 6.26048 5.93774L10.1014 20.7275H28.13C28.4226 20.7275 28.6597 20.9649 28.6597 21.2572C28.6597 21.5494 28.4223 21.7868 28.13 21.7868Z"
                    fill="#41669A"
                />
                <path
                    d="M12.8827 27.7848C14.1506 27.7848 15.1785 26.7569 15.1785 25.489C15.1785 24.2211 14.1506 23.1932 12.8827 23.1932C11.6148 23.1932 10.5869 24.2211 10.5869 25.489C10.5869 26.7569 11.6148 27.7848 12.8827 27.7848Z"
                    fill="#41669A"
                />
                <path
                    d="M24.4667 27.7848C25.7346 27.7848 26.7624 26.7569 26.7624 25.489C26.7624 24.2211 25.7346 23.1932 24.4667 23.1932C23.1987 23.1932 22.1709 24.2211 22.1709 25.489C22.1709 26.7569 23.1987 27.7848 24.4667 27.7848Z"
                    fill="#41669A"
                />
            </svg>
        ),
        subItems: [
            { title: "فاکتورها / صافی ها", path: "/factor" },
            { title: "طرف های معامله", path: "/Transactions" },
            { title: "حساب معین" },
            { title: "ثبت هزینه" },
            { title: "محصولات", path: "/products" },
            { title: "بانک ها و حساب ها" },
            { title: "مدیریت چک", path: "/checks" },
            { title: "سال مالی و بیلان" },
            { title: "مدیریت صندوق", path: "/account-managing" },
        ],
    },
    {
        id: "management",
        title: "مدیریت",
        RoleAccess: ['admin', 'management'],
        hasSubItem: true,
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5.56598 1.92259C4.92248 1.92259 4.40088 2.4442 4.40088 3.08769V29.2895C4.40088 29.933 4.92248 30.4546 5.56598 30.4546H23.1236C24.4218 21.3253 24.3248 11.786 23.1236 1.92224H5.56598V1.92259Z"
                    fill="#41669A"
                />
                <path
                    d="M25.356 30.3633C25.6348 30.2453 25.8582 30.0219 25.9759 29.7433C25.8582 30.0222 25.6348 30.2456 25.356 30.3633Z"
                    fill="#41669A"
                />
                <path
                    d="M24.9023 1.92261H23.1235V30.455H24.9023C25.5458 30.455 26.0674 29.9334 26.0674 29.2899V19.0028V13.1686V3.08805C26.0677 2.44456 25.5458 1.92261 24.9023 1.92261Z"
                    fill="#4F76AD"
                />
                <path
                    d="M26.9815 13.1686H21.9274C20.3162 13.1686 19.0103 14.4745 19.0103 16.0857C19.0103 17.6969 20.3162 19.0028 21.9274 19.0028H26.9812C27.3026 19.0028 27.5628 18.7426 27.5628 18.4212V13.7502C27.5628 13.4289 27.3026 13.1686 26.9815 13.1686ZM21.0745 17.0172C20.56 17.0172 20.143 16.6003 20.143 16.0857C20.143 15.5711 20.56 15.1542 21.0745 15.1542C21.5891 15.1542 22.0061 15.5711 22.0061 16.0857C22.0057 16.5999 21.5888 17.0172 21.0745 17.0172Z"
                    fill="#6887B4"
                />
                <path
                    d="M16.0664 18.2427L11.8051 9.10462C11.5616 8.58266 10.9389 8.35575 10.4162 8.59917L7.92129 9.76251C7.39933 10.0063 7.17277 10.6294 7.41619 11.1514L11.6776 20.2902C11.7513 20.4479 11.8651 20.5866 12.0074 20.6913L14.3126 22.3787C14.4949 22.5125 14.7117 22.5807 14.9301 22.5807C15.0801 22.5807 15.2308 22.5484 15.3713 22.483C15.7169 22.3218 15.9473 21.9853 15.9726 21.6049L16.162 18.7545C16.1736 18.5789 16.1409 18.4026 16.0664 18.2427ZM10.8504 9.55L11.3537 10.6297L8.86791 11.7889L8.36702 10.7176L10.8504 9.55ZM14.9354 21.5283L12.6326 19.8441L9.31399 12.7432L11.7991 11.5844L15.1107 18.686L14.9354 21.5283Z"
                    fill="#6887B4"
                />
            </svg>
        ),
        subItems: [
            { title: "کیف پول", path: reactRouts.wallet.main },
            { title: "پوز و درگاه پرداخت" },
            { title: "پیامک" },
            { title: "ارتباط تصویری" },
            { title: "ارتباط با ترازو" },
            { title: "نرخ کارگری" },
            { title: "رند کردن مبالغ", path: reactRouts.round.main },
            { title: "ارتباط با مشتری (CRM)" },
            { title: "تنظیمات چاپ" },
            { title: "کاربران", path: reactRouts.user.main },
        ],
    },
    {
        id: "settings",
        title: "تنظیمات",
        RoleAccess: ['admin', 'settings'],
        hasSubItem: false,
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_449_90)">
                    <path
                        d="M31.2853 19.2688C28.3569 18.0559 28.3569 13.908 31.2853 12.6951C31.7008 12.523 31.8982 12.0464 31.7261 11.6308L30.1915 7.92619C30.0194 7.51066 29.5428 7.31326 29.1272 7.48537C26.1989 8.69824 23.2659 5.7653 24.4791 2.83728C24.6513 2.42175 24.4538 1.94511 24.0383 1.77299L20.3333 0.238031C19.9178 0.0659184 19.4412 0.263321 19.269 0.67885C18.0562 3.60722 13.9083 3.60722 12.6954 0.67885C12.5233 0.263321 12.0466 0.0659184 11.6311 0.238031L7.92613 1.77264C7.5106 1.94475 7.3132 2.4214 7.48531 2.83693C8.69818 5.7653 5.76524 8.69824 2.83687 7.48537C2.42134 7.31326 1.94469 7.51066 1.77258 7.92619L0.23797 11.6308C0.0658574 12.0464 0.26326 12.523 0.678789 12.6951C3.60716 13.908 3.60716 18.0559 0.678789 19.2688C0.26326 19.4409 0.0658574 19.9175 0.23797 20.333L1.77258 24.0377C1.94469 24.4532 2.42134 24.6506 2.83687 24.4785C5.76524 23.2656 8.69818 26.1986 7.48496 29.1269C7.31285 29.5425 7.51025 30.0191 7.92578 30.1912L11.6304 31.7258C12.0459 31.8979 12.5226 31.7005 12.6947 31.285C13.9076 28.3566 18.0555 28.3566 19.2683 31.285C19.4405 31.7005 19.9171 31.8979 20.3326 31.7258L24.0373 30.1912C24.4528 30.0191 24.6502 29.5425 24.4781 29.1269C23.2652 26.1986 26.1982 23.2656 29.1265 24.4788C29.5421 24.651 30.0187 24.4536 30.1908 24.038L31.7254 20.3334C31.8982 19.9175 31.7008 19.4412 31.2853 19.2688ZM15.982 22.6741C12.2862 22.6741 9.29003 19.678 9.29003 15.9821C9.29003 12.2863 12.2862 9.2901 15.982 9.2901C19.6779 9.2901 22.6741 12.2863 22.6741 15.9821C22.6741 19.678 19.6779 22.6741 15.982 22.6741Z"
                        fill="#41669A"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_449_90">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        subItems: [
            { title: "دیجیتال لیبل", path: reactRouts.digitalLable.main },
            { title: "مشخصات فروشگاه", path: reactRouts.setting.store.info },

        ],
    },
];

export const headerItems = [
    {
        title: "صفحه فروش",
        path: reactRouts.sellpage,
    },
    {
        title: "دریافتی ها",
        path: reactRouts.recives.main,
    },
    {
        title: "پرداختی‌ها",
        path: reactRouts.payment.main,
    },
    {
        title: "حساب‌ها",
        path: reactRouts.accounts.main,
    },
    {
        title: "اسناد گذشته",
        path: reactRouts.documents.main,
    },
    {
        title: "گزارش صندوق",
        path: reactRouts.report.main,
    },
];

export const account = [
    {
        bankName: "بانک سامان - جاری",
        logo: samanIcon,
        amount: 5900000000,
        accountNumber: "۲۸-۰۶۲-۰۰۰۰۰۰-۰۲۰۳۲۸۴۹۰۸۰۰۰",
        sheba: "IR۲۸-۰۶۲-۰۰۰۰۰۰-۰۲۰۳۲۸۴۹۰۸۰۰۰",
        cardNumber: "6219861906149249",
        color: "#345BFF",
        bg: blueBank,
        name: "پرهام حسن زاده",
    },
    {
        bankName: "بانک سپه - جاری",
        logo: sepah,
        amount: 5900000000,
        accountNumber: "۲۸-۰۶۲-۰۰۰۰۰۰-۰۲۰۳۲۸۴۹۰۸۰۰۰",
        sheba: "IR۲۸-۰۶۲-۰۰۰۰۰۰-۰۲۰۳۲۸۴۹۰۸۰۰۰",
        cardNumber: "6219861906149249",
        color: "#FF8A00",
        bg: bankRed,
        name: "پرهام حسن زاده",
    },
    {
        bankName: "بانک ملت - جاری",
        logo: mellat,
        amount: 5900000000,
        accountNumber: "۲۸-۰۶۲-۰۰۰۰۰۰-۰۲۰۳۲۸۴۹۰۸۰۰۰",
        sheba: "IR۲۸-۰۶۲-۰۰۰۰۰۰-۰۲۰۳۲۸۴۹۰۸۰۰۰",
        cardNumber: "6219861906149249",
        color: "#FE4A51",
        bg: bankYellow,
        name: "پرهام حسن زاده",
    },
];

export const months = [
    { title: "فروردین", value: "farvardin" },
    { title: "اردیبهشت", value: "ordibehesht" },
    { title: "خرداد", value: "khordad" },
    { title: "تیر", value: "tir" },
    { title: "مرداد", value: "mordad" },
    { title: "شهریور", value: "shahrivar" },
    { title: "مهر", value: "mehr" },
    { title: "آبان", value: "aban" },
    { title: "آذر", value: "azar" },
    { title: "دی", value: "dey" },
    { title: "بهمن", value: "bahman" },
    { title: "اسفند", value: "esfand" },
];

export const roundPage = [

    {
        title: "رند کردن به پایین ",
        box: [
            {
                lable: "کمتر از",
                placeholder: "مثال:۵۰۰ریال",
                name: "downRound",
                select: false,
                hasIcon: false,
                color: "#6D6D6D",
                type: "number",
            },
            {
                lable: "تبدیل شود به",
                placeholder: "مثال:۰ریال",
                name: "changeTo",
                select: false,
                hasIcon: false,
                color: "#6D6D6D",
                type: "number",
            }
        ]

    },
    {
        title: "رند کردن به بالا ",
        box: [
            {
                lable: "بیشتر از",
                placeholder: "مثال:۵۰۰ریال",
                name: "downRound",
                select: false,
                hasIcon: false,
                color: "#6D6D6D",
                type: "number",
            },
            {
                lable: "تبدیل شود به",
                placeholder: "مثال:۱۰۰۰ریال",
                name: "changeTo",
                select: false,
                hasIcon: false,
                color: "#6D6D6D",
                type: "number",
            }
        ]

    }
]

export const addCartForm = [
    {
        name: "bankName",
        select: true,
        placeholder: "بانک خود راانتخاب کنید",
        lable: "نام بانک",
        hasIcon: true,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "displayName",
        select: false,
        placeholder: "نام قابل نمایش",
        lable: "نام قابل نمایش",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "accountNum",
        select: false,
        placeholder: "شماره حساب",
        lable: "شماره حساب",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "sheba",
        select: false,
        placeholder: "شماره شبا",
        lable: "شماره شبا",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "cardNum",
        select: false,
        placeholder: "شماره کارت",
        lable: "شماره کارت",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "cvv2",
        select: false,
        placeholder: "cvv2",
        lable: "cvv2",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "expireDate",
        select: false,
        placeholder: "تاریخ انقضا",
        lable: "تاریخ انقضا",
        hasIcon: false,
        color: "#6D6D6D",
    },
    {
        name: "accountType",
        select: true,
        placeholder: "نوع حساب خود را انتخاب کنید",
        lable: "نوع حساب",
        hasIcon: true,
        color: "#6D6D6D",
    },
    {
        name: "branchName",
        select: false,
        placeholder: "نام شعبه",
        lable: "نام شعبه",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "branchCode",
        select: false,
        placeholder: "کد شعبه",
        lable: "کد شعبه",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: " fullname",
        select: false,
        placeholder: "نام صاحب حساب",
        lable: "نام صاحب حساب",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: " mobile",
        select: false,
        placeholder: "شماره موبایل",
        lable: "شماره موبایل",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "API_IP",
        select: false,
        placeholder: "API-IP",
        lable: "API-IP",
        hasIcon: false,
        color: "#FF8A00",
        type: "number",
    },
    {
        name: "API_TERMENAL",
        select: false,
        placeholder: "API-TERMENAL",
        lable: "API-TERMENAL",
        hasIcon: false,
        color: "#FF8A00",
        type: "text",
    },
    {
        name: "posName",
        select: false,
        placeholder: "نام نمایشی پوز",
        lable: "نام نمایشی پوز",
        hasIcon: false,
        color: "#FF8A00",
        type: "text",
    },
    {
        name: "bankUrl",
        select: false,
        placeholder: "آدرس URL بانک",
        lable: "آدرس URL بانک",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "userName",
        select: false,
        placeholder: "نام کاربری",
        lable: "نام کاربری",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "password",
        select: false,
        placeholder: "رمزعبور",
        lable: "رمزعبور",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
];

export const checklistbanking = [
    {
        serial: "324321",
        title: "واریز",
        date: new Date(),
        description: "توضیحات مربوط به واریزی",
        income: "45000000",
        outcome: "500000000",
        remain: "600000000",
    },
    {
        serial: "324321",
        title: "واریز",
        date: new Date(),
        description: "توضیحات مربوط به واریزی",
        income: "45000000",
        outcome: "500000000",
        remain: "600000000",
    },
    {
        serial: "324321",
        title: "واریز",
        date: new Date(),
        description: "توضیحات مربوط به واریزی",
        income: "45000000",
        outcome: "500000000",
        remain: "600000000",
    },
    {
        serial: "324321",
        title: "واریز",
        date: new Date(),
        description: "توضیحات مربوط به واریزی",
        income: "45000000",
        outcome: "500000000",
        remain: "600000000",
    },
    {
        serial: "324321",
        title: "واریز",
        date: new Date(),
        description: "توضیحات مربوط به واریزی",
        income: "45000000",
        outcome: "500000000",
        remain: "600000000",
    },
    {
        serial: "324321",
        title: "واریز",
        date: new Date(),
        description: "توضیحات مربوط به واریزی",
        income: "45000000",
        outcome: "500000000",
        remain: "600000000",
    },
];

export const BankAccountType = [
    {
        title: "حساب پس انداز بانک آینده",
    },
    {
        title: "حساب پس انداز بانک ملی",
    },
    {
        title: "حساب پس انداز بانک پارسیان",
    },
];
export const peymentReason = [
    {
        title: "تسویه حساب ",
    },
    {
        title: "کرایه",
    },
    {
        title: "حقوق",
    },
    {
        title: "سایر",
    },
];

export const bankList = [
    { title: "بانک ملی", value: "Melli", logo: Meli },
    { title: "بانک صادرات", value: "Saderat", logo: saderat },
    { title: "بانک تجارت", value: "Tejarat", logo: Tejarat },
    { title: "بانک ملت", value: "Mellat", logo: mellat },
    { title: "بانک اقتصاد نوین", value: "EghtesadNovin", logo: EghtesadNovin },
    { title: "بانک مسکن", value: "Maskan", logo: maskan },
    { title: "بانک انصار", value: "Ansar", logo: Ansar },
    { title: "بانک سامان", value: "Saman", logo: Saman },
    { title: "بلو بانک", value: "Blue", logo: blue },
    { title: "بانک سپه", value: "Sepah", logo: sepah },
    { title: "بانک سرمایه", value: "Sarmayeh", logo: sarmaye },
    { title: "بانک کشاورزی", value: "Keshavarzi", logo: Keshavarzi },
    { title: "بانک گردشگری", value: "Gardeshgari", logo: gardeshgari },
    { title: "بانک رفاه", value: "Refah", logo: refah },
    {
        title: "بانک حکمت ایرانیان",
        value: "Hekmat_eIraniyan",
        logo: Hekmat_eIraniyan,
    },
    { title: "بانک توسعه صادرات", value: "ToseeSaderat", logo: ToseeSaderat },
    { title: "بانک آینده", value: "Ayande", logo: Ayande },
    { title: "بانک سینا", value: "Sina", logo: sina },
    { title: "بانک پارسیان", value: "Parsian", logo: parsian },
    { title: "بانک کارآفرین", value: "Karafarin", logo: Karafarin },
    { title: "پست بانک", value: "Post", logo: postBank },
    { title: "بانک شهر", value: "Shahr", logo: Shahr },
    { title: "بانک توسعه تعاون", value: "ToseeTaavon", logo: ToseeTaavon },
    { title: "بانک مهر ایران", value: "mehrIran", logo: mehrIranian },
    { title: "بانک مهر اقتصاد", value: "MehrEqtesad", logo: mehrEqtesad },
    { title: "بانک آرمان", value: "Arman", logo: Meli },
    { title: "بانک دی", value: "Dey", logo: day },
    { title: "بانک ایران زمین", value: "IranZamin", logo: IranZamin },
    { title: "بانک پاسارگاد", value: "Pasargad", logo: pasargad },
    { title: "بانک رسالت", value: "Resalat", logo: resalat },
    { title: "بانک صنعت و معدن", value: "San'atVaMadan", logo: Meli },
];

export const OldFactor = [
    {
        name: "امیرعلی محمدیان",
        factorNumber: "1234246",
        title: "paid",
        date: new Date(),
        mobile: "09138090933",
        amount: "10000",
        products: [
            {
                name: "سیب قرمز خارجی",
                amount: "250",
                fee: "750000",
                image: apple,
                color: "#FFDBDF",
            },
            {
                name: "موز عراقی",
                amount: "250",
                fee: "980000",
                image: banana,
                color: "#FFEEC5",
            },
        ],
    },
    {
        name: "امیرعلی احمدیان",
        factorNumber: "1234246",
        title: "paid",
        date: new Date(),
        mobile: "09138090933",
        amount: "10000",
        products: [
            {
                name: "سیب قرمز خارجی",
                amount: "250",
                fee: "750000",
                image: apple,
                color: "#FFDBDF",
            },
            {
                name: "موز عراقی",
                amount: "250",
                fee: "980000",
                image: banana,
                color: "#FFEEC5",
            },
        ],
    },
    {
        name: " سامان محمدیان",
        factorNumber: "1234246",
        title: "paid",
        date: new Date(),
        mobile: "09138090933",
        amount: "10000",
        products: [
            {
                name: "سیب قرمز خارجی",
                amount: "250",
                fee: "750000",
                image: apple,
                color: "#FFDBDF",
            },
            {
                name: "موز عراقی",
                amount: "250",
                fee: "980000",
                image: banana,
                color: "#FFEEC5",
            },
        ],
    },
    {
        name: "زهرا محمدیان",
        factorNumber: "1234246",
        title: "paid",
        date: new Date(),
        mobile: "09138090933",
        amount: "10000",
        products: [
            {
                name: "سیب قرمز خارجی",
                amount: "250",
                fee: "750000",
                image: apple,
                color: "#FFDBDF",
            },
            {
                name: "موز عراقی",
                amount: "250",
                fee: "980000",
                image: banana,
                color: "#FFEEC5",
            },
        ],
    },
];

export const products = [
    {
        logo: apricot,
        color: "#FFDBDF",
        genericName: "سیب",
        title: "سیب قرمز سبزوار",
        transportInfo: {
            driver: "احمد رحمتی",
            vehicle: "نیسان آبی",
        },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادی",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },

    {
        logo: banana,
        color: "#FFEEC5",
        genericName: "موز",
        title: "موز",
        transportInfo: {
            driver: "احمد رحمتی",
            vehicle: "نیسان آبی",
        },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادی",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: blue_berry,
        color: "#FFDBDF",
        genericName: "بلو بری",
        title: "بلو بری",
        transportInfo: {
            driver: "احمد رحمتی",
            vehicle: "نیسان آبی",
        },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادی",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },

    {
        logo: dragon_fruit,
        color: "#FFDBDF",
        genericName: "دراگون",
        title: "دراگون",
        transportInfo: {
            driver: "احمد رحمتی",
            vehicle: "نیسان آبی",
        },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادی",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: fruits,
        color: "#FFDBDF",
        genericName: "سیب",
        title: "سیب قرمز سبزوار",
        transportInfo: {
            driver: "احمد رحمتی",
            vehicle: "نیسان آبی",
        },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادی",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: goji_berry,
        color: "#FFDBDF",
        genericName: "گوجه",
        title: "گوجی بری",
        transportInfo: { driver: "احمد رحمتی", vehicle: "نیسان آبی" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادی",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: grapes_purpel,
        color: "#FFDBDF",
        genericName: "انگور",

        title: "انگور ارجوانی",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: grapes,
        color: "#FFDBDF",
        genericName: "انگور",

        title: "انگور",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: green_apple,
        color: "#E6FFCC",
        genericName: "سیب",

        title: "سیب سبز",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: kiwi,
        color: "#FFDBDF",
        genericName: "کیوی",

        title: "کیوی",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: mango,
        color: "#FFDBDF",
        genericName: "انبه",

        title: "انبه",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: melon,
        color: "#FFDBDF",
        genericName: "خربزه",

        title: "خربزه",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: orange,
        color: "#FFDBDF",
        genericName: "پرتقال",

        title: "پرتقال",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: passion_fruit,
        color: "#FFDBDF",
        genericName: "میوه",

        title: "میوه عشق",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: pear,
        color: "#FFDBDF",
        genericName: "گلابی",

        title: "گلابی",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: pineapple,
        color: "#FFF6B0",
        genericName: "آناناس",

        title: "آناناس",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: strawberry,
        color: "#FFDBDF",
        genericName: "توت فرنگی",
        title: "توت فرنگی",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
    {
        logo: watermelon,
        color: "#FFDBDF",
        genericName: "هندوانه",

        title: "هندوانه",
        transportInfo: { driver: "أحمد رحمتي", vehicle: "نيسان أزرق" },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادي",
        productCode: "103",
        type: "سبزیجات",
        unit: "1",
    },
];

export const customerFactortable = [
    {
        title: "سیب قرمز سبزوار",
        amount: "12",
        fee: "450000",
        weight: "50",
        finalFee: "500000",
        details: {
            logo: apple,
            color: "#FFDBDF",
            genericName: "سیب",
            title: "سیب قرمز سبزوار",
            transportInfo: {
                driver: "احمد رحمتی",
                vehicle: "نیسان آبی",
            },
            amount: "720000",
            date: new Date(),
            transactionParty: "محمد مرادی",
            pureWeight: "45",
            weight: "50",
            number: "12",
            fee: "450000",
            description: "توضیحات",
        },
    },
    {
        title: "سیب قرمز سبزوار",
        amount: "12",
        fee: "450000",
        weight: "50",
        finalFee: "500000",
        details: {
            logo: apple,
            color: "#FFDBDF",
            genericName: "سیب",
            title: "سیب قرمز سبزوار",
            transportInfo: {
                driver: "احمد رحمتی",
                vehicle: "نیسان آبی",
            },
            amount: "720000",
            date: new Date(),
            transactionParty: "محمد مرادی",
            pureWeight: "45",
            weight: "50",
            number: "12",
            fee: "450000",
            description: "توضیحات",
        },
    },
    {
        title: "سیب قرمز سبزوار",
        amount: "12",
        fee: "450000",
        weight: "50",
        finalFee: "500000",
        details: {
            logo: apple,
            color: "#FFDBDF",
            genericName: "سیب",
            title: "سیب قرمز سبزوار",
            transportInfo: {
                driver: "احمد رحمتی",
                vehicle: "نیسان آبی",
            },
            amount: "720000",
            date: new Date(),
            transactionParty: "محمد مرادی",
            pureWeight: "45",
            weight: "50",
            number: "12",
            fee: "450000",
            description: "توضیحات",
        },
    },
    {
        title: "سیب قرمز سبزوار",
        amount: "12",
        fee: "450000",
        weight: "50",
        finalFee: "500000",
        details: {
            logo: apple,
            color: "#FFDBDF",
            genericName: "سیب",
            title: "سیب قرمز سبزوار",
            transportInfo: {
                driver: "احمد رحمتی",
                vehicle: "نیسان آبی",
            },
            amount: "720000",
            date: new Date(),
            transactionParty: "محمد مرادی",
            pureWeight: "45",
            weight: "50",
            number: "12",
            fee: "450000",
            description: "توضیحات",
        },
    },
    {
        title: "سیب قرمز سبزوار",
        amount: "12",
        fee: "450000",
        weight: "50",
        finalFee: "500000",
        details: {
            logo: apple,
            color: "#FFDBDF",
            genericName: "سیب",
            title: "سیب قرمز سبزوار",
            transportInfo: {
                driver: "احمد رحمتی",
                vehicle: "نیسان آبی",
            },
            amount: "720000",
            date: new Date(),
            transactionParty: "محمد مرادی",
            pureWeight: "45",
            weight: "50",
            number: "12",
            fee: "450000",
            description: "توضیحات",
        },
    },
    {
        title: "سیب قرمز سبزوار",
        amount: "12",
        fee: "450000",
        weight: "50",
        finalFee: "500000",
        details: {
            logo: apple,
            color: "#FFDBDF",
            genericName: "سیب",
            title: "سیب قرمز سبزوار",
            transportInfo: {
                driver: "احمد رحمتی",
                vehicle: "نیسان آبی",
            },
            amount: "720000",
            date: new Date(),
            transactionParty: "محمد مرادی",
            pureWeight: "45",
            weight: "50",
            number: "12",
            fee: "450000",
            description: "توضیحات",
        },
    },
];
export const refrigeratingProduct = [
    {
        logo: apple,
        color: "#FFDBDF",
        title: "سیب قرمز سبزوار",
        transportInfo: {
            driver: "احمد رحمتی",
            vehicle: "نیسان آبی",
        },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادی",
        refrigerating: true,
    },

    {
        logo: avocado,
        color: "#FFDBDF",
        title: "اواکادو",
        transportInfo: {
            driver: "احمد رحمتی",
            vehicle: "نیسان آبی",
        },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادی",
        refrigerating: true,
    },

    {
        logo: cherry,
        color: "#FFDBDF",
        title: "گیلاس",
        transportInfo: {
            driver: "احمد رحمتی",
            vehicle: "نیسان آبی",
        },
        amount: "720000",
        date: new Date(),
        transactionParty: "محمد مرادی",
        refrigerating: true,
    },
];

export const FactorSellitemstable = [
    {
        productName: "سیب قرمز",
        displayName: "سیب قرمز",
        purchaseFee: "450000",
        sellFee: "500000",
        pureWeight: "35",
        packageType: "بسته چوبی",
        amount: "50",
    },
    {
        productName: "سیب قرمز",
        displayName: "سیب قرمز",
        purchaseFee: "450000",
        sellFee: "500000",
        pureWeight: "35",
        packageType: "بسته چوبی",
        amount: "50",
    },
    {
        productName: "سیب قرمز",
        displayName: "سیب قرمز",
        purchaseFee: "450000",
        sellFee: "500000",
        pureWeight: "35",
        packageType: "بسته چوبی",
        amount: "50",
    },
    {
        productName: "سیب قرمز",
        displayName: "سیب قرمز",
        purchaseFee: "450000",
        sellFee: "500000",
        pureWeight: "35",
        packageType: "بسته چوبی",
        amount: "50",
    },
];
export const customersFactorList = [
    {
        name: "امیرحسین  فرد",
        factorType: "رسمی",
        factorNumber: "153456",
        date: new Date(),
    },
    {
        name: " سلیمانی فرد",
        factorType: "رسمی",
        factorNumber: "134536",
        date: new Date(),
    },
    {
        name: "امیرحسین سلیمانی فرد",
        factorType: "رسمی",
        factorNumber: "1345634",
    },
    {
        name: "امیرحسن سلیمانی فرد",
        factorType: "رسمی",
        factorNumber: "13456",
        date: new Date(),
    },
    {
        name: " سلیمانی",
        factorType: "رسمی",
        factorNumber: "13456",
        date: new Date(),
    },
    {
        name: " سلیمانی",
        factorType: "رسمی",
        factorNumber: "13456",
        date: new Date(),
    },
    {
        name: " سلیمانی",
        factorType: "رسمی",
        factorNumber: "13456",
        date: new Date(),
    },
    {
        name: " سلیمانی",
        factorType: "رسمی",
        factorNumber: "13456",
        date: new Date(),
    },
    {
        name: " سلیمانی",
        factorType: "رسمی",
        factorNumber: "13456",
        date: new Date(),
    },
    {
        name: " سلیمانی",
        factorType: "رسمی",
        factorNumber: "13456",
        date: new Date(),
    },
];

export const factorItemForm = [
    {
        name: "productType",
        select: false,
        placeholder: "نوع محصول ",
        lable: "نوع محصول ",
        hasIcon: true,
        color: "#6D6D6D",
        type: "text",
    },

    {
        name: "purchaseFee",
        select: false,
        placeholder: "فی خرید ",
        lable: "فی خرید ",
        hasIcon: true,
        color: "#6D6D6D",
        type: "number",
        hastext: true,
    },
    {
        name: "sellFee",
        select: false,
        placeholder: "فی فروش ",
        lable: "فی فروش ",
        hasIcon: true,
        color: "#6D6D6D",
        type: "number",
        hastext: true,
    },
    {
        name: "amount",
        select: false,
        placeholder: "تعداد ",
        lable: "تعداد  ",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        hastext: false,
    },
    {
        name: "Weight",
        select: false,
        placeholder: "وزن ",
        lable: "وزن  ",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },


];
export const defineFactorForm = [
    {
        name: "transactionParty",
        select: false,
        placeholder: "نام طرف معامله",
        lable: "طرف معامله",
        hasIcon: true,
        color: "#6D6D6D",
        type: "text",
        require: true,
    },
    {
        name: "factorType",
        select: true,
        options: [
            {
                title: "نوع فاکتور را انتخاب کنید",
                value: "",
            },
            {
                title: "امانی",
                value: "amaani",
            },
            {
                title: "خریداری",
                value: "kharidari",
            },
        ],
        placeholder: "نوع فاکتور ",
        lable: "نوع فاکتور",
        hasIcon: false,
        color: "#6D6D6D",
        type: "select",
        require: false,
    },
    {
        name: "factorNumber",
        select: false,
        placeholder: "شماره فاکتور / شماره بارنامه",
        lable: "شماره فاکتور / شماره بارنامه",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        require: false,
    },
    {
        name: "date",
        select: false,
        placeholder: "تاریخ فاکتور /  بارنامه",
        lable: "تاریخ فاکتور /  بارنامه",
        hasIcon: false,
        color: "#6D6D6D",
        type: "date",
        require: false,
    },
    {
        name: "bane",
        select: false,
        placeholder: "بنه / باغ *",
        lable: "بنه / باغ را وارد کنید",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: false,
    },
    {
        name: "driverInformation",
        select: false,
        placeholder: "نام راننده را وارد کنید",
        lable: "نام راننده ",
        hasIcon: true,
        color: "#6D6D6D",
        type: "text",
        require: true,
    },
    {
        name: "tax",
        select: false,
        placeholder: "کرایه",
        lable: "کرایه",
        hasIcon: true,
        color: "#6D6D6D",
        type: "number",
        require: false,
        hastext: true,
    },
    {
        name: "transport",
        select: false,
        placeholder: "باربری",
        lable: "باربری",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: false,
    },
    {
        name: "others",
        select: false,
        placeholder: "هزینه / سایر",
        lable: "هزینه / سایر",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        require: false,
        hastext: true,
    },
    {
        name: "carType",
        select: true,
        placeholder: "نوع خودرو",
        lable: "نوع خودرو را وارد کنید",
        hasIcon: true,
        color: "#6D6D6D",
        type: "select",
        require: false,
        hastext: false,
        options: [
            {
                title: "نوع خودرو",
                value: ""
            },
            {
                title: "پراید وانت",
                value: "perayd vanet"
            },
            {
                title: "زامیاد",
                value: "zamyad"
            },
            {
                title: "نیسان ابی",
                value: "deathrider"
            },
        ]
    },
    {
        name: "plate",
        select: false,
        placeholder: "شماره پلاک",
        lable: " پلاک را وارد کنید",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: false,
        hastext: false,
    },
    {
        name: "baskol",
        select: false,
        lable: "وزن باسکول را وارد کنید",
        placeholder: "وزن باسکول",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        require: false,
        hastext: false,
    },
];

export const ProductItemInfoForm = [
    {
        name: "weight",
        select: false,
        placeholder: "وزن",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "number",
        select: false,
        placeholder: "تعداد",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "fee",
        select: false,
        placeholder: "فی",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },

    {
        name: "price",
        select: false,
        placeholder: "قیمت ",
        hasIcon: false,
        hastext: true,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "description",
        select: false,
        placeholder: "توضیحات...",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },

    {
        name: "date",
        select: false,
        placeholder: "تاریخ را وارد کنید",
        hasIcon: false,
        color: "#6D6D6D",
        type: "date",
    },
];

export const transactionpartyField = [
    {
        name: "fname",
        select: false,
        placeholder: "نام مشتری/طرف معامله را وارد کنید",
        lable: "نام مشتری/طرف معامله",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "lname",
        select: false,
        placeholder: "نام خانوادگی مشتری/طرف معامله را وارد کنید",
        lable: "نام خانوادگی مشتری/طرف معامله",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "user_type",
        select: true,
        placeholder: "نوع یا عنوان طرف معامله",
        lable: "نوع یا عنوان طرف معامله",
        hasIcon: true,
        color: "#6D6D6D",
        type: "text",
        options: [
            {
                title: "عنوان را انتخاب کنید",
                value: "",
            },
            {
                title: "مشتری",
                value: "Customer",
            },
            {
                title: "تامین کننده",
                value: "Provider",
            },
            {
                title: "راننده",
                value: "Driver",
            },
            {
                title: "کارگر",
                value: "Worker",
            },
        ],
    },
    {
        name: "shmeli",
        select: false,
        placeholder: "کد ملی",
        lable: "کد ملی",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "phone1",
        select: false,
        placeholder: "شماره تماس ۱",
        lable: "شماره تماس ۱",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "phone2",
        select: false,
        placeholder: "شماره تماس ۲",
        lable: "شماره تماس ۲",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "phone3",
        select: false,
        placeholder: "شماره تماس۳",
        lable: "شماره تماس ۳",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },

    {
        name: "home_address",
        select: false,
        placeholder: "آدرس",
        lable: "آدرس",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "referer",
        select: false,
        placeholder: "معرف",
        lable: "معرف",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "qualification",
        select: true,
        placeholder: "میزان اعتبار",
        lable: "میزان اعتبار",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        options: [
            {
                title: "میزان اعتبار را انتخاب کنید",
                value: "",
            },
            {
                title: "خوب",
                value: "good",
            },
            {
                title: "متوسط",
                value: "ok",
            },
            {
                title: "بد",
                value: "bad",
            },
        ],
    },
];
export const productsFeilds = [
    {
        name: "category_id",
        select: true,
        placeholder: "دسته محصولات",
        lable: "دسته محصولات",
        hasIcon: true,
        color: "#6D6D6D",
        type: "select",

    },
    {
        name: "subcategory_id",
        select: true,
        placeholder: "نام ژنریک ",
        lable: "نام ژنریک ",
        hasIcon: false,
        color: "#6D6D6D",
        type: "select",


    },
    {
        name: "title",
        select: false,
        placeholder: "نام محصول",
        lable: "نام محصول",

        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "productpic_id",
        select: true,
        placeholder: "تصویر محصول",
        lable: "تصویر محصول",
        hasIcon: false,
        color: "#6D6D6D",
        type: "select",
    },

    {
        name: "unit_id",
        select: true,
        placeholder: "واحد",
        lable: "واحد",
        hasIcon: true,
        color: "#6D6D6D",
        type: "number",

    },
    {
        name: "min_stock",
        select: false,
        placeholder: "حداقل موجودی",
        lable: "حداقل موجودی",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "instock",
        select: false,
        placeholder: "نقطه سفارش",
        lable: "نقطه سفارش",

        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "max_stock",
        select: false,
        placeholder: "حداکثر موجودی",
        lable: "حداکثر موجودی",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "shelf",
        select: false,
        placeholder: "شماره قفسه",
        lable: "شماره قفسه",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },

    {
        name: "barcode",
        select: false,
        placeholder: "بارکد",
        lable: "بارکد",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
];
export const digitalLable = [

    {
        name: "sugar",
        select: false,
        placeholder: "قند",
        lable: "قند",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "energy",
        select: false,

        lable: "انرژی",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },

    {
        name: "fat",
        select: false,
        placeholder: "چربی",
        lable: "چربی",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "protein",
        select: false,
        lable: "پروتیین",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "vitamin1",
        select: false,
        lable: "ویتامین",

        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "vitamin2",
        select: false,
        lable: "ویتامین",

        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "advantage",
        select: false,
        placeholder: "خواص",
        lable: "خواص",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
];

export const accountstable = [
    {
        customerNumber: "123413",
        customerName: "پرهام حسن زاده",
        mobile: "09138090933",
        remaining: "450000",
        remainingTitle: "بدهکار",
    },
];

export const RegistrationCostData = [
    {
        amount: "40000000",
        date: new Date(),
        description: "چک میوه",
    },
    {
        amount: "40000000",
        date: new Date(),
        description: "چک میوه",
    },
    {
        amount: "40000000",
        date: new Date(),
        description: "چک میوه",
    },
    {
        amount: "40000000",
        date: new Date(),
        description: "چک میوه",
    },
    {
        amount: "40000000",
        date: new Date(),
        description: "چک میوه",
    },
    {
        amount: "40000000",
        date: new Date(),
        description: "چک میوه",
    },
];

export const vehicleType = [
    {
        name: "پیکان",
    },
    {
        name: "نیسان",
    },
    {
        name: "پراید وانت",
    },
];

export const transactionTypeItem = [
    {
        title: "مشتری",
        value: "customer",
    },
    {
        title: "تامین کننده",
        value: "provider",
    },
    {
        title: "راننده",
        value: "driver",
    },
    {
        title: "کارگر",
        value: "servent",
    },
];

export const report = {
    sectionTop: [
        {
            title: "نقد",
            value: 20000,
        },
        {
            title: "پوز ها",
            value: 20000,
        },
        {
            title: "تنخواه",
            value: 20000,
        },
        {
            title: "جمع کل تخفیفات",
            value: 20000,
        },
        {
            title: "جمع کل دریافتی ها",
            value: 20000,
        },
        {
            title: "جمع کل پرداختی ها",
            value: 20000,
        },
        {
            title: "جمع کل مستردی",
            value: 20000,
        },
        {
            title: "جمع کل چک ها",
            value: 20000,
        },
        {
            title: "تعداد مشتریان",
            value: 20000,
        },
        {
            title: "موجودی صندوق",
            value: 20000,
        },
    ],
    sectionBotton: [
        {
            title: "فروش نقدی",
            value: 20000,
        },
        {
            title: "فروش نسیه",
            value: 20000,
        },
        {
            title: "جمع کل فروش",
            value: 20000,
        },
    ],
};

export const keypadletter = [
    {
        0: "ض",
        1: "ص",
        2: "ث",
        3: "ق",
        4: "ف",
        5: "غ",
        6: "ع",
        7: "ه",
        8: "خ",
        9: "ح",
        10: "ج",
        11: "چ",
        12: "پ",
    },
    {
        0: "ش",
        1: "س",
        2: "ی",
        3: "ب",
        4: "ل",
        5: "ا",
        6: "ت",
        7: "ن",
        8: "م",
        9: "ک",
        10: "گ",
    },
    {
        0: "ظ",
        1: "ط",
        2: "ز",
        3: "ر",
        4: "ذ",
        5: "د",
        6: "و",
    },
];
export const keypadnumber = [
    {
        0: "۱",
        1: "۲",
        2: "۳",
    },
    {
        0: "۴",
        1: "۵",
        2: "۶",
    },
    {
        0: "۷",
        1: "۸",
        2: "۹",
    },
    {
        0: "0",
        1: ".",
    },
];

export const BarChartData = [
    {
        id: 1,
        year: "۱۵-۳۰ اردیبهشت",
        userGain: 40,
    },
    {
        id: 2,
        year: "۱-۱۵ اردیبهشت",
        userGain: 20,
    },
    {
        id: 3,
        year: "۱۵-۳۰ فروردین",
        userGain: 45,
    },
    {
        id: 4,
        year: "۱-۲۵ فروردین",
        userGain: 60,
    },
];

export const customersDashbord = [
    {
        name: "پرهام حسن زاده",
        status: "بدهکار",
        mobile: "09138090933",
        remain: "500000",
    },
    {
        name: "امیرحسین فهمیده",
        status: "بستانکار",
        mobile: "09138090833",
        remain: "500000",
    },
    {
        name: "امیرحسین فهمیده",
        status: "بستانکار",
        mobile: "09138090833",
        remain: "500000",
    },
    {
        name: "امیرحسین فهمیده",
        status: "بستانکار",
        mobile: "09138090833",
        remain: "500000",
    },
    {
        name: "امیرحسین فهمیده",
        status: "بستانکار",
        mobile: "09138090833",
        remain: "500000",
    },
];

export const factorDTable = [
    {
        name: "امیرحسین فهمیده",
        status: "موفق",
        date: new Date(),
        price: "300000",
    },
    {
        name: "امیرحسین فهمیده",
        status: "ناموفق",
        date: new Date(),
        price: "300000",
    },
    {
        name: "امیرحسین فهمیده",
        status: "نامشخصی",
        date: new Date(),
        price: "300000",
    },
];

export const customersData = [
    {
        image: profile,
        name: "پرهام حسن زاده",
        mobile: "09138090933",
        phone1: "۰۵۱۳۶۰۹۸۹۶۵",
        phone2: "۰۵۱۳۶۰۹۸۹۶۵",
        Ncode: "1273005651",
        address: " تهران - خیابان ولیعصر - ولیعصر ۱۵/۵ پلاک ۳۶",
        transactionTitle: "مهدی",
        introducer: "سلیمانی فرد",
        description: "توضیحات مشتری در  رابطه با مسایل مربوط",
        Last_factor: [
            {
                product_name: "سیب قرمز سبزوار",
                number: "24",
                fee: "50000",
                pureWeight: "25",
                weight: "30",
                finalFee: "3500000",
            },
            {
                product_name: "سیب قرمز سبزوار",
                number: "24",
                fee: "50000",
                pureWeight: "25",
                weight: "30",
                finalFee: "3500000",
            },
            {
                product_name: "سیب قرمز سبزوار",
                number: "24",
                fee: "50000",
                pureWeight: "25",
                weight: "30",
                finalFee: "3500000",
            },
        ],
    },
];

export const FactorPageTablemain = [
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "خریداری",
        factorDate: new Date(),
        factorNumer: "462462",


        amount: "3400000",
        status: "open",
    },
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "خریداری",
        factorDate: new Date(),
        factorNumer: "462462",


        amount: "3400000",
        status: "close",
    },
];

export const FactorPageTable = [
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "خریداری",
        factorDate: new Date(),
        factorNumer: "462462",
        driver: "علی رحمتی",
        vehicle: "پیکان وانت",
        plate: "۱۳م۸۴۷-۱۲",
        date: new Date(),
        status: "open",
    },
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "امانی",
        factorDate: new Date(),
        factorNumer: "462462",
        driver: "علی رحمتی",
        vehicle: "پیکان وانت",
        plate: "۱۳م۸۴۷-۱۲",
        date: new Date(),
        status: "close",
    },
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "امانی",
        factorDate: new Date(),
        factorNumer: "462462",
        driver: "علی رحمتی",
        vehicle: "پیکان وانت",
        plate: "۱۳م۸۴۷-۱۲",
        date: new Date(),
        status: "close",
    },
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "امانی",
        factorDate: new Date(),
        factorNumer: "462462",
        driver: "علی رحمتی",
        vehicle: "پیکان وانت",
        plate: "۱۳م۸۴۷-۱۲",
        date: new Date(),
        status: "close",
    },
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "امانی",
        factorDate: new Date(),
        factorNumer: "462462",
        driver: "علی رحمتی",
        vehicle: "پیکان وانت",
        plate: "۱۳م۸۴۷-۱۲",
        date: new Date(),
        status: "close",
    },
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "امانی",
        factorDate: new Date(),
        factorNumer: "462462",
        driver: "علی رحمتی",
        vehicle: "پیکان وانت",
        plate: "۱۳م۸۴۷-۱۲",
        date: new Date(),
        status: "close",
    },
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "امانی",
        factorDate: new Date(),
        factorNumer: "462462",
        driver: "علی رحمتی",
        vehicle: "پیکان وانت",
        plate: "۱۳م۸۴۷-۱۲",
        date: new Date(),
        status: "close",
    },
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "امانی",
        factorDate: new Date(),
        factorNumer: "462462",
        driver: "علی رحمتی",
        vehicle: "پیکان وانت",
        plate: "۱۳م۸۴۷-۱۲",
        date: new Date(),
        status: "close",
    },
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "امانی",
        factorDate: new Date(),
        factorNumer: "462462",
        driver: "علی رحمتی",
        vehicle: "پیکان وانت",
        plate: "۱۳م۸۴۷-۱۲",
        date: new Date(),
        status: "close",
    },
    {
        serialNumber: "45743",
        transactionName: "امیررضا محمدی",
        factorType: "امانی",
        factorDate: new Date(),
        factorNumer: "462462",
        driver: "علی رحمتی",
        vehicle: "پیکان وانت",
        plate: "۱۳م۸۴۷-۱۲",
        date: new Date(),
        status: "close",
    },
];

export const safiFrom = [
    {
        name: "transactionParty",
        select: false,
        placeholder: "طرف معامله",
        lable: "طرف معامله",
        hasIcon: true,
        color: "#6D6D6D",
        type: "text",
        require: true,
    },
    {
        name: "factorType",
        select: true,
        options: [
            {
                title: "نوع فاکتور ",
                value: "",
            },
            {
                title: "امانی",
                value: "amaani",
            },
            {
                title: "خریداری",
                value: "kharidari",
            },
        ],
        placeholder: "نوع فاکتور ",
        lable: "نوع فاکتور",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: false,
    },
    {
        name: "factor-number",
        select: false,
        placeholder: "شماره بارنامه/فاکتور",
        lable: "شماره بارنامه/فاکتور",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: true,
    },
    {
        name: "factor-date",
        select: false,
        placeholder: "تاریخ فاکتور/بارنامه",
        lable: "تاریخ فاکتور/بارنامه",
        hasIcon: false,
        color: "#6D6D6D",
        type: "date",
        require: true,
    },
    {
        name: "bane",
        select: false,
        placeholder: "بنه باغ",
        lable: "بنه باغ",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: true,
    },
    {
        name: "auto-type",
        select: true,
        placeholder: "نوع خودرو",
        lable: "نوع خودرو",
        hasIcon: true,
        color: "#6D6D6D",
        type: "text",
        require: true,
        options: [
            {
                title: "نوع خودرو ",
                value: "",
            },
            {
                title: "پیکان ",
                value: "paykan",
            },
            {
                title: "مزدا",
                value: "mazda",
            },
        ],
    },
    {
        name: "auto-driver",
        select: true,
        placeholder: "راننده",
        lable: "راننده ",
        hasIcon: true,
        color: "#6D6D6D",
        type: "text",
        require: true,
        options: [
            {
                title: "راننده",
                value: "",
            },
            {
                title: "پیکان ",
                value: "paykan",
            },
            {
                title: "مزدا",
                value: "mazda",
            },
        ],
    },
    {
        name: "plate",
        select: false,
        placeholder: "شماره پلاک",
        lable: "شماره پلاک",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        require: true,
    },
    {
        name: "weight",
        select: false,
        placeholder: "وزن باسکول",
        lable: "وزن باسکول",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        require: true,
    },
];

export const safiAmaniData = [
    {
        productName: "سیب قرمز البرز",
        amount: "20",
        packageType: "جعبه چوبی",
        pureWeight: "50",
        weight: "60",
        paletWeight: "10",
        fee: "500000",
        price: "600000",
    },
    {
        productName: "سیب قرمز البرز",
        amount: "20",
        packageType: "جعبه چوبی",
        pureWeight: "50",
        weight: "60",
        paletWeight: "10",
        fee: "500000",
        price: "600000",
    },
    {
        productName: "سیب قرمز البرز",
        amount: "20",
        packageType: "جعبه چوبی",
        pureWeight: "50",
        weight: "60",
        paletWeight: "10",
        fee: "500000",
        price: "600000",
    },
    {
        productName: "سیب قرمز البرز",
        amount: "20",
        packageType: "جعبه چوبی",
        pureWeight: "50",
        weight: "60",
        paletWeight: "10",
        fee: "500000",
        price: "600000",
    },
    {
        productName: "سیب قرمز البرز",
        amount: "20",
        packageType: "جعبه چوبی",
        pureWeight: "50",
        weight: "60",
        paletWeight: "10",
        fee: "500000",
        price: "600000",
    },
];

export const createUserForm = [
    {
        name: "fname",
        select: false,
        placeholder: "نام",
        lable: "نام",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: false,
    },
    {
        name: "lname",
        select: false,
        placeholder: "نام خانوادگی",
        lable: "نام خانوادگی",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: false,
    },
    {
        name: "username",
        select: false,
        placeholder: "نام کاربری",
        lable: "نام کاربری",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: true,
    },

    {
        name: "password",
        select: false,
        placeholder: "رمز عبور",
        lable: "رمز عبور",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: true,
    },
    {
        name: "phone",
        select: false,
        placeholder: "شماره همراه",
        lable: "شماره همراه",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        require: true,
    },
];
export const createUserCheckbox = [
    { title: "مدیر", id: "admin" },
    { title: "عملیات", id: "actions" },
    { title: "مدیر عملیات", id: "admin_actions" },
    { title: "تنظیمات", id: "settings" },
    { title: "حسابداری", id: "accounting" },
    { title: "مدیریت", id: "management" },

]

export const checkTable = [
    {
        title: "خرید سیب قرمز",
        serial: "89696000",
        transactionName: "امیرحسین سلیمانی فرد",
        bank: "بانک سامان",
        checkNumber: "۸۲۳",
        ckeckDate: new Date(),
        ckeckCode: "۲۱۹۴۲۸۷۰۲۳۸",
        price: "09809890890",
        details: [
            {
                for: "پرهام حسن زاده",
                nCode: "1246776434",
                status: "برگشتی",
            },
        ],
    },
];

export const addchceckFrom = [
    {
        name: "bank",
        select: false,
        placeholder: "بانک خود را وارد کنید",
        lable: "بانک ",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
    },
    {
        name: "account",
        select: false,
        placeholder: "حساب خود را وارد کنید",
        lable: "حساب ",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
    },
    {
        name: "check-price",
        select: false,
        placeholder: "مبلغ چک را وارد کنید",
        lable: "مبلغ را وارد کنید ... ",
        hasIcon: true,
        color: "#6D6D6D",
        type: "number",
        hastext: true,
    },
    {
        name: "check-date",
        select: false,
        placeholder: "تاریخ چک را انتخاب کنید",
        lable: "تاریخ چک را انتخاب کنید",
        hasIcon: false,
        color: "#6D6D6D",
        type: "date",
        hastext: false,
    },
    {
        name: "owner",
        select: false,
        placeholder: "در وجه",
        lable: "در وجه",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        hastext: false,
    },
    {
        name: "nCode",
        select: false,
        placeholder: "کد ملی",
        lable: "کد ملی",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        hastext: false,
    },
    {
        name: "check-number",
        select: false,
        placeholder: "شماره چک",
        lable: "شماره چک",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        hastext: false,
    },
    {
        name: "check-code",
        select: false,
        placeholder: "شماره صیادی",
        lable: "شماره صیادی",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        hastext: false,
    },
    {
        name: "description",
        select: false,
        placeholder: "توضیحات:",
        lable: "توضیحات:",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        hastext: false,
    },
];

export const keyboardLatter = [
    "` \u06f1 \u06f2 \u06f3 \u06f4 \u06f5 \u06f6 \u06f7 \u06f8 \u06f9 \u06f0 - = {bksp}",
    "{tab} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u0686 \\",
    "{lock} \u0634 \u0633 \u06cc \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u06a9 \u06af {enter}",
    "\u0638 \u0637 \u0632 \u0631 \u0630 \u062f \u067e \u0648 \u002e \u002f",
    "{space}",
];

export const keyboardnumber = [
    "\u06f1 \u06f2 \u06f3",
    "\u06f4 \u06f5 \u06f6",
    "\u06f7 \u06f8 \u06f9",
    ". 0 /",
];


export const lableDiscountForm = [
    {

        name: "type",
        select: true,
        placeholder: "نوع کد تخفیف:",
        lable: "نوع کد تخفیف:",
        hasIcon: false,
        color: "#6D6D6D",
        type: "select",
        hastext: false,
        options: [
            {
                value: "",
                title: "نوع  تخفیف"
            },
            {
                value: 0,
                title: "درصدی"
            },
            {
                value: 1,
                title: "مبلغی"
            },
        ]
    },
    {

        name: "amount",
        select: false,
        placeholder: "مقدار کد تخفیف:",
        lable: "مقدار کد تخفیف:",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        hastext: false,
    },
    {
        name: "from_amount",
        select: false,
        placeholder: "از مبلغ:",
        lable: "از مبلغ:",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        hastext: false,
    },
    {
        name: "to_amount",
        select: false,
        placeholder: "تا مبلغ:",
        lable: "تا مبلغ:",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        hastext: false,
    },
    {
        name: "started_time",
        select: false,
        placeholder: "از تاریخ:",
        lable: "از تاریخ:",
        hasIcon: false,
        color: "#6D6D6D",
        type: "date",
        hastext: false,
    },
    {
        name: "end_time",
        select: false,
        placeholder: "تا تاریخ:",
        lable: "تا تاریخ:",
        hasIcon: false,
        color: "#6D6D6D",
        type: "date",
        hastext: false,
    },
    {
        name: "txtType",
        select: true,
        placeholder: "نوع متن  لیبل:",
        lable: "نوع متن  لیبل:",
        hasIcon: false,
        color: "#6D6D6D",
        type: "select",
        hastext: false,
        options: [
            {
                value: "",
                title: "نوع متن  لیبل"
            },
            {
                value: "manual",
                title: "دستی"
            },
            {
                value: "system",
                title: 'سیستمی'
            }
        ]
    }
    , {
        name: "orderlimit",
        select: false,
        placeholder: "تعداد استفاده:",
        lable: "تعداد استفاده:",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        hastext: false,
    }
    , {
        name: "how_many",
        select: false,
        placeholder: "تعداد :",
        lable: "تعداد :",
        hasIcon: false,
        color: "#6D6D6D",
        type: "number",
        hastext: false,
    }
    , {
        name: "code",
        select: false,
        placeholder: "متن دستی :",
        lable: "متن دستی :",
        hasIcon: false,
        color: "#6D6D6D",
        type: "text",
        hastext: false,
    }


]