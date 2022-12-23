import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader

        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="150" cy="110" r="110" />
        <rect x="0" y="400" rx="6" ry="6" width="95" height="26" />
        <rect x="0" y="245" rx="6" ry="6" width="280" height="26" />
        <rect x="0" y="280" rx="6" ry="6" width="280" height="88" />
        <rect x="128" y="390" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton

