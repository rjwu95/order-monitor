import { useMemo } from "react";

interface MonitorProps {
  success: number;
  failure: number;
}

export const Monitor = ({ success, failure }: MonitorProps) => {
  const errorRate = useMemo(
    () =>
      failure > 0 ? ((failure / (success + failure)) * 100).toFixed(2) : 0,
    [success, failure]
  );
  const formattedNumber = (value: number): string =>
    String(value).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");

  return (
    <div className="wrapper">
      <div className="item">
        <p>Success</p>
        <p>
          <span>{formattedNumber(success)}</span>
        </p>
      </div>
      <div className="item">
        <p>Failure</p>
        <p>
          <span>{formattedNumber(failure)}</span>
        </p>
      </div>
      <div className="item">
        <p>Error rate</p>
        <p>
          <span>{errorRate}</span>
          <span className="unit">%</span>
        </p>
      </div>
    </div>
  );
};
