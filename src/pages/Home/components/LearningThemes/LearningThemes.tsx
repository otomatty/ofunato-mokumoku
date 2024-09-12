import { Component, createSignal, Show } from "solid-js";
import {
  LearningThemesWrapper,
  CategoryGrid,
  CategoryCard,
  CategoryEmoji,
  CategoryTitle,
  ThemeList,
  ThemeItem,
  BackButton,
  AnimatedContainer,
} from "./LearningThemes.styled";
import SectionContainer from "../../../../components/SectionContainer/SectionContainer";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { themeData, Theme } from "../../../../data/themeData";

const LearningThemes: Component = () => {
  const [selectedCategory, setSelectedCategory] = createSignal<Theme | null>(
    null
  );

  const handleCategoryClick = (category: Theme) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  return (
    <SectionContainer className="learning-themes-section">
      <LearningThemesWrapper>
        <SectionTitle title="取り組むテーマは無限、あなたは何をしますか？" />
        <Show
          when={selectedCategory()}
          fallback={
            <AnimatedContainer>
              <CategoryGrid>
                {themeData.map((category) => (
                  <CategoryCard onClick={() => handleCategoryClick(category)}>
                    <CategoryEmoji>{category.emoji}</CategoryEmoji>
                    <CategoryTitle>{category.category}</CategoryTitle>
                  </CategoryCard>
                ))}
              </CategoryGrid>
            </AnimatedContainer>
          }
        >
          {(category) => (
            <AnimatedContainer>
              <BackButton onClick={handleBackClick}>
                ← カテゴリー一覧に戻る
              </BackButton>
              <h2>{category().category}</h2>
              <ThemeList>
                {category().themes.map((theme) => (
                  <ThemeItem>
                    <span>{theme.emoji}</span> {theme.title}
                  </ThemeItem>
                ))}
              </ThemeList>
            </AnimatedContainer>
          )}
        </Show>
      </LearningThemesWrapper>
    </SectionContainer>
  );
};

export default LearningThemes;
