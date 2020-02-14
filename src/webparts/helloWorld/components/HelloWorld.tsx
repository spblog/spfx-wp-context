import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { getContext } from '../HelloWorldWebPart';
import SubModule from "./subModule/SubModule";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    const helloWorldContext = getContext();

    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <p className={styles.subTitle}>WebPart Id: </p>
              <p className={styles.description}>{helloWorldContext.instanceId}</p>
              <SubModule />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
