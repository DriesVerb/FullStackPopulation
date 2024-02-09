import { useState } from 'react'
import { fetchApi } from '../../utils/helper/api'
import { backendPublic } from '../../utils/constants/env'
import { initialState } from '../../utils/mock/graphdata'
import { Graphs, graphsList } from '../../utils/constants/graphs'

import { IconButton } from '../../elements/buttons/iconbutton/inconbutton'
import { BasicButton } from '../../elements/buttons/basicbutton/basicbutton'
import { BarChart, LineChart, PieChart } from '../../components/charts'

import './population.css'

export const PopulationView = () => {
    const [selectedGraph, setSelectedGraph] = useState<Graphs>(Graphs.BarGraph)
    const [data, setData] = useState<number[]>(initialState)

    const handleCompare = async () => {
        const response = await fetchApi(
            `${backendPublic}/population/age/compare`
        )
        setData(response)
    }

    const handle2023 = async () => {
        const response = await fetchApi(`${backendPublic}/population/age/2023`)
        setData(response)
    }

    return (
        <main className="population">
            <nav className="population_nav">
                {graphsList.map((graph, key) => {
                    return (
                        <IconButton
                            key={key}
                            icon={graph.icon}
                            onClick={() => setSelectedGraph(graph.name)}
                        />
                    )
                })}
            </nav>
            <section className="population_graph">
                {selectedGraph === Graphs.BarGraph && <BarChart data={data} />}
                {selectedGraph === Graphs.PieGraph && <PieChart data={data} />}
                {selectedGraph === Graphs.LineGraph && (
                    <LineChart data={data} />
                )}
            </section>
            <nav className="population_nav">
                <BasicButton
                    text="Population 2023"
                    onClick={() => handle2023()}
                />
                <BasicButton
                    text="Population Compare"
                    onClick={() => handleCompare()}
                />
            </nav>
        </main>
    )
}
