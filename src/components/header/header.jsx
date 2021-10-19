const menuIcons = [
  {
    icon: HomeIcon,
    url: "/",
    isActive: true,
  },
  {
    icon: SearchIcon,
    url: "/",
    isActive: true,
  },
  {
    icon: LikeIcon,
    url: "/",
    isActive: true,
  },
  {
    icon: BellIcon,
    url: "/",
    isActive: false,
  },
  {
    icon: BackIcon,
    url: "/",
    isActive: true,
  },
];

export default function Header({ title }) {
  return (
    <header className="w-full flex justify-between bg-white px-8 py-2 h-16 items-center shadow-md">
      <div className="flex flex-row space-x-4 items-center">
        <AppIcon />
        <span className="font-bold text-xl">{title ?? "IFlix"}</span>
      </div>
      <div className="flex flex-row space-x-8">
        {menuIcons?.map((current, index) => (
          <MenuIcons
            key={index}
            Icon={current.icon}
            href={current.url}
            isActive={current.isActive}
          />
        ))}
      </div>
    </header>
  );
}

const AppIcon = () => {
  return (
    <svg
      width="24"
      height="19"
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
    >
      <path
        d="M22.7143 3.84048L19.2857 5.82955V1.72727C19.2857 0.774574 18.517 0 17.5714 0H1.71429C0.76875 0 0 0.774574 0 1.72727V17.2727C0 18.2254 0.76875 19 1.71429 19H17.5714C18.517 19 19.2857 18.2254 19.2857 17.2727V13.1705L22.7143 15.1595C23.2848 15.4915 24 15.0759 24 14.4146V4.58807C24 3.92415 23.2848 3.50852 22.7143 3.84048ZM7.07143 5.18182C7.07143 5.30057 6.975 5.39773 6.85714 5.39773H3.85714C3.73929 5.39773 3.64286 5.30057 3.64286 5.18182V3.88636C3.64286 3.76761 3.73929 3.67045 3.85714 3.67045H6.85714C6.975 3.67045 7.07143 3.76761 7.07143 3.88636V5.18182ZM22.0714 12.5497L19.2857 10.9358V8.0669L22.0714 6.45028V12.5497Z"
        fill="black"
      />
    </svg>
  );
};

function HomeIcon() {
  return "M23.5033 11.8034L12.5988 0.262836C12.5203 0.179517 12.427 0.113416 12.3244 0.0683154C12.2217 0.0232147 12.1116 0 12.0005 0C11.8893 0 11.7793 0.0232147 11.6766 0.0683154C11.574 0.113416 11.4807 0.179517 11.4022 0.262836L0.497704 11.8034C0.180021 12.1398 0 12.5969 0 13.0735C0 14.0633 0.759793 14.8679 1.69431 14.8679H2.84327V23.1028C2.84327 23.5991 3.22184 24 3.69042 24H10.3062V17.7194H13.2712V24H20.3106C20.7792 24 21.1577 23.5991 21.1577 23.1028V14.8679H22.3067C22.7567 14.8679 23.1883 14.6801 23.5059 14.3408C24.1651 13.6399 24.1651 12.5043 23.5033 11.8034Z";
}

