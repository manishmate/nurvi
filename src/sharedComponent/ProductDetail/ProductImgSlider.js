
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import ReactImageMagnify from 'react-image-magnify';

import ReactSlick from "react-slick";
import imageUrls from '../../sharedfiles/ImagesURLs';

const ProductImgSlider = observer(
  class ProductImgSlider extends React.Component {

    constructor(props) {
      super(props);

     
    }
    componentDidMount() {
       window.scrollTo(0,0);
    }

    render() {
      const { appstore } = this.props;
      const {
        rimProps,
        rsProps
    } = this.props;

    const frontSrcSet = [
        { src: imageUrls.catogary_1.default, setting: '500w' },
        { src: imageUrls.catogary_1.default, setting: '779w' },
    ]
        .map(item => `${item.src} ${item.setting}`)
        .join(', ');
    
    const backSrcSet = [
        { src: imageUrls.catogary_1.default, setting: '500w' },
        { src: imageUrls.catogary_1.default, setting: '779w' },
    ]
        .map(item => `${item.src} ${item.setting}`)
        .join(', ');
    
    const dataSource = [
        {
            srcSet: frontSrcSet,
            small: imageUrls.catogary_1.defaultnt_500,
            large: imageUrls.catogary_1.default
        },
        {
            srcSet: backSrcSet,
            small: imageUrls.catogary_1.default,
            large: imageUrls.catogary_1.default
        }
    ];

      return (
                <ReactSlick
                {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }}
                {...rsProps}
                
                 >
                   
                  {dataSource.map((src, index) => (
                    <div key={index}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: src.small,
                                    srcSet: src.srcSet,
                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    src: src.large,
                                    width: 1426,
                                    height: 2000
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            {...rimProps}
                        />
                    </div>
                ))
              }
            </ReactSlick>
      )
    }
  }
)
export default ProductImgSlider




