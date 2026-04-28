import React, { Fragment } from 'react'
import Notification from './Partials/Notification'
import { CustomPageTitle } from '@components/others/CustomPageTitle'

export const AlertNotification = () => {
    return (
        <Fragment>
            <CustomPageTitle Heading={"Let’s check your store today!"} /><br />
            <Notification />
        </Fragment>
    )
}
