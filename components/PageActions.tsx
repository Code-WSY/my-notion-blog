import * as React from 'react'

import { AiOutlineRetweet } from '@react-icons/all-files/ai/AiOutlineRetweet'
import { IoHeartOutline } from '@react-icons/all-files/io5/IoHeartOutline'

import styles from './styles.module.css'

/**
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview
 */
export const PageActions: React.FC<{ tweet: string }> = ({ tweet }) => {
  return (
    <div className={styles.pageActions}>
      <a
        className={styles.likeTweet}
        //href={`https://twitter.com/intent/like?tweet_id=${tweet}`}
        href={`https://zhuanlan.zhihu.com/p/${tweet}`}
        target='_blank'
        rel='noopener noreferrer'
        //title='Like this post on Twitter'
        title='Like this post on Zhihu'
      >
        <IoHeartOutline />
      </a>

      <a
        className={styles.retweet}
        //href={`https://twitter.com/intent/retweet?tweet_id=${tweet}`}
        href={`https://zhuanlan.zhihu.com/p/${tweet}`}
        target='_blank'
        rel='noopener noreferrer'
        //title='Retweet this post on Twitter'
        title='Retweet this post on Zhihu'
      >
        <AiOutlineRetweet />
      </a>
    </div>
  )
}
