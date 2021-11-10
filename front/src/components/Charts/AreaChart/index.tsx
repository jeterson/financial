import styled from "styled-components"
import c3 from 'c3'
import { useEffect } from "react";

const AreaChartComponent = styled.div`
  
  font-weight: 100;
  font-size: 12px;

  .c3-legend-item {
    font-weight: 300;    
    font-size: 12px;
  }

  svg {
    font-weight: 100; 
  }
`

export function AreaChart() {

  useEffect(() => {
    renderChart();
  }, [])
  
  function renderChart() {
    c3.generate({
      bindto: '#areaChart',
      
      data: {
        columns: [
          ['data1', 300, 350, 300, 0, 0, 0],
          ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
          data1: 'area',
          data2: 'area-spline'
        },        
      },
    });
  }
  return (
    <AreaChartComponent id="areaChart"></AreaChartComponent>
  )
}