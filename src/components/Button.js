import styled from '@emotion/styled';

const Button = styled.button`
  background: $props{theme.colors.backgroundCard};
  border-radius: 30px;
  margin-bottom: 20px;
  padding: 5px 20px;
  margin-top: 20px;
  color:$props{theme.colors.textPrimary};
  &: a {
    text-decoration: none;
  }
`;
export default Button;
