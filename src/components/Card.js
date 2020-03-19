import styled from '@emotion/styled';

const Card = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundCard};
  border-radius: 60px 60px 0 0;
  box-shadow: -5px -15px 80px rgba(255, 255, 255, 0.178);
  position: absolute;
  bottom: 0;
`;
export default Card;
