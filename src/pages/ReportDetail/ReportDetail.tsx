import { Component } from "solid-js";
import { useParams } from "@solidjs/router";
import { ReportDetailWrapper, ReportDetailInner } from "./ReportDetail.styled";
import { eventReports } from "../../data/eventReportData";

const ReportDetail: Component = () => {
  const params = useParams();
  const report = eventReports.find((r) => r.id === parseInt(params.id));

  if (!report) {
    return <p>レポートが見つかりませんでした。</p>;
  }

  return (
    <ReportDetailWrapper>
      <ReportDetailInner>
        <h1>{report.title}</h1>
        <p>{report.content}</p>
        <a href="/reports">戻る</a>
      </ReportDetailInner>
    </ReportDetailWrapper>
  );
};

export default ReportDetail;
