import { ArrowCircleRight } from 'phosphor-react'

import { dark, styled } from '~/styles/stitches.config'

import { Button } from '../Buttons/Button'
import { Heading } from '../Text/Heading'
import { CodeField } from '../Fields/FieldCode'
import { Copy } from '../Text/Copy'

import { useWindowSize } from '~/hooks/useWindowSize'

export const HeroHome = () => {
  const { width, height } = useWindowSize()

  return (
    <Header>
      <TitleTop style={{ width, height }}>
        <TitleContent>
          <Heading tag="h1" fontStyle="$XXL">
          <div>aoviz（Art of Visualization）</div>
          <div>可视化的艺术。</div>
          </Heading>
          <TopFields>
            <CodeField />
            <NavLink variant="large" href="/docs/getting-started">
              <span>Get started</span>
              <ArrowCircleRight size={24} color="var(--colors-steel100)" />
            </NavLink>
          </TopFields>
        </TitleContent>
      </TitleTop>
      <TitleBottom style={{ width, height }}>
        <Left>
          <Heading tag="h2" fontStyle="$L">
            Why @aoviz/graphs?
          </Heading>
          <Copy
            fontStyle="$M"
            css={{
              mt: '$25',
              whiteSpace: 'pre-line',
            }}>
            {`我们提供了简洁的 API 设计，良好的扩展机制（屏蔽了底层复杂逻辑），以及丰富的内置插件。`}
          </Copy>
        </Left>
        <Right>
          <Copy fontStyle="$M">
            {`未来将内置丰富的交互动画，并提供 React 组件以简化使用方式。`}
          </Copy>
        </Right>
      </TitleBottom>
      <Background>
        <BallContainer>
          <RedBall />
        </BallContainer>
        <BallContainer css={{ mt: '-70vh' }}>
          <OrangeBall />
        </BallContainer>
        <BallContainer
          css={{
            mt: '-50vh',
            '@tabletUp': {
              mt: '-70vh',
            },
          }}>
          <GreenBall />
        </BallContainer>
        <BallContainer
          css={{
            mt: '-50vh',
            '@tabletUp': {
              mt: '-70vh',
            },
            mb: '10vh',
          }}>
          <BlueBall />
        </BallContainer>
      </Background>
    </Header>
  )
}

const Header = styled('header', {
  position: 'relative',
  zIndex: 0,
})

const TitleTop = styled('div', {
  position: 'absolute',
  height: '100vh',
  width: '100vw',
  top: 0,
  left: 0,
  zIndex: '$1',

  '@tabletUp': {
    minHeight: 'unset',
  },
})

const TitleContent = styled('div', {
  maxWidth: '$type',
  px: '$25',
  pt: '$100',

  '@tabletUp': {
    px: '$50',
    pt: 'calc((175 / 1440) * 100%)',
  },
})

const TopFields = styled('div', {
  display: 'flex',
  mt: '$40',
  flexDirection: 'column',
  alignItems: 'flex-start',

  '@tabletUp': {
    flexDirection: 'row',
    gap: '$20',
  },
})

const NavLink = styled(Button, {
  mt: '$20',

  '& > span': {
    mr: 12,
  },

  '@tabletUp': {
    mt: 0,
  },

  /**
   * TODO: think about this... maybe its okay?
   */
  //   hover: {
  //     '& polyline, & line': {
  //       stroke: '$red100',
  //     },
  //   },

  //   '@motion': {
  //     '& polyline, & line': {
  //       transition: 'stroke 200ms ease-out',
  //     },
  //   },
})

const TitleBottom = styled('div', {
  position: 'absolute',
  height: '100vh',
  width: '100vw',
  bottom: 0,
  left: 0,
  px: '$25',
  zIndex: '$1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@tabletUp': {
    minHeight: 'unset',
    px: '$50',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

const Left = styled('div', {
  maxWidth: 630,
})

const Right = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',

  '@tabletUp': {
    maxWidth: 630,
    pb: 192,
  },
})

const Background = styled('div', {
  position: 'relative',
  width: '100%',
  zIndex: 0,
})

const BallContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  position: 'relative',
})

