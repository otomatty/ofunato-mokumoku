import { Component, createResource } from "solid-js";
import {
  CalendarSectionWrapper,
  CalendarGrid,
  CalendarCell,
  CalendarHeader,
} from "./CalendarSection.styled";
import { fetchUpcomingEvents } from "../../../../utils/googleCalendar";

const CalendarSection: Component = () => {
  const [events] = createResource(fetchUpcomingEvents);

  const getDaysInMonth = (year: number, month: number) => {
    return new Array(31)
      .fill(null)
      .map((_, index) => {
        const date = new Date(year, month, index + 1);
        return date.getMonth() === month ? date : null;
      })
      .filter((date) => date !== null);
  };

  const renderCalendar = () => {
    const now = new Date();
    const daysInMonth = getDaysInMonth(now.getFullYear(), now.getMonth());

    return (
      <CalendarGrid>
        {daysInMonth.map((date) => (
          <CalendarCell>
            <div>{date!.getDate()}</div>
            {events() &&
              events()!
                .filter(
                  (event) =>
                    new Date(event.start.dateTime).toDateString() ===
                    date!.toDateString()
                )
                .map((event) => <div>{event.summary}</div>)}
          </CalendarCell>
        ))}
      </CalendarGrid>
    );
  };

  return (
    <CalendarSectionWrapper>
      <CalendarHeader>
        <h2>
          {new Date().toLocaleString("default", { month: "long" })}{" "}
          {new Date().getFullYear()}
        </h2>
      </CalendarHeader>
      {renderCalendar()}
    </CalendarSectionWrapper>
  );
};

export default CalendarSection;
