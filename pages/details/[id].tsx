import { Page } from '../../components/Page'
import { API } from '../../services/api'
import { useRouter } from 'next/router'
import { GoBack } from '../../components/GoBack'
import { Cast, Show } from '../../interfaces/show'
import { DetailsView } from '../../components/DetailsView'

interface DetailsPageProps {
  show: Show;
  cast: Cast[];
}

const DetailsPage = (props: DetailsPageProps) => {
  const { show, cast } = props
  const router = useRouter()

  const onGoBack = () => {
    router.back()
  }

  return (
    <Page
      title={show.name}
      isLoaded
      description={`Upptäck en omfattande samling av underhållning, inklusive populära titlar som "${show.name}" och många fler. `}
    >
      <GoBack onClick={onGoBack} />
      <DetailsView show={show} cast={cast} />
    </Page>
  )
}

interface DetailsPageGetServerSideProps {
  query: { id: string }
}

export async function getServerSideProps(props: DetailsPageGetServerSideProps) {
  const { id } = props.query

  const [show, cast] = await Promise.all([
    API.tvmaze.show(id),
    API.tvmaze.cast(id)
  ])

  return {
    props: { show, cast }
  }
}

export default DetailsPage
