import { css, keyframes } from 'styled-components';

const BounceEffect = keyframes`
  0% { transform: translateY(0) }
  30% { transform: translateY(-2%) }
  60% { transform: translateY(-5%) }
  100% { transform: translateY(0) }
`;

const MessageEffect = keyframes`
  0% { transform: rotate(2deg) translateY(-100%) }
  25% { transform: rotate(-2deg) translateY(-75%) }
  50% { transform: rotate(2deg) translateY(-50%) }
  75% { transform: rotate(-2deg) translateY(-25%) }
  100% { transform: rotate(0) translateY(0%) }
`;

export const BounceAnimation = () =>
  css`
    animation: ${BounceEffect} 0.5s linear infinite;
    animation-delay: 0.1s;
  `;

export const MessageAnimation = () =>
  css`
    animation: ${MessageEffect} 0.5s linear;
    animation-duration: 2s;
  `;
