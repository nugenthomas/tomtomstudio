import styled from 'styled-components';

const Tag = styled.span`
  background-color: ${props => props.background || '#f5f5f5'};
  border-radius: 20px;
  color: ${props => props.color || 'black'};
  display: inline-flex;
  font-family: Arial;
  font-size: 0.75rem;
  justify-content: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  white-space: nowrap;
  margin: 0.2rem;
`;

export default Tag;