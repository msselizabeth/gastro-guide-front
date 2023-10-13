import styles from "../../styles/Home.module.scss";

export const PageIcon = () => {
  return (
    <svg
      width="75"
      height="95"
      viewBox="0 0 75 95"
      fill="none"
      className={styles.aboutListIcon}
    >
      <path
        d="M71.875 94.6H3.125C1.59821 94.6 0.4 93.433 0.4 92.0312V30.0875H28.125C30.0547 30.0875 31.65 28.5972 31.65 26.7188V0.4H71.875C73.4015 0.4 74.6 1.56975 74.6 2.96875V92.0312C74.6 93.433 73.4018 94.6 71.875 94.6ZM1.00181 23.35L24.6 0.931724V23.35H1.00181Z"
        fill="url(#paint0_linear_106_859)"
        stroke="#5A0319"
        stroke-width="0.8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_106_859"
          x1="37.5"
          y1="0"
          x2="37.5"
          y2="95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C4C23D" stop-opacity="0.9" />
          <stop offset="1" stop-color="#FB9803" stop-opacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
};