function SearchIcon() {
  return "M23.9279 22.2749L16.1369 14.4839C17.3459 12.9209 17.9999 11.01 17.9999 8.99996C17.9999 6.59397 17.0609 4.33798 15.3629 2.63699C13.6649 0.935996 11.403 0 8.99996 0C6.59697 0 4.33498 0.938996 2.63699 2.63699C0.935996 4.33498 0 6.59397 0 8.99996C0 11.403 0.938996 13.6649 2.63699 15.3629C4.33498 17.0639 6.59397 17.9999 8.99996 17.9999C11.01 17.9999 12.9179 17.3459 14.4809 16.1399L22.2719 23.9279C22.2947 23.9508 22.3219 23.9689 22.3517 23.9813C22.3816 23.9936 22.4136 24 22.4459 24C22.4782 24 22.5102 23.9936 22.5401 23.9813C22.5699 23.9689 22.5971 23.9508 22.6199 23.9279L23.9279 22.6229C23.9508 22.6001 23.9689 22.5729 23.9813 22.5431C23.9936 22.5132 24 22.4812 24 22.4489C24 22.4166 23.9936 22.3846 23.9813 22.3547C23.9689 22.3249 23.9508 22.2977 23.9279 22.2749ZM13.7519 13.7519C12.4799 15.0209 10.794 15.7199 8.99996 15.7199C7.20597 15.7199 5.51998 15.0209 4.24798 13.7519C2.97899 12.4799 2.27999 10.794 2.27999 8.99996C2.27999 7.20597 2.97899 5.51698 4.24798 4.24798C5.51998 2.97899 7.20597 2.27999 8.99996 2.27999C10.794 2.27999 12.4829 2.97599 13.7519 4.24798C15.0209 5.51998 15.7199 7.20597 15.7199 8.99996C15.7199 10.794 15.0209 12.4829 13.7519 13.7519Z";
}

function LikeIcon() {
  return "M23.4193 4.91832C23.047 3.95586 22.51 3.08369 21.8386 2.35064C21.1667 1.61539 20.3745 1.0311 19.505 0.62954C18.6035 0.211494 17.6365 -0.0024864 16.6602 2.1797e-05C15.2906 2.1797e-05 13.9544 0.418667 12.7931 1.20944C12.5153 1.39861 12.2514 1.60638 12.0014 1.83276C11.7513 1.60638 11.4874 1.39861 11.2096 1.20944C10.0484 0.418667 8.71211 2.1797e-05 7.34251 2.1797e-05C6.35628 2.1797e-05 5.40062 0.210895 4.49774 0.62954C3.62542 1.03268 2.83921 1.61258 2.16414 2.35064C1.49183 3.08287 0.95477 3.95524 0.5834 4.91832C0.197245 5.91997 0 6.98364 0 8.07832C0 9.11097 0.188911 10.187 0.563954 11.2817C0.877878 12.1965 1.32793 13.1455 1.903 14.1037C2.81421 15.6201 4.06713 17.2017 5.62287 18.8049C8.20094 21.4625 10.754 23.2984 10.8624 23.3728L11.5208 23.8442C11.8125 24.0519 12.1875 24.0519 12.4792 23.8442L13.1376 23.3728C13.246 23.2953 15.7963 21.4625 18.3771 18.8049C19.9328 17.2017 21.1858 15.6201 22.097 14.1037C22.672 13.1455 23.1249 12.1965 23.436 11.2817C23.8111 10.187 24 9.11097 24 8.07832C24.0028 6.98364 23.8055 5.91997 23.4193 4.91832ZM12.0014 21.3912C12.0014 21.3912 2.11135 14.3177 2.11135 8.07832C2.11135 4.91832 4.45329 2.35684 7.34251 2.35684C9.3733 2.35684 11.1346 3.62207 12.0014 5.47031C12.8681 3.62207 14.6295 2.35684 16.6602 2.35684C19.5495 2.35684 21.8914 4.91832 21.8914 8.07832C21.8914 14.3177 12.0014 21.3912 12.0014 21.3912Z";
}

