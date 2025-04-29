"use client";

import React from "react";
import styled from "styled-components";

const LiquidButton = () => {
  return (
    <StyledWrapper>
      <div>
        <svg viewBox="0 0 0 0" width={0} height={0}>
          <filter id="wave-filter">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={25}
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 48 -7"
            />
          </filter>
        </svg>
        <button className="button">
          <div className="top-white" />
          <div className="bottom-white" />
          <div className="wave" />
          <div className="text">Contact Me</div>
          <div className="inset-shadow" />
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    padding: 1em 2em;
    border-radius: 3em;
    border: none;
    background: #72ecff;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    box-shadow: 0px 3px 5px 0px #0005;
    transition: all 0.3s;
  }

  .button:active {
    box-shadow: 0px 3px 5px 0px #0000;
    background: #00ddff;
  }

  .inset-shadow {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0px 6px 6px -4px #0005, inset 0px -6px 6px -4px #0000;
    transition: all 0.3s;
  }

  .button:active .inset-shadow {
    box-shadow: inset 0px 4px 5px -2px #0007, inset 0px -6px 6px -4px #0007;
  }

  .top-white {
    background: linear-gradient(#fff8, #fff0);
    position: absolute;
    inset: 4px 12px;
    height: 3em;
    border-radius: 3em 3em 1em;
    transition: all 0.3s;
  }

  .button:active .top-white {
    opacity: 0;
  }

  .bottom-white {
    background: linear-gradient(#fff0, #fff9);
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 5px;
    height: 3em;
    border-radius: 1em 1em 3em 3em;
    opacity: 0;
    transition: all 0.3s;
  }

  .button:active .bottom-white {
    opacity: 1;
  }

  .wave {
    position: absolute;
    inset: 0;
    filter: url(#wave-filter);
    z-index: -1;
    color: #00ddff;
    transition: all 0.3s;
  }

  .button:active .wave {
    color: #72ecff;
  }

  .wave::before {
    content: "";
    position: absolute;
    top: -3.5em;
    left: -1em;
    width: 8em;
    height: 4em;
    background: currentColor;
    animation: spin 2s linear infinite;
  }

  .wave::after {
    content: "";
    position: absolute;
    top: -3.5em;
    right: -1em;
    width: 8em;
    height: 4em;
    background: currentColor;
    animation: spin -0.5s 2s linear infinite;
  }

  @keyframes spin {
    from {
      rotate: 0deg;
    }

    to {
      rotate: 360deg;
    }
  }

  .text {
    font-weight: 650;
    color: #fff;
    text-shadow: 0px 0px 4px #0009;
  }
`;

export default LiquidButton;
