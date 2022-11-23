import { MetaFunction } from '@remix-run/node'
import { CarouselQuotes } from '~/components/Carousels/CarouselQuotes'
import { NavigationGrid } from '~/components/Grids/NavigationGrid'
import { Header } from '~/components/Header/Header'
import { HeroHome } from '~/components/Heros/HeroHome'

import { COMMUNITY_TILES, QUOTES, TOOL_TILES } from '~/data/fixtures'
import { styled } from '~/styles/stitches.config'

export const meta: MetaFunction = () => {
  return {
    title: 'Aoviz',
    description: `aoviz（Art of Visualization），可视化的艺术。`,
  }
}

export default function Index() {
  return (
    <>
      <MainHeader
        addMarginToMain={false}
        position="fixed"
        alwaysAnimateHeader
      />
      <Main>
        <article>
          <MaxWrapper>
            <HeroHome />
          </MaxWrapper>
          {/* <CarouselQuotes quotes={QUOTES} /> */}
          {/* <MaxWrapper>
            <HomeBlocks>
              <HomeBlockTarget />
              <HomeBlockImperative />
              <HomeBlockSSR />
              <HomeBlockMore />
            </HomeBlocks>
            <ExternalLinkGrid
              cols={3}
              tiles={COMMUNITY_TILES}
              subheading={'Join our community'}
              heading={'Share thoughts and join in with active discussions'}
              smallTiles
            />
            <ExternalLinkGrid
              cols={4}
              tiles={TOOL_TILES}
              subheading={'Check out the ecosystem'}
              heading={'See more fantastic tools from Poimandres'}
              smallTiles
            />
          </MaxWrapper> */}
        </article>
      </Main>
    </>
  )
}

const MainHeader = styled(Header, {
  pb: '$15',

  '@tabletUp': {
    pb: '$25',
  },
})

const ExternalLinkGrid = styled(NavigationGrid, {
  mx: '$25',
  '@tabletUp': {
    mx: '$50',
  },
})

const Main = styled('main', {
  width: '100%',
  overflowX: 'hidden',
})

const MaxWrapper = styled('div', {
  maxWidth: '$largeDoc',
  mx: 'auto',
})

const HomeBlocks = styled('div', {
  my: '$40',

  '@tabletUp': {
    mt: '$100',
    mb: '$80',
  },
})