function BellIcon() {
  return "M22.8571 18.9818H22V9.70909C22 5.86091 18.275 2.68091 13.4286 2.15182V1.09091C13.4286 0.488182 12.7893 0 12 0C11.2107 0 10.5714 0.488182 10.5714 1.09091V2.15182C5.725 2.68091 2 5.86091 2 9.70909V18.9818H1.14286C0.510714 18.9818 0 19.3718 0 19.8545V20.7273C0 20.8473 0.128571 20.9455 0.285714 20.9455H8C8 22.6309 9.79286 24 12 24C14.2071 24 16 22.6309 16 20.9455H23.7143C23.8714 20.9455 24 20.8473 24 20.7273V19.8545C24 19.3718 23.4893 18.9818 22.8571 18.9818ZM12 22.2545C11.0536 22.2545 10.2857 21.6682 10.2857 20.9455H13.7143C13.7143 21.6682 12.9464 22.2545 12 22.2545ZM4.57143 18.9818V9.70909C4.57143 8.19273 5.34286 6.76909 6.74643 5.69727C8.15 4.62545 10.0143 4.03636 12 4.03636C13.9857 4.03636 15.85 4.62545 17.2536 5.69727C18.6571 6.76909 19.4286 8.19273 19.4286 9.70909V18.9818H4.57143Z";
}

function BackIcon() {
  return "M21.486 18.1395H19.5643C19.4331 18.1395 19.3101 18.1981 19.2281 18.3014C19.0368 18.5386 18.8318 18.7675 18.6158 18.9851C17.7326 19.8877 16.6864 20.607 15.5352 21.1033C14.3424 21.6176 13.0604 21.8814 11.7656 21.8791C10.4563 21.8791 9.18794 21.6167 7.99613 21.1033C6.84485 20.607 5.79868 19.8877 4.91546 18.9851C4.03067 18.0856 3.32515 17.0194 2.83799 15.8456C2.33229 14.6289 2.07808 13.3368 2.07808 12C2.07808 10.6633 2.33503 9.37119 2.83799 8.15445C3.32456 6.97957 4.02434 5.92189 4.91546 5.01492C5.80659 4.10794 6.84259 3.39352 7.99613 2.89678C9.18794 2.38329 10.4563 2.12097 11.7656 2.12097C13.075 2.12097 14.3433 2.3805 15.5352 2.89678C16.6887 3.39352 17.7247 4.10794 18.6158 5.01492C18.8318 5.23538 19.034 5.46422 19.2281 5.69864C19.3101 5.80189 19.4359 5.8605 19.5643 5.8605H21.486C21.6582 5.8605 21.7648 5.66515 21.6691 5.51724C19.5725 2.19074 15.9042 -0.0111205 11.7356 4.22474e-05C5.18608 0.0167864 -0.0649962 5.44468 0.000608082 12.1228C0.0662123 18.6949 5.30909 24 11.7656 24C15.9233 24 19.5753 21.8009 21.6691 18.4828C21.7621 18.3349 21.6582 18.1395 21.486 18.1395ZM23.9161 11.8242L20.0372 8.69863C19.8924 8.58142 19.6819 8.68747 19.6819 8.87444V10.9954H11.0987C10.9784 10.9954 10.88 11.0958 10.88 11.2186V12.7814C10.88 12.9042 10.9784 13.0047 11.0987 13.0047H19.6819V15.1256C19.6819 15.3126 19.8951 15.4186 20.0372 15.3014L23.9161 12.1758C23.9422 12.155 23.9634 12.1283 23.9779 12.0978C23.9924 12.0673 24 12.0339 24 12C24 11.9661 23.9924 11.9327 23.9779 11.9022C23.9634 11.8718 23.9422 11.8451 23.9161 11.8242Z";
}

function MenuIcons({ Icon, href, isActive = false, isSelected }) {
  return (
    <a href={href} key={Icon}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={Icon()}
          fill-opacity={isActive ? "1.0" : "0.85"}
          fill={isSelected ? "green" : isActive ? "black" : "gray"}
        />
      </svg>
    </a>
  );
}

// function MenuIcons({ Icon, href, isActive, isSelected }) {
//   return (
//     <IconContext.Provider
//       value={{
//         color: isSelected ? "" : isActive ? "blue" : "red",
//         size: "24px",
//       }}
//     >
//       <a href={href} target="_blank">
//         <Icon size={24} color="000"></Icon>
//       </a>
//     </IconContext.Provider>
//   );
// }
