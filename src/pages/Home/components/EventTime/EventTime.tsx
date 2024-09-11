import { Component, createSignal, onMount } from 'solid-js';
import {
  EventTimeWrapper,
  EventList,
  EventTitleStyled,
  EventTimeStyled,
  DayWrapper,
  DayStyled,
  HighlightedDayStyled,
} from './EventTime.styled';
import SectionContainer from '../../../../components/SectionContainer/SectionContainer';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

const eventDays: { [key: string]: string } = {
  火: '18:00 | 21:00',
  土: '14:00 | 17:00',
};

const EventTime: Component = () => {
  const [titleHeight, setTitleHeight] = createSignal(0);
  let titleRef: HTMLDivElement | undefined;

  onMount(() => {
    if (titleRef) {
      const titleElement = titleRef.querySelector('h2');
      if (titleElement) {
        const styles = window.getComputedStyle(titleElement);
        const marginBottom = parseFloat(styles.marginBottom);
        setTitleHeight(titleElement.offsetHeight + marginBottom);
      }
    }
  });

  return (
    <SectionContainer className="event-time-section">
      <EventTimeWrapper>
        <div ref={titleRef}>
          <SectionTitle title="毎週開催しています" />
        </div>
        <EventList style={{ height: `calc(100% - ${titleHeight()}px)` }}>
          <p>火曜日と土曜日の週2回開催</p>
          <div class="days-container">
            {daysOfWeek.map((day) => (
              <DayWrapper>
                {eventDays[day] ? (
                  <HighlightedDayStyled>
                    <EventTitleStyled>{day}</EventTitleStyled>
                    <EventTimeStyled>{eventDays[day]}</EventTimeStyled>
                  </HighlightedDayStyled>
                ) : (
                  <DayStyled>{day}</DayStyled>
                )}
              </DayWrapper>
            ))}
          </div>
        </EventList>
      </EventTimeWrapper>
    </SectionContainer>
  );
};

export default EventTime;
