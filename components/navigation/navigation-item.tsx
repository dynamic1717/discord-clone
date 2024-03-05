'use client'

import { useParams, useRouter } from 'next/navigation'

import { ActionTooltip } from '@/components/action-tooltip'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface INavigationItemProps {
  id: string
  imageUrl: string
  name: string
}

export const NavigationItem: React.FC<INavigationItemProps> = ({
  id,
  imageUrl,
  name,
}) => {
  const params = useParams()
  const router = useRouter()

  const onClick = () => {
    router.push(`/servers/${id}`)
  }

  return (
    <ActionTooltip label={name} side='right'>
      <button className='flex relative items-center group' onClick={onClick}>
        <span
          className={cn(
            'absolute left-0 bg-primary rounded-r-full transition-all w-1',
            params?.serverId !== id && 'group-hover:h-5',
            params?.serverId === id ? 'h-9' : 'h-2'
          )}
        />
        <div
          className={cn(
            'relative group flex mx-3 h-12 w-12 rounded-3xl group-hover:rounded-2xl transition-all overflow-hidden',
            params?.serverId === id && 'bg-primary/10 text-primary rounded-2xl'
          )}
        >
          <Image fill src={imageUrl} alt={name} className='object-cover' />
        </div>
      </button>
    </ActionTooltip>
  )
}
