import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #f0f0f5;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  margin: 10px;

  section.image {
    background: #ffb84d;
    border-radius: 8px 8px 0px 0px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    @media(max-width: 960px) {
      width:100%;
    }

    ${props =>
      !props.available &&
      css`
        opacity: 0.3;
      `};

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 30px;

    h2 {
      color: #3d3d4d;
    }

    p {
      color: #3d3d4d;

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }
`;
