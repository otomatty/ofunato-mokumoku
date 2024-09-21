import { styled, keyframes } from "solid-styled-components";

export const LearningThemesWrapper = styled("div")`
  padding: 2rem 0;
`;

export const CategoryGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CategoryCard = styled("div")`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CategoryEmoji = styled("span")`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  display: block;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const CategoryTitle = styled("h3")`
  font-size: 1rem;
  color: #333;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ThemeList = styled("ul")`
  list-style-type: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ThemeItem = styled("li")`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  span {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
`;

export const BackButton = styled("button")`
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const AnimatedContainer = styled("div")`
  animation: ${fadeIn} 0.3s ease-out;
`;
