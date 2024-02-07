import { useState } from 'react'
import { Graphs, graphsList } from '../../utils/constants/graphs'

import './population.css'
import { IconButton } from '../../elements/buttons/iconbutton/inconbutton'
import { BasicButton } from '../../elements/buttons/basicbutton/basicbutton'

export const PopulationView = () => {
  const [selectedGraph, setSelectedGraph] = useState<Graphs>(Graphs.BarGraph)

  return (
    <main className="population">
      <nav className="population_nav">
        {graphsList.map((graph) => {
          return (
            <IconButton
              icon={graph.icon}
              onClick={() => setSelectedGraph(graph.name)}
            />
          )
        })}
      </nav>
      <section>
        {selectedGraph === Graphs.BarGraph && <div>bar</div>}
        {selectedGraph === Graphs.LineGraph && <div>line</div>}
      </section>
      <nav className="population_nav">
        <BasicButton
          text="Population 2023"
          onClick={() => console.log('test')}
        />
        <BasicButton
          text="Population Compare"
          onClick={() => console.log('test')}
        />
      </nav>
    </main>
  )
}
