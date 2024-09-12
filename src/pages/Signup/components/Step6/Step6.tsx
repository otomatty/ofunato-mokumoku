import { createSignal, createEffect, onMount } from "solid-js";
import { FormData } from "../../../../types/formTypes";
import {
  FormGroup,
  Label,
  CardsContainer,
  Card,
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
} from "./Step6.styled";
import { RequiredTag } from "../../Signup.styled";
import {
  fetchUpcomingEvents,
  CalendarEvent,
  getLocationImage,
  getLocationName,
  formatTimeRange,
  formatDateAndDay,
  getYear,
} from "../../../../utils/googleCalendar";

interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setIsStepValid: (isValid: boolean) => void;
}

const Step6 = ({ formData, setFormData, setIsStepValid }: StepProps) => {
  const [selectedDate, setSelectedDate] = createSignal(formData.date);
  const [events, setEvents] = createSignal<CalendarEvent[]>([]);

  const handleSelectDate = (selectedDate: string) => {
    setSelectedDate(selectedDate);
    setFormData({ ...formData, date: selectedDate });
  };

  createEffect(() => {
    setIsStepValid(!!selectedDate());
  });

  onMount(async () => {
    const upcomingEvents = await fetchUpcomingEvents();
    setEvents(upcomingEvents || []);
  });

  return (
    <FormGroup>
      <Label>
        参加希望日を選択してください<RequiredTag>必須</RequiredTag>
      </Label>
      <CardsContainer>
        {events().map((event) => {
          const { date, day } = formatDateAndDay(event.start.dateTime);
          const isSelected = selectedDate() === event.start.dateTime;
          return (
            <Card
              onClick={() => handleSelectDate(event.start.dateTime)}
              class={isSelected ? "selected" : ""}
            >
              <EventDateTime>
                <EventYear>{getYear(event.start.dateTime)}</EventYear>
                <EventDateWrapper>
                  <EventDate>{date}</EventDate>
                  <EventDay>{day}</EventDay>
                </EventDateWrapper>
                <EventTime>
                  {formatTimeRange(event.start.dateTime, event.end.dateTime)}
                </EventTime>
              </EventDateTime>
              <EventImage
                src={getLocationImage(event.location || "")}
                alt={event.summary}
              />
              <EventDetails>
                <EventTitle>{event.summary}</EventTitle>
                <EventLocation>
                  {getLocationName(event.location || "")}
                </EventLocation>
              </EventDetails>
            </Card>
          );
        })}
      </CardsContainer>
    </FormGroup>
  );
};

export default Step6;
