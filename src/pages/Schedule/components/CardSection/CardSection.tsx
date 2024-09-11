import { Component, createResource, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import {
  CardSectionWrapper,
  EventCard,
  EventDateTime,
  EventDateWrapper,
  EventImage,
  EventDetails,
  EventTitle,
  EventDate,
  EventDay,
  EventTime,
  EventLocation,
  EventYear,
  ShowMoreButton,
} from "./CardSection.styled";
import {
  fetchUpcomingEvents,
  CalendarEvent,
  getLocationImage,
  getLocationName,
  formatTimeRange,
  formatDateAndDay,
  getYear,
} from "../../../../utils/googleCalendar";
import TooltipWithLink from "../../../../components/TooltipWithLink/TooltipWithLink"; // 新しいインポート

const CardSection: Component = () => {
  const [events] = createResource(fetchUpcomingEvents);
  const [showAll, setShowAll] = createSignal(false);

  const toggleShowAll = () => setShowAll(!showAll());

  return (
    <CardSectionWrapper>
      {events() ? (
        <ul class={showAll() ? "expanded" : "collapsed"}>
          {events()!
            .slice(0, showAll() ? events()!.length : 3)
            .map((event: CalendarEvent, index, array) => {
              const { date, day } = formatDateAndDay(event.start.dateTime);
              const isLastVisible = !showAll() && index === array.length - 1;
              return (
                <EventCard as="li" class={isLastVisible ? "last-visible" : ""}>
                  <EventDateTime>
                    <EventYear>{getYear(event.start.dateTime)}</EventYear>
                    <EventDateWrapper>
                      <EventDate>{date}</EventDate>
                      <EventDay>{day}</EventDay>
                    </EventDateWrapper>
                    <EventTime>
                      {formatTimeRange(
                        event.start.dateTime,
                        event.end.dateTime
                      )}
                    </EventTime>
                  </EventDateTime>
                  <EventImage
                    src={getLocationImage(event.location || "")}
                    alt={event.summary}
                  />
                  <EventDetails>
                    <EventTitle>{event.summary}</EventTitle>
                    <EventLocation>
                      {event.location ? (
                        <TooltipWithLink content="マップを表示します">
                          <A
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location || "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {getLocationName(event.location || "")}
                          </A>
                        </TooltipWithLink>
                      ) : (
                        "未定"
                      )}
                    </EventLocation>
                  </EventDetails>
                </EventCard>
              );
            })}
        </ul>
      ) : (
        <p>直近1ヶ月のイベントはありません。</p>
      )}
      {events() && events()!.length > 3 && (
        <ShowMoreButton onClick={toggleShowAll}>
          {showAll() ? "表示を減らす" : "もっと見る"}
        </ShowMoreButton>
      )}
    </CardSectionWrapper>
  );
};

export default CardSection;
