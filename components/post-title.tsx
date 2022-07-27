import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h4 className="title">
      {children}
    </h4>
  )
}

export default PostTitle