const RedBall = styled('div', {
  width: 'min(1440px, 100%)',
  position: 'absolute',
  aspectRatio: 1,
  top: 'max(-720px, -50vw)',
  right: 'max(-720px, -50vw)',
  borderRadius: '50%',
  backgroundColor: '#fafafa',
  filter: 'blur(4px)',
  boxShadow: `inset 0 0 100px -30px #fafafa, inset 0px 0px 30vw 30vw rgb(255 109 109), 0 0 120px 80px rgb(255 109 109)`,

  '@desktopUp': {
    boxShadow: `inset 0 0 100px -30px #fafafa, inset 0px 0px 40vw 40vw rgb(255 109 109), 0 0 120px 80px rgb(255 109 109)`,
  },

  [`.${dark} &`]: {
    boxShadow: `inset 0 0 100px -40px #fafafa, inset 0px 0px 30vw 30vw rgb(255 109 109), 0 0 70px 40px rgb(255 109 109)`,

    '@desktopUp': {
      boxShadow: `inset 0 0 100px -40px #fafafa, inset 0px 0px 40vw 40vw rgb(255 109 109), 0 0 70px 40px rgb(255 109 109)`,
    },
  },
})

const OrangeBall = styled('div', {
  aspectRatio: 1,
  width: 'max(240px, 20vw)',
  position: 'absolute',
  left: 'min(-125px, -10vw)',
  top: '40vh',
  borderRadius: '50%',
  backgroundColor: '#fafafa',
  filter: 'blur(4px)',

  '@tabletUp': {
    top: '28vh',
  },

  boxShadow: `inset 0 0 100px -30px #fafafa, inset 0px 0px max(60px, 6vw) max(60px, 6vw) #FFB74B, 0 0 120px 80px #FFB74B`,

  [`.${dark} &`]: {
    boxShadow: `inset 0 0 100px -40px #fafafa, inset 0px 0px max(60px, 6vw) max(60px, 6vw) #FFB74B, 0 0 70px 40px #FFB74B`,
  },
})

const GreenBall = styled('div', {
  aspectRatio: 1,
  position: 'absolute',
  width: 'min(576px, 40vw)',
  borderRadius: '50%',
  backgroundColor: '#fafafa',
  filter: 'blur(4px)',
  right: '20vw',
  bottom: 0,
  opacity: 0.6,

  '@tabletUp': {
    opacity: 1,
    bottom: '10vh',
    right: '10vw',
  },

  boxShadow: `inset 0 0 100px -30px #fafafa, inset 0px 0px max(70px, 12vw) max(70px, 12vw) #88DFAB, 0 0 120px 80px #88DFAB`,

  [`.${dark} &`]: {
    boxShadow: `inset 0 0 100px -40px #fafafa, inset 0px 0px max(70px, 12vw) max(70px, 12vw) #88DFAB, 0 0 70px 40px #88DFAB`,
  },
})

const BlueBall = styled('div', {
  aspectRatio: 1,
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: '#fafafa',
  filter: 'blur(4px)',
  width: 'min(430px, 30vw)',
  bottom: 40,
  left: 100,
  opacity: 0.6,

  '@tabletUp': {
    opacity: 1,
  },

  boxShadow: `inset 0 0 100px -30px #fafafa, inset 0px 0px max(70px, 8vw) max(70px, 8vw) #569AFFB3, 0 0 120px 80px #569AFFB3`,

  [`.${dark} &`]: {
    boxShadow: `inset 0 0 100px -40px #fafafa, inset 0px 0px max(70px, 8vw) max(70px, 8vw) #569AFF, 0 0 70px 40px #569AFF`,
  },
})
