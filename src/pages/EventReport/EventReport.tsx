import { Component } from "solid-js";
import { EventReportWrapper, ReportItem } from "./EventReport.styled";
import { eventReports } from "../../data/eventReportData";

const EventReport: Component = () => {
  return (
    <EventReportWrapper>
      <h1>イベントレポート</h1>
      {eventReports.map((report) => (
        <ReportItem>
          <h2>{report.title}</h2>
          <p>{report.content}</p>
          <a href={`/reports/${report.id}`}>詳細を見る</a> {/* 修正 */}
        </ReportItem>
      ))}
    </EventReportWrapper>
  );
};

export default EventReport;
