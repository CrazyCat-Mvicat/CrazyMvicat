import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 9:14 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes._580b57fcd9996e24bc43c4c41}></div>
      <div className={classes.welcomeToCrazyMvicat}>Welcome To CrazyMvicat!</div>
      <div className={classes.ifYouHaveAnyIdeasOnWhatWeShoul}>
        <div className={classes.textBlock}>If you have any ideas on what we should put on here simply contact</div>
        <div className={classes.textBlock2}>alexccat.yt@gmail.com!</div>
        <div className={classes.textBlock3}>
          <p></p>
        </div>
        <div className={classes.textBlock4}>Thank you!</div>
      </div>
    </div>
  );
});
