import { ResponsiveLine } from '@nivo/line'
import { lineChartData, lineChartValues } from './data'

interface LineChartProps {
  data: number[]
}

export const LineChart = ({ data }: LineChartProps) => {
  data.map((val, ind) => (lineChartValues[ind].y = val))

  return (
    <ResponsiveLine
      data={lineChartData}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      xFormat=" >-"
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'population',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'active in sports',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'category10' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
        {
          anchor: 'left',
          direction: 'column',
          justify: false,
          translateX: 0,
          translateY: 0,
          itemWidth: 100,
          itemHeight: 20,
          itemsSpacing: 4,
          symbolSize: 20,
          symbolShape: 'circle',
          itemDirection: 'left-to-right',
          itemTextColor: '#777',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
        {
          anchor: 'left',
          direction: 'column',
          justify: false,
          translateX: 0,
          translateY: 0,
          itemWidth: 100,
          itemHeight: 20,
          itemsSpacing: 4,
          symbolSize: 20,
          symbolShape: 'circle',
          itemDirection: 'left-to-right',
          itemTextColor: '#777',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}
