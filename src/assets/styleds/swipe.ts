import styled from '@emotion/styled';

export const StyledSwipeList = styled.section``;

export const StyledSwipeItem = styled.section`
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const StyledSwipeItemContent = styled.main`
  width: 100%;
  transition: all 0.2s ease;
`;

export const StyledSwipeItemRight = styled.aside`
  transition: all 0.2s ease;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100%;
`;

export const StyledSwipeItemLeft = styled.aside`
  transition: all 0.2s ease;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
`;

export const StyledSwipeCheck = styled.span<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1.5px solid ${props => (props.checked ? '#FB4B42' : '#d9d9d9')};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  background-color: ${props => (props.checked ? '#FB4B42' : 'transparent')};
  &:before {
    content: '';
    display: ${props => (props.checked ? 'flex' : 'none')};
    width: 5px;
    height: 10px;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(45deg) translateX(-1px) translateY(-1px);
  }
`;
