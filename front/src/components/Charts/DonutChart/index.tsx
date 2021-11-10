import c3 from 'c3'
import styled from 'styled-components';
import { DonutChartData } from '../../../types/chart-types';

const DonutChartComponent = styled.div`
  font-size: 12px;
  
  

  .c3-chart-arcs-title {
    font-weight: 100;
    font-size: 1.2em;
  }
`

type DonutChartProps = {
  title?: string;
  data: DonutChartData[],
  onClick?: (obj: DonutChartData) => void
}

export type Primitive = string | boolean | number | Date | null;
export type PrimitiveArray = Primitive[];
type ChartColumnsType = Array<[string, ...PrimitiveArray]> | undefined;

export function DonutChart({ title, data, onClick }: DonutChartProps) {

  const chartData: ChartColumnsType = data.map(d => {
    return [d.label, ...d.values]
  })

  function handleMouseClick(d: c3.DataPoint) {
    const obj = data.find(item => item.label === d.id)
    if (onClick && obj) {
      onClick(obj);
    }

  }

  console.log(chartData)
  c3.generate({
    bindto: '#donutChart',
    size: {      
      height: 250
    },    
    data: {
      columns: chartData,
      type: 'donut',
      onclick: function (d, i) { handleMouseClick(d); },
      onmouseover: function (d, i) {  },
      onmouseout: function (d, i) {  }
    },
    donut: {
      title: title
    }
  });
  return (
    <DonutChartComponent id="donutChart"></DonutChartComponent>
  )
}