import { ResponsivePie } from '@nivo/pie'
import { pieChartData } from './data'

interface PieChartProps {
    data: number[]
}

export const PieChart = ({ data }: PieChartProps) => {
    data.map((val, ind) => (pieChartData[ind].value = val))

    return (
        <ResponsivePie
            data={pieChartData}
            valueFormat=" >-"
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 2]],
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            fill={[
                {
                    match: {
                        id: '0-10',
                    },
                    id: 'dots',
                },
                {
                    match: {
                        id: '11-18',
                    },
                    id: 'dots',
                },
                {
                    match: {
                        id: '19-25',
                    },
                    id: 'dots',
                },
                {
                    match: {
                        id: '26-30',
                    },
                    id: 'dots',
                },
                {
                    match: {
                        id: '31-40',
                    },
                    id: 'lines',
                },
                {
                    match: {
                        id: '41-55',
                    },
                    id: 'lines',
                },
                {
                    match: {
                        id: '55-99',
                    },
                    id: 'lines',
                },
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000',
                            },
                        },
                    ],
                },
            ]}
        />
    )
}
