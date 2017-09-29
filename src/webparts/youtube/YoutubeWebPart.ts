import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'YoutubeWebPartStrings';
import Youtube from './components/Youtube';
import { IYoutubeProps } from './components/IYoutubeProps';

export interface IYoutubeWebPartProps {
  description: string;
  link: string;
}

export default class YoutubeWebPart extends BaseClientSideWebPart<IYoutubeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IYoutubeProps > = React.createElement(
      Youtube,
      {
        description: this.properties.description,
        link: this.properties.link,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('link', {
                  label: strings.LinkFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
