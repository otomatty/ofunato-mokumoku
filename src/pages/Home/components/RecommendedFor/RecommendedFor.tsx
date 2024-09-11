import { Component } from 'solid-js';
import {
  RecommendedForWrapper,
  RecommendationList,
} from './RecommendedFor.styled';
import SectionContainer from '../../../../components/SectionContainer/SectionContainer';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const RecommendedFor: Component = () => {
  const recommendations = [
    '新しいスキルを身につけたい',
    '自己学習のモチベーションを高めたい',
    '一緒に学べる仲間がほしい',
    '他の人と知識やアイデアを交換したい',
    '様々な世代と交流してみたい',
    '今の自分をもっと成長させたい',
  ];

  return (
    <SectionContainer className="recommended-for-section">
      <RecommendedForWrapper>
        <SectionTitle title="こんな方におすすめです" />
        <RecommendationList>
          {recommendations.map((recommendation) => (
            <li>{recommendation}</li>
          ))}
        </RecommendationList>
      </RecommendedForWrapper>
    </SectionContainer>
  );
};

export default RecommendedFor;
