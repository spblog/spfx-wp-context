import * as React from 'react';
import { getContext } from '../../HelloWorldWebPart';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export default class SubModule extends React.Component<{}, {}> {

  private wpContext: WebPartContext;
  constructor(props) {
    super(props);
    this.wpContext = getContext();
  }
  public render() {
    const helloWorldContext = getContext();

    return (
      <div>
        <div>Sub component:</div>
        <div>{helloWorldContext.instanceId}</div>
      </div>
    );
  }
}
