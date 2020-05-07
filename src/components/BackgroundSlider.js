import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'

const CSlider = () => {
      return (
        <div className='HeaderSlider'>
            <BackgroundSlider 
            query={useStaticQuery(graphql`
                query {
                    backgrounds: allFile (filter: { absolutePath: {regex : "\/bg/"}}) {
                    nodes {
                    relativePath
                    childImageSharp {
                        fluid (maxWidth: 4000, quality: 80){
                        ...GatsbyImageSharpFluid
                        }
                    }
                    }
                }
                }
            `)}
            initDelay={20} // delay before the first transition (if left at 0, the first image will be skipped initially)
            transition={2} // transition duration between images
            duration={20} // how long an image is shown
            pagination='true'
            style={{
                height: "100%",
              }}   
            />
    </div>
    )
}

export default CSlider