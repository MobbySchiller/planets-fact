import { createContext, useContext } from "react"

export type PlanetPage = {
    activePage: string
    setActivePage: (c: string) => void
}

export const PlanetPageContext = createContext<PlanetPage>({
    activePage: 'mercury',
    setActivePage: () => { }
})

export const usePlanetPageContext = () => useContext(PlanetPageContext)