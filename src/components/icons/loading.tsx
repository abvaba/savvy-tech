const Loading = () => {
  return (
    <svg width="100%"
         height="100%"
         viewBox="0 0 100 100"
         preserveAspectRatio="xMidYMid meet"
    >
      <circle fill="currentColor" stroke="none" cx="30" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"/>
      </circle>
      <circle fill="currentColor" stroke="none" cx="50" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"/>
      </circle>
      <circle fill="currentColor" stroke="none" cx="70" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"/>
      </circle>
    </svg>
  );
};

export {Loading};
