import { styled } from 'solid-styled-components';

export const FormGroup = styled('div')`
  margin-bottom: 1.5rem;
`;

export const Label = styled('label')`
  display: block;
  margin: 1rem 0;
  font-weight: bold;
`;

export const CardsContainer = styled('ul')`
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Card = styled('li')`
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow: visible;
  position: relative;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &.selected {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.4);
    background-color: #007bff;
    color: white;
  }
`;

export const CategoryLabel = styled('h3')`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

export const TextArea = styled('textarea')`
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const AccordionHeader = styled('div')`
  cursor: pointer;
  padding: 10px;
  background-color: #f0f0f0;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled('span')`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
`;

export const AccordionContent = styled('div')<{ open: boolean }>`
  max-height: ${(props) => (props.open ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  opacity: ${(props) => (props.open ? '1' : '0')};
`;

export const AccordionInner = styled('div')`
  padding: 10px;
  border: 1px solid #ddd;
  border-top: none;
`;
