import styles from "../HomePage/AboutResourceSection.module.scss";

export const InfoIcon = () => {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      className={styles.aboutListIcon}
    >
      <path
        d="M25.5594 55.9172L24.4601 56.65H25.7812H53.9062H55.2274L54.1281 55.9172L47.0969 51.2297L46.9961 51.1625H46.875H42.5875V28.125V27.725H42.1875H30.4688H29.8215L30.111 28.3039L32.4547 32.9914L32.5653 33.2125H32.8125H37.1V51.1625H32.8125H32.6914L32.5906 51.2297L25.5594 55.9172ZM0.4 37.5C0.4 17.0115 17.0092 0.4 37.5 0.4C57.9908 0.4 74.6 17.0115 74.6 37.5C74.6 57.9885 57.9908 74.6 37.5 74.6C17.0092 74.6 0.4 57.9885 0.4 37.5ZM42.5875 18.75C42.5875 15.9416 40.3084 13.6625 37.5 13.6625C34.6916 13.6625 32.4125 15.9416 32.4125 18.75C32.4125 21.5584 34.6916 23.8375 37.5 23.8375C40.3084 23.8375 42.5875 21.5584 42.5875 18.75Z"
        fill="url(#paint0_linear_106_861)"
        stroke="#5A0319"
        strokeWidth="0.8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_106_861"
          x1="37.5"
          y1="0"
          x2="37.5"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4C23D" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FB9803" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
};
