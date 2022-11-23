import { styled } from '~/styles/stitches.config'

import { ButtonCopy } from '../Buttons/ButtonCopy'
import { LivePreview, LivePreviewProps } from './LivePreview'

import { Pre } from './Pre'

interface CodeProps
  extends Pick<
    LivePreviewProps,
    'code' | 'defaultOpen' | 'showCode' | 'template'
  > {
  id?: string
  isLive?: boolean
  showLineNumbers?: boolean
  ['data-showing-lines']?: boolean
  children?: any
  className?: string
  copy?: string
}

export const Code = ({
  isLive,
  code,
  showCode,
  className,
  copy,
  defaultOpen,
  template,
  ...restProps
}: CodeProps) => {
  if (isLive) {
    return (
      <LivePreview
        code={code}
        showCode={showCode}
        className={className}
        defaultOpen={defaultOpen}
        preProps={{ ...restProps }}
        template={template}
      />
    )
  } else {
    return (
      <CodePre className={className} {...restProps}>
        {copy ? <PreCopy>{copy}</PreCopy> : null}
        {restProps.children}
      </CodePre>
    )
  }
}

const PreCopy = styled(ButtonCopy, {
  position: 'absolute',
  top: 24,
  right: 24,
  display: 'none',

  '@tabletUp': {
    display: 'block',
  },
})

const CodePre = styled(Pre, {
  [`${PreCopy}`]: {
    opacity: 0,

    '@motion': {
      transition: 'opacity 200ms ease-out',
    },
  },

  hover: {
    [`${PreCopy}`]: {
      opacity: 1,
    },
  },
})
