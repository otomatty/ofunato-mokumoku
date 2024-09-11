import { Component } from "solid-js";
import { HomePageWrapper, EventSectionWrapper } from "./HomePage.styled";
import EventTime from "./components/EventTime/EventTime";
import Features from "./components/Features/Features";
import LearningThemes from "./components/LearningThemes/LearningThemes";
import RecommendedFor from "./components/RecommendedFor/RecommendedFor";
import Schedule from "./components/Schedule/Schedule";
import FAQ from "./components/FAQ/FAQ";
import EventReport from "./components/EventReport/EventReport";
import Flow from "./components/Flow/Flow";
import MainVisual from "./components/MainVisual/MainVisual"; // 新しいインポート

const HomePage: Component = () => {
  return (
    <HomePageWrapper>
      <MainVisual /> {/* 新しいメインビジュアルセクション */}
      <Features />
      <LearningThemes />
      <RecommendedFor />
      <Flow />
      <EventSectionWrapper>
        <div>
          <EventTime />
          <Schedule />
        </div>
        <p>
          詳しい開催情報は<a href="/schedule">スケジュールページ</a>
          をご覧ください。
        </p>
      </EventSectionWrapper>
      <FAQ />
      <EventReport />
    </HomePageWrapper>
  );
};

export default HomePage;
