import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Props {
  data: any;
  xAxisObj: {
    label: string;
    labelOffset: number;
    labelFormatter?: Function;
  };
  yAxisObj: {
    label: string;
    labelOffset: number;
    labelFormatter?: Function;
  };
}

d3.selection.prototype.moveToFront = function () {
  return this.each(() => {
    this.parentNode.appendChild(this);
  });
};

const ScatterGraph = ({
  data,
  xAxisObj,
  yAxisObj,
}: Props) => {
  const ref = useRef(null);

  const margin = { top: 30, right: 30, bottom: 30, left: 30 };
  const width = 400 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;

  useEffect(() => {
    const svgElement = d3.select(ref.current);
    const x = configureXAxis(svgElement, xAxisObj);
    const y = configureYAxis(svgElement, yAxisObj);

    // Add points
    svgElement
      .append('g')
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d: any) => x(d.x))
      .attr('cy', (d: any) => y(d.y))
      .attr('r', 2)
      .style('fill', '#df4a00')
  }, [data, width, height, margin.left, margin.top, xAxisObj, yAxisObj]);

  const configureXAxis = (svgElement: any, xAxisObj: any) => {
    const xDomain = d3.extent(data, (d: any) => d.x);
    const x = d3
      .scaleLinear()
      .domain([Number(xDomain[0]) - 0.1, Number(xDomain[1]) + 0.1])
      .range([0, width]);

    const xAxis = d3.axisBottom(x);
    if (xAxisObj.labelFormatter) {
      xAxis.tickFormat((d: any) => xAxisObj.labelFormatter(d));
    }
    svgElement
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    // text label for the x axis
    svgElement
      .append('text')
      .attr(
        'transform',
        'translate(' + width / 2 + ' ,' + (height + margin.top) + ')'
      )
      .style('text-anchor', 'middle')
      .style('font', '10px arial')
      .text(xAxisObj.label);

    return x;
  };

  const configureYAxis = (svgElement: any, yAxisObj: any) => {
    // Add Y axis
    const yDomain = d3.extent(data, (d: any) => d.y);

    const y = d3
      .scaleLinear()
      .domain([Number(yDomain[0]) - 0.1, Number(yDomain[1]) + 0.1])
      .range([height, 0]);

    // format the y axis
    const yAxis = d3.axisLeft(y);
    if (yAxisObj.labelFormatter) {
      yAxis.tickFormat((d: any) => yAxisObj.labelFormatter(d));
    }
    svgElement.append('g').call(yAxis);

    // text label for the y axis
    svgElement
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', +yAxisObj.labelOffset - margin.left)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font', '10px arial')
      .text(yAxisObj.label);

    return y;
  };

  return (
    <div id='svgContainer'>
      <svg viewBox='-45 -5 400 178' ref={ref} />
    </div>
  );
};

export default ScatterGraph;
