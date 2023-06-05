import { useCallback, useEffect, useState } from 'react'
import { Show } from '../interfaces/show'
import { Page } from '../components/Page'
import { GridContent } from '../components/GridContent'
import { API } from '../services/api'
import { Toast } from '../components/Toast'

interface HomeProps {
  query: string
}

const Home = (props: HomeProps) => {
  const { query } = props
  const [shows, setShows] = useState<Show[]>([])
  const [toastIsVisible, setToastIsVisible] = useState<boolean>(false)
  const title = query ? `Sökresultat för "${query}"` : `Upptäck TV-serier & filmer med Tv Series search`

  const onFetchShows = useCallback(async (inputValue: string) => {
    const toastTimeout = setTimeout(() => {
      setToastIsVisible(true)
    }, 2500);
    const showsResult = await API.tvmaze.search(inputValue || query)
    clearTimeout(toastTimeout)
    setToastIsVisible(false)
    setShows(showsResult)
  }, [query])

  useEffect(() => {
    if (!query) {
      setShows([])
      return
    }
    onFetchShows(query)
  }, [onFetchShows, query])

  return (
    <Page
      title={title}
      isLoaded={!!query || shows.length > 0}
      description='Utforska spännande TV-underhållning med vår TV Search Media App. Upptäck tusentals TV-program och serier från TvMaze för en enastående TV-upplevelse.'
    >
      <Toast isVisible={toastIsVisible} />
      <GridContent shows={shows} />
    </Page>
  )
}

interface HomeGetServerSideProps {
  query: { query: string }
}

export async function getServerSideProps(props: HomeGetServerSideProps) {
  const { query = "" } = props?.query
  return { props: { query } }
}

export default Home
