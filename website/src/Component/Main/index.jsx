import React from 'react'
import Banner from './Banner'
import Trainer from './Trainer'
import ClassRoutine from './ClassRoutine'
import Store from './Store'
import Testimonial from './Testimonial'
import LatestBlog from './LatestBlog'
import UpcomingClass from './UpcomingClass'
import Blog from './Blog'
import ClassFeatures from './ClassFeatures'

function index() {
    return (
        <>
            <UpcomingClass />
            <Blog />
            <ClassFeatures />
            <Trainer />
            <ClassRoutine />
            <Store />
            <Testimonial />
            <LatestBlog />
            <Banner />
        </>
    )
}

export default index