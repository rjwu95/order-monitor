import { useMemo } from "react";

interface MonitorProps {
  success: number;
  failure: number;
}
interface ItemProps {
  label: string;
  value: string;
  unit?: string;
}

const Item = ({ label, value, unit }: ItemProps) => {
  return (
    <div className="item">
      <p>{label}</p>
      <p>
        <span>{value}</span>
        <span className="unit">{unit}</span>
      </p>
    </div>
  );
};

export const Monitor = ({ success, failure }: MonitorProps) => {
  const errorRate = useMemo(
    () =>
      failure > 0 ? ((failure / (success + failure)) * 100).toFixed(2) : "0",
    [success, failure]
  );
  const formattedNumber = (value: number): string =>
    String(value).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");

  return (
    <div className="wrapper">
      <Item label="Success" value={formattedNumber(success)} />
      <Item label="Failure" value={formattedNumber(failure)} />
      <Item label="Error rate" value={errorRate} unit="%" />
    </div>
  );
};
