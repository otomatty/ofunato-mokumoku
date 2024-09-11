import { Component, createSignal } from "solid-js";
import { ScheduleWrapper, Tabs, Tab } from "./Schedule.styled";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CardSection from "./components/CardSection/CardSection";
import CalendarSection from "./components/CalendarSection/CalendarSection";

const Schedule: Component = () => {
  const [selectedTab, setSelectedTab] = createSignal("cards");

  return (
    <ScheduleWrapper>
      <SectionTitle title="開催予定のもくもく会" />

      <Tabs>
        <Tab
          class={selectedTab() === "cards" ? "active" : ""}
          onClick={() => setSelectedTab("cards")}
        >
          リストで確認する
        </Tab>
        <Tab
          class={selectedTab() === "calendar" ? "active" : ""}
          onClick={() => setSelectedTab("calendar")}
        >
          カレンダーで確認する
        </Tab>
      </Tabs>

      {selectedTab() === "cards" && <CardSection />}

      {selectedTab() === "calendar" && <CalendarSection />}
    </ScheduleWrapper>
  );
};

export default Schedule;
