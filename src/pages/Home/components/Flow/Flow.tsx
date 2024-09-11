import { Component } from 'solid-js';
import {
  FlowWrapper,
  FlowList,
  FlowCard,
  CardTitle,
  CardContent,
  CardNumber,
} from './Flow.styled';
import SectionContainer from '../../../../components/SectionContainer/SectionContainer';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const Flow: Component = () => {
  return (
    <SectionContainer className="flow-section">
      <FlowWrapper>
        <SectionTitle title="内容を見てみましょう" />
        <FlowList>
          <FlowCard>
            <CardNumber>1</CardNumber>
            <CardTitle>開始の挨拶と自己紹介</CardTitle>
            <CardContent>参加者全員で自己紹介を行います。</CardContent>
          </FlowCard>
          <FlowCard>
            <CardNumber>2</CardNumber>
            <CardTitle>各自の作業時間</CardTitle>
            <CardContent>各自の作業に集中する時間です。</CardContent>
          </FlowCard>
          <FlowCard>
            <CardNumber>3</CardNumber>
            <CardTitle>休憩時間</CardTitle>
            <CardContent>リフレッシュのための休憩時間です。</CardContent>
          </FlowCard>
          <FlowCard>
            <CardNumber>4</CardNumber>
            <CardTitle>進捗報告と振り返り</CardTitle>
            <CardContent>進捗を報告し、振り返りを行います。</CardContent>
          </FlowCard>
          <FlowCard>
            <CardNumber>5</CardNumber>
            <CardTitle>終了の挨拶</CardTitle>
            <CardContent>最後に全員で挨拶をして終了です。</CardContent>
          </FlowCard>
        </FlowList>
      </FlowWrapper>
    </SectionContainer>
  );
};

export default Flow;
