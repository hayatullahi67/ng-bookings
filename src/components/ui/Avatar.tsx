import { FaUser } from 'react-icons/fa'

type AvatarProps = {
  tone?: 'primary' | 'maroon'
  size?: 'md' | 'lg'
}

function Avatar({ tone = 'primary', size = 'md' }: AvatarProps) {
  const color = tone === 'primary' ? 'bg-primary' : 'bg-maroon'
  const box = size === 'md' ? 'h-10 w-10 text-base' : 'h-11 w-11 text-lg'
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-white ${color} ${box}`}
    >
      <FaUser aria-hidden="true" />
    </span>
  )
}

export default Avatar
