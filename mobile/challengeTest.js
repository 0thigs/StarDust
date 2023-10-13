'use client'
import { useState } from 'react'
import { useChallengesList } from '@/hooks/useChallengesList'

import { Select } from '../Select'
import { Tag } from './Tag'
import { CheckCircle, Circle, Icon, Minus } from '@phosphor-icons/react'

import type { Difficulty, Status } from '@/contexts/ChallengesListContext'
import { FILTER_SELECTS_ITEMS } from '@/utils/constants/filter-selects-items'

export function Filters() {
  const { state, dispatch } = useChallengesList()
  const [tags, setTags] = useState<string[]>([])
  console.log(tags)

  function addTag(newTag: string) {
    setTags((currentTags) => [...currentTags, newTag])
  }

  function removeTag(removedTag: string) {
    setTags((currentTags) => currentTags.filter((tag) => tag !== removedTag))
  }

  function handleStatusChange(newStatus: Status) {
    console.log(newStatus)

    removeTag(state.status)

    dispatch({ type: 'setStatus', payload: newStatus })

    if (state.status !== 'all') {
      addTag(newStatus)
    }
  }

  function handleDifficultyChange(newDifficulty: Difficulty) {
    dispatch({ type: 'setDifficulty', payload: newDifficulty })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <Select.Container
          onValueChange={(newStatus: string) =>
            handleStatusChange(newStatus as Status)
          }
        >
          <Select.Trigger value="Status" />
          <Select.Content>
            {FILTER_SELECTS_ITEMS.map((item, index, allItems) => {
              const isLastItem = index === allItems.length - 1
              return (
                <Select.Item
                  value={item.value}
                  icon={item.icon}
                  text={item.text}
                  iconStyles={item.iconStyles}
                />
              )
            })}
          </Select.Content>
        </Select.Container>

        <Select.Container
          onValueChange={(newDifficulty: string) =>
            handleDifficultyChange(newDifficulty as Difficulty)
          }
        >
          <Select.Trigger value="Dificuldade" />
          <Select.Content>
            <Select.Item value="easy" text="Fácil" textStye="text-green-500" />
            <Select.Separator />
            <Select.Item
              value="medium"
              text="Médio"
              textStye="text-yellow-400"
            />
            <Select.Separator />
            <Select.Item value="hard" text="Difícil" textStye="text-red-700" />
          </Select.Content>
        </Select.Container>
      </div>

      <div className="flex flex-wrap mt-6">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  )
}
