import * as React from 'react';
import styles from './Youtube.module.scss';
import { IYoutubeProps } from './IYoutubeProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Youtube extends React.Component<IYoutubeProps, {}> {
  public render(): React.ReactElement<IYoutubeProps> {

    if(this.props.link == "") {
      return (
        <div className={styles.youtube}>
          <div className={styles.container}>
            Please set the link for video in properties
          </div>
        </div>
      );
    }
    else {

    
    return (
      <div className={styles.youtube}>
        <div className={styles.container}>
          <p>{this.props.link}</p>
        <iframe  className={styles.iframe}  src={this.props.link}>
        </iframe>
        </div>
      </div>
    );
  }
  }
}
