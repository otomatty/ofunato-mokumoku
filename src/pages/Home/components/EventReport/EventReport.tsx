import { Component } from 'solid-js';
import { EventReportWrapper, ReportItem } from './EventReport.styled';
import SectionContainer from '../../../../components/SectionContainer/SectionContainer';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { eventReports } from '../../../../data/eventReportData';

const EventReport: Component = () => {
  return (
    <SectionContainer className="event-report-section">
      <EventReportWrapper>
        <SectionTitle title="これまでの活動を見てみましょう" />
        <div class="report-list">
          {eventReports.map((report) => (
            <ReportItem>
              <h3>{report.title}</h3>
              <p>{report.content}</p>
              <a href={`/reports/${report.id}`}>詳細を見る</a>
            </ReportItem>
          ))}
        </div>
        <p class="more-reports">
          過去のイベントレポートは<a href="/reports">こちら</a>
          からご覧いただけます。
        </p>
      </EventReportWrapper>
    </SectionContainer>
  );
};

export default EventReport;
